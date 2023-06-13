from flask import Flask, request, session, jsonify
from flask_cors import CORS
import mysql.connector, os
from werkzeug.utils import secure_filename
import sendgrid
from sendgrid.helpers.mail import Mail

app = Flask(__name__)
cors = CORS(app, resources={r"/*" : {"origins" : "*"}})
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
        return jsonify({'user': session['username']})
    else:
        return jsonify({'message': 'Identifiants invalides'})

@app.route('/register', methods = ['GET','POST'])
def register():
   data = request.get_json()
   username = data['username']
   email = data['email']
   password = data['password']
   cursor = db.cursor()
   query = "INSERT INTO Utilisateur (nomUtilisateur, emailUtilisateur, mdpUtilisateur) VALUES (%s, %s, %s)"
   cursor.execute(query, (username, email, password))
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

@app.route('/createpub', methods=['POST'])
def createpub():
    data = request.get_json()
    libelle = data['libellePub']
    admin = data['idAdmin']
    cursor = db.cursor()
    query = "INSERT INTO Publicite(libellePub, idAdmin) VALUES (%s, %s)"
    cursor.execute(query, (libelle, admin))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Publicité créée avec succès!'})


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

@app.route('/spectacle', methods=['GET', 'POST'])
def readspectacle():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idType = 4"
    cursor.execute(query)
    spectacles = cursor.fetchall()
    cursor.close()

    spectacles_list = []
    for spectacle in spectacles:
        spectacle_dict = {
            'idEvenement': spectacle[0],
            'nomEvenement': spectacle[1],
            'descriptionEvenement': spectacle[2],
            'dateDebut': spectacle[4],
            'dateFin': spectacle[5],
            'heureDebut': serialize_timedelta(spectacle[6]),
            'heureFin': serialize_timedelta(spectacle[7]),
            'lieuEvenement': spectacle[8],
            'programme': spectacle[9],
        }
        spectacles_list.append(spectacle_dict)
    return jsonify({'spectacles': spectacles_list})

@app.route('/formation', methods = ['GET', 'POST'])
def readformation():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idType = 6"
    cursor.execute(query)
    formations = cursor.fetchall()
    cursor.close()

    formations_list = []
    for formation in formations:
        formation_dict = {
            'idEvenement': formation[0],
            'nomEvenement': formation[1],
            'descriptionEvenement': formation[2],
            'dateDebut': formation[4],
            'dateFin': formation[5],
            'heureDebut': serialize_timedelta(formation[6]),
            'heureFin': serialize_timedelta(formation[7]),
            'lieuEvenement': formation[8],
            'programme': formation[9],
        }
        formations_list.append(formation_dict)
    return jsonify({'formations': formations_list})

@app.route('/autres', methods=['GET', 'POST'])
def readothers():
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idType = 4"
    cursor.execute(query)
    autres = cursor.fetchall()
    cursor.close()

    autres_list = []
    for autre in autres:
        autre_dict = {
            'idEvenement': autre[0],
            'nomEvenement': autre[1],
            'descriptionEvenement': autre[2],
            'dateDebut': autre[4],
            'dateFin': autre[5],
            'heureDebut': serialize_timedelta(autre[6]),
            'heureFin': serialize_timedelta(autre[7]),
            'lieuEvenement': autre[8],
            'programme': autre[9],
        }
        autres_list.append(autre_dict)
    return jsonify({'autres': autres_list})

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
    query = "SELECT idAdmin, nomAdmin FROM Administrateur"
    cursor.execute(query)
    admins = cursor.fetchall()
    cursor.close()

    admins_list = []
    for admin in admins:
        admin_dict = {
            'idAdmin': admin[0],
            'nomAdmin': admin[1],
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

@app.route('/getevent/<int:idEvenement>', methods=['GET'])
def get_event_details(idEvenement):
    cursor = db.cursor()
    query = "SELECT * FROM Evenement WHERE idEvenement = %s"
    cursor.execute(query, (idEvenement))
    event = cursor.fetchone()
    cursor.close()

    if event:
        return jsonify({'event' : event})
    else :
        return jsonify({'message' : 'Evènement non trouvé'})

@app.route('/users', methods=['GET', 'POST'])
def readusers():
    cursor = db.cursor()
    query = "SELECT emailUtilisateur FROM Utilisateur"
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()

    users_list = []
    for user in users:
        user_dict = {
            'emailUtilisateur' : user[2]
        }
        users_list.append(user_dict)
    return jsonify({'users' : users_list})

@app.route('/publicite', methods=['GET', 'POST'])
def readpub():
    cursor = db.cursor()
    query = "SELECT * FROM Publicite"
    cursor.execute(query)
    publicites = cursor.fetchall()
    cursor.close()

    publicites_list = []
    for publicite in publicites:
        publicite_dict = {
            'idPub' : publicite[0],
            'libellePub' : publicite[1],
            'idAdmin' : publicite[2]
        }
        publicites_list.append(publicite_dict)
    return jsonify({'publicites' : publicites_list})



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


#fonction qui permet d'envoyer un mail contenant la newsletter aux utilisateurs
@app.route('/send_emails', methods=['POST'])
def send_emails():
    # Récupération les informations de la newsletter à partager depuis la requête
    data = request.get_json()
    libelleNewsletter = data['libelleNewsletter']
    contenuNewsletter = data['contenuNewsletter']

    # Récupération de la liste des adresses e-mail des utilisateurs depuis votre base de données
    cursor = db.cursor()
    query = "SELECT emailUtilisateur FROM Utilisateur"
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()
    sender = 'Events.com'

    #Initialisation de l'API de messagerie
    sg = sendgrid.SendGridAPIClient(api_key='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')


    #Envoi de mail à chaque utilisateur
    for user in users:
        emailUtilisateur = user[0]
        message = Mail(
            from_email='essikomissa@gmail.com',
            to_emails=emailUtilisateur,
            subject=libelleNewsletter,
            plain_text_content=contenuNewsletter
        )
        try:
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            print(str(e))

    return jsonify({'message' : 'E-mails envoyés avec succès'})








#main
if __name__ == "__main__":
    app.run(debug=True)


