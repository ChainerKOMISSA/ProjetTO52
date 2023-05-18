import requests, json
from flask import Flask, request, session, jsonify
import MySQLdb
import MySQLdb.cursors
import mysql.connector

app = Flask(__name__)
app.secret_key = 'secret-key' # Clé secrète utilisée pour la gestion de la session


# Configuration de la base de données MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="eventsdatabase"
)

# Convertir les objets timedelta en une représentation sérialisable
def serialize_timedelta(timedelta_obj):
    return str(timedelta_obj)


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


#fonctions CREATE
@app.route('/createvent', methods=['POST'])
def createvent():
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
    cursor = db.cursor()
    query = "INSERT INTO Evenement " \
            "(nomEvenement, descriptionEvenement, idType, dateDebut, dateFin, " \
            "heureDebut, heureFin, lieuEvenement, programme) " \
            "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s) "
    cursor.execute(query, (nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme))
    db.commit()
    cursor.close()
    return jsonify({'message' : 'Evènement créé avec succès'})


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
    cursor = db.cursor()
    query = "UPDATE Evenement SET nomEvenement = %s, descriptionEvenement = %s, " \
            "idType = %s, dateDebut = %s, dateFin = %s, heureDebut = %s, " \
            "heureFin = %s, lieuEvenement = %s, programme = %s WHERE idEvenement = %s"
    cursor.execute(query, (nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme, idEvenement))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Evènement mis à jour avec succès'})



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

