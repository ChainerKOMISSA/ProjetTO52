from flask import Flask, request, session, jsonify

import mysql.connector
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.secret_key = 'secret-key' # Clé secrète utilisée pour la gestion de la session
upload_folder = r"C:\Users\KOMISSA ZOTSU SHINER\Documents\GitHub\ProjetTO52\Images"

# Configuration de la base de données MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="eventsdatabase",
)


# Convertir les objets timedelta en une représentation sérialisable
def serialize_timedelta(timedelta_obj):
    return str(timedelta_obj)



#---------------------------------------------------
#fonctions LOGIN & REGISTER
@app.route('/login', methods = ['GET','POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    cursor = db.cursor()
    query = "SELECT * FROM Utilisateur WHERE emailUtilisateur = %s AND mdpUtilisateur = %s"
    cursor.execute(query, (username, password))
    user = cursor.fetchone()
    cursor.close()
    if user:
        session['username'] = user[1]  # Sauvegarde du nom d'utilisateur en session
        return jsonify({'message': 'Connexion réussie'})
    else:
        return jsonify({'message': 'Identifiants invalides'})

@app.route('/register', methods = ['GET','POST'])
def register():
   data = request.get_json()
   username = data['username']
   email = data['email']
   password = data['password']
   cursor = db.cursor()
   query = "INSERT INTO Utilisateurs (nomUtilisateur, emailUtilisateur, mdpUtilisateur) VALUES (%s, %s, %s)"
   cursor.execute(query, username, email, password)
   db.commit()
   cursor.close()
   return jsonify({'message': 'Inscription réussie'})



#----------------------------------------------------
#fonctions CREATE
@app.route('/createvent', methods=['POST'])
def createvent():
    #récupération des données du formulaire
    nom = request.form['nomEvenement']
    description = request.form['descriptionEvenement']
    type = request.form['idType']
    dateDebut = request.form['dateDebut']
    dateFin = request.form['dateFin']
    heureDebut = request.form['heureDebut']
    heureFin = request.form['heureFin']
    lieu = request.form['lieuEvenement']
    programme = request.form['programme']
    image_file = request.files['imageEvenement']
    filename = secure_filename(image_file.filename)
    image_path = os.path.join(upload_folder, filename)
    image_file.save(image_path)

    cursor = db.cursor()
    query = "INSERT INTO Evenement " \
            "(nomEvenement, descriptionEvenement, idType, dateDebut, dateFin, " \
            "heureDebut, heureFin, lieuEvenement, programme, imageEvenement) " \
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s) "
    if nom and description and type and dateDebut and dateFin and heureDebut and heureFin and lieu and programme and image_path:
        cursor.execute(query, (nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme, image_path))
        db.commit()
        cursor.close()
        return jsonify({'message' : 'Evènement créé avec succès'})
    else :
        print("Erreur! Tous les champs requi ne sont pas remplis")

@app.route('/addnewsletter', methods=['POST'])
def createnewsletter():
    data = request.get_json()
    titre = data['libelleNewsletter']
    contenu = data['contenuNewsletter']
    admin = data['idAdmin']
    cursor = db.cursor()
    query = "INSERT INTO Newsletter(libelleNewsletter, contenuNewsletter, " \
            "idAdmin) VALUES (%s, %s, %s)"
    cursor.execute(query, (titre, contenu, admin))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Newsletter créée avec succès'})




#----------------------------------------------------
#fonctions READ
@app.route('/concert', methods = ['GET','POST'])
def readconcert():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idType = 1"
    cursor.execute(query)
    concerts = cursor.fetchall()
    cursor.close()

    concerts_list = []
    for concert in concerts:
        concert_dict = {
            'idEvenement' : concert[0],
            'nomEvenement' : concert[1],
            'descriptionEvenement' : concert[2],
            'dateDebut' : concert[4],
            'dateFin' : concert[5],
            'heureDebut': serialize_timedelta(concert[6]),
            'heureFin': serialize_timedelta(concert[7]),
            'lieuEvenement': concert[8],
            'programme': concert[9],
        }
        concerts_list.append(concert_dict)
    return jsonify({'concerts': concerts_list})

@app.route('/festival', methods = ['GET','POST'])
def readfestival():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idType = 2"
    cursor.execute(query)
    festivals = cursor.fetchall()
    cursor.close()

    festivals_list = []
    for festival in festivals:
        festival_dict = {
            'idEvenement' : festival[0],
            'nomEvenement' : festival[1],
            'descriptionEvenement' : festival[2],
            'dateDebut' : festival[4],
            'dateFin' : festival[5],
            'heureDebut': serialize_timedelta(festival[6]),
            'heureFin': serialize_timedelta(festival[7]),
            'lieuEvenement': festival[8],
            'programme': festival[9],
        }
        festivals_list.append(festival_dict)
    return jsonify({'festivals': festivals_list})

@app.route('/type', methods=['GET', 'POST'])
def readtype():
    cursor = db.cursor()
    query = "SELECT * FROM Type"
    cursor.execute(query)
    types = cursor.fetchall()
    cursor.close()

    types_list = []
    for type in types:
        type_dict = {
            'idType': type[0],
            'libelleType': type[1],
        }
        types_list.append(type_dict)
    return jsonify({'types': types_list})

@app.route('/newsletter', methods=['GET', 'POST'])
def newsletter():
    cursor = db.cursor()
    query = "SELECT * FROM Newsletter"
    cursor.execute(query)
    newsletters = cursor.fetchall()
    cursor.close()

    newsletters_list = []
    for newsletter in newsletters:
        newsletter_dict = {
            'idNewsletter': newsletter[0],
            'libelleNewsletter': newsletter[1],
            'contenuNewsletter': newsletter[2],
            'idAdmin': newsletter[3],
        }
        newsletters_list.append(newsletter_dict)
    return jsonify({'newsletters': newsletters_list})

@app.route('/admin', methods=['GET', 'POST'])
def readadmins():
    cursor = db.cursor()
    query = "SELECT * FROM Administrateur"
    cursor.execute(query)
    admins = cursor.fetchall()
    cursor.close()

    admins_list = []
    for admin in admins:
        admin_dict = {
            'idAdmin': admin[0],
            'nomAdmin': admin[1],
            'emailAdmin': admin[2],
            'motdepasseAdmin': admin[3],
        }
        admins_list.append(admin_dict)
    return jsonify({'admins': admins_list})

@app.route('/readevents', methods=['GET', 'POST'])
def readevents():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement"
    cursor.execute(query)
    events = cursor.fetchall()
    cursor.close()

    events_list = []
    for event in events:
        event_dict = {
            'idEvenement': event[0],
            'nomEvenement': event[1],
            'descriptionEvenement': event[2],
            'dateDebut': event[4],
            'dateFin': event[5],
            'heureDebut': serialize_timedelta(event[6]),
            'heureFin': serialize_timedelta(event[7]),
            'lieuEvenement': event[8],
            'programme': event[9],
            'imageEvenement' : event[10]
        }
        events_list.append(event_dict)
    return jsonify({'events': events_list})


#---------------------------------------------------
#fonctions UPDATE
@app.route('/updatevent/<int:idEvenement>', methods=['PUT'])
def updatevent(idEvenement):
    data = request.get_json()
    nom = data['nomEvenement']
    description = data['descriptionEvenement']
    type = data['idType']
    dateDebut = data['dateDebut']
    dateFin = data['dateFin']
    heureDebut = data['heureDebut']
    heureFin = data['heureFin']
    lieu = data['lieuEvenement']
    programme = data['programme']
    image_file = request.files['imageEvenement']
    filename = secure_filename(image_file.filename)
    image_path = os.path.join(upload_folder, filename)
    image_file.save(image_path)

    cursor = db.cursor()
    query = "UPDATE Evenement SET nomEvenement = %s, descriptionEvenement = %s, " \
            "idType = %s, dateDebut = %s, dateFin = %s, heureDebut = %s, " \
            "heureFin = %s, lieuEvenement = %s, programme = %s, imageEvenement = %s WHERE idEvenement = %s"
    cursor.execute(query, (nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme, idEvenement, image_path))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Evènement mis à jour avec succès'})



#---------------------------------------------------
#fonctions DELETE
@app.route('/deletevent/<int:idEvenement>', methods=['DELETE'])
def deletevent(idEvenement):
    cursor = db.cursor()
    query = "DELETE FROM Evenement WHERE idEvenement = %s"
    cursor.execute(query, (idEvenement))
    db.commit()
    cursor.close()

    return jsonify({'message' : 'Evènement supprimé avec succès'})








#main
if __name__ == "__main__":
    app.run(debug=True)
    #app.run(host="http://127.0.0.1/", port=5000, debug=True)

