from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector, os
from werkzeug.utils import secure_filename
import sendgrid
from sendgrid.helpers.mail import Mail

# Configurations
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})  # Gestion de la police CORS
app.secret_key = 'secret-key'  # Clé secrète utilisée pour la gestion de la session
upload_folder = r"static\Images"  # Dossier d'enregistrment des images uploadées
allowed_extensions = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = upload_folder

# Configuration de la base de données MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="eventsdatabase",
)

# Convertir les objets timedelta en une représentation sérialisable
# Nous l'avons utilisée pour convertir les heures
def serialize_timedelta(timedelta_obj):
    return str(timedelta_obj)


# ---------------------------------------------------
# fonctions LOGIN & REGISTER
@app.route('/login', methods=['GET', 'POST'])
def login():
    # Récupération des données de l'interface
    data = request.get_json()
    # Attribution des données aux variables locales
    username = data['username']
    password = data['password']
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Utilisateur WHERE emailUtilisateur = %s AND mdpUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (username, password))
    user = cursor.fetchone()
    cursor.close()
    user_dict = {}
    # Vérification de l'existence de l'utilisateur dans la base de données
    if user:
        # Attribution des éléments du résultat aux variables id et username
        user_dict['id'] = user[0]
        user_dict['username'] = user[1]
        # Envoi du contenu des variables au frontend
        return jsonify({'user': user_dict})
    else:
        # Gestion en cas d'erreur
        return jsonify({'message': 'Identifiants invalides'})


@app.route('/register', methods=['GET', 'POST'])
def register():
    # Récupération des données de l'interface
    data = request.get_json()
    # Attribution des données aux variables locales
    username = data['username']
    email = data['email']
    password = data['password']
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête d'insertion
    query = "INSERT INTO Utilisateur (nomUtilisateur, emailUtilisateur, mdpUtilisateur) VALUES (%s, %s, %s)"
    # Exécution de la requête
    cursor.execute(query, (username, email, password))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Inscription réussie'})


# ----------------------------------------------------
# fonctions CREATE
@app.route('/createvent', methods=['POST'])
def createvent():
    # Récupération des données du formulaire
    nom = request.form['nomEvenement']
    description = request.form['descriptionEvenement']
    type = request.form['idType']
    dateDebut = request.form['dateDebut']
    dateFin = request.form['dateFin']
    heureDebut = request.form['heureDebut']
    heureFin = request.form['heureFin']
    lieu = request.form['lieuEvenement']
    programme = request.form['programme']
    user = request.form['idUser']
    image_file = request.files['imageEvenement']
    # Récupération du nom du fichier et insertion dans le dossier ulpoad_folder
    filename = secure_filename(image_file.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    # Récupération du lien de l'image
    image_file.save(image_path)
    # Vérification de l'existence des données
    if nom and description and type and dateDebut and dateFin and heureDebut and heureFin and lieu and programme and image_path and user:
        # Curseur de recherche dans la base de données
        cursor = db.cursor()
        # Requête d'insertion
        query = "INSERT INTO Evenement " \
                "(nomEvenement, descriptionEvenement, idType, dateDebut, dateFin, " \
                "heureDebut, heureFin, lieuEvenement, programme, imageEvenement, idUtilisateur) " \
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s) "
        # Exécution de la requête
        cursor.execute(query, (
        nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme, image_path, user))
        db.commit()
        cursor.close()
        return jsonify({'message': 'Evènement créé avec succès'})
    else:
        # Gestion en cas d'erreur
        print("Erreur! Tous les champs requis ne sont pas remplis")


@app.route('/addnewsletter', methods=['POST'])
def createnewsletter():
    # Récupération des données de l'interface
    data = request.get_json()
    # Attribution des données aux variables locales
    titre = data['libelleNewsletter']
    contenu = data['contenuNewsletter']
    admin = data['idAdmin']
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête d'insertion
    query = "INSERT INTO Newsletter(libelleNewsletter, contenuNewsletter, " \
            "idUtilisateur) VALUES (%s, %s, %s)"
    # Exécution de la requête
    cursor.execute(query, (titre, contenu, admin))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Newsletter créée avec succès'})


@app.route('/createpub', methods=['POST'])
def createpub():
    # Récupération des données de l'interface
    libelle = request.form['libellePub']
    admin = request.form['idAdmin']
    image_file = request.files['imagePub']
    # Récupération du nom du fichier et insertion dans le dossier upload_folder
    filename = secure_filename(image_file.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    # Récupération du lien de l'image
    image_file.save(image_path)
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête d'insertion
    query = "INSERT INTO Publicite(libellePub, imagePub, idUtilisateur) VALUES (%s, %s, %s)"
    # Exécution de la requête
    cursor.execute(query, (libelle, image_path, admin))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Publicité créée avec succès!'})


# ----------------------------------------------------
# fonctions READ
@app.route('/concert/<int:id>', methods=['GET', 'POST'])
def readconcert(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idType = 1 HAVING idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    concerts = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    concerts_list = []
    for concert in concerts:
        # Attribution des données aux variables
        concert_dict = {
            'idEvenement': concert[0],
            'nomEvenement': concert[1],
            'descriptionEvenement': concert[2],
            'dateDebut': concert[4],
            'dateFin': concert[5],
            'heureDebut': serialize_timedelta(concert[6]),
            'heureFin': serialize_timedelta(concert[7]),
            'lieuEvenement': concert[8],
            'programme': concert[9]
        }
        concerts_list.append(concert_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'concerts': concerts_list})


@app.route('/festival/<int:id>', methods=['GET', 'POST'])
def readfestival(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idType = 2 HAVING idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    festivals = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    festivals_list = []
    for festival in festivals:
        # Attribution des données aux variables
        festival_dict = {
            'idEvenement': festival[0],
            'nomEvenement': festival[1],
            'descriptionEvenement': festival[2],
            'dateDebut': festival[4],
            'dateFin': festival[5],
            'heureDebut': serialize_timedelta(festival[6]),
            'heureFin': serialize_timedelta(festival[7]),
            'lieuEvenement': festival[8],
            'programme': festival[9],
        }
        festivals_list.append(festival_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'festivals': festivals_list})


@app.route('/spectacle/<int:id>', methods=['GET', 'POST'])
def readspectacle(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idType = 4 HAVING idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    spectacles = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    spectacles_list = []
    for spectacle in spectacles:
        # Attribution des données aux variables
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
        # Envoi du contenu des variables au frontend
    return jsonify({'spectacles': spectacles_list})


@app.route('/formation/<int:id>', methods=['GET', 'POST'])
def readformation(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idType = 6 HAVING idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    formations = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    formations_list = []
    for formation in formations:
        # Attribution des données aux variables
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
        # Envoi du contenu des variables au frontend
    return jsonify({'formations': formations_list})


@app.route('/autres', methods=['GET', 'POST'])
def readothers():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idType = 4"
    # Exécution de la requête
    cursor.execute(query)
    autres = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    autres_list = []
    for autre in autres:
        # Attribution des données aux variables
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
        # Envoi du contenu des variables au frontend
    return jsonify({'autres': autres_list})


@app.route('/type', methods=['GET', 'POST'])
def readtype():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Type"
    # Exécution de la requête
    cursor.execute(query)
    types = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    types_list = []
    for type in types:
        # Attribution des données aux variables
        type_dict = {
            'idType': type[0],
            'libelleType': type[1],
        }
        types_list.append(type_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'types': types_list})


@app.route('/newsletter/<int:id>', methods=['GET', 'POST'])
def newsletter(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Newsletter WHERE idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    newsletters = cursor.fetchall()
    cursor.close()
    # Traitement du résultat de la requête
    newsletters_list = []
    for newsletter in newsletters:
        # Attribution des données aux variables
        newsletter_dict = {
            'idNewsletter': newsletter[0],
            'libelleNewsletter': newsletter[1],
            'contenuNewsletter': newsletter[2],
            'idAdmin': newsletter[3],
        }
        newsletters_list.append(newsletter_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'newsletters': newsletters_list})


@app.route('/admin', methods=['GET', 'POST'])
def readadmins():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT idAdmin, nomAdmin FROM Administrateur"
    # Exécution de la requête
    cursor.execute(query)
    admins = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    admins_list = []
    for admin in admins:
    # Attribution des données aux variables
        admin_dict = {
            'idAdmin': admin[0],
            'nomAdmin': admin[1],
        }
        admins_list.append(admin_dict)
    # Envoi du contenu des variables au frontend
    return jsonify({'admins': admins_list})


@app.route('/readevents', methods=['GET', 'POST'])
def readevents():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement"
    # Exécution de la requête
    cursor.execute(query)
    events = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    events_list = []
    for event in events:
    # Attribution des données aux variables
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
            'imageEvenement': event[10]
        }
        events_list.append(event_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'events': events_list})


@app.route('/readmyevents/<int:id>', methods=['GET', 'POST'])
def readmyevents(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Evenement WHERE idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    events = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    events_list = []
    for event in events:
    # Attribution des données aux variables
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
            'imageEvenement': event[10]
        }
        events_list.append(event_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'events': events_list})


@app.route('/users', methods=['GET', 'POST'])
def readusers():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT emailUtilisateur FROM Utilisateur"
    # Exécution de la requête
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    users_list = []
    for user in users:
    # Attribution des données aux variables
        user_dict = {
            'emailUtilisateur': user[2]
        }
        users_list.append(user_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'users': users_list})


@app.route('/pubs', methods=['GET', 'POST'])
def readpubs():
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Publicite"
    # Exécution de la requête
    cursor.execute(query)
    publicites = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    publicites_list = []
    for publicite in publicites:
    # Attribution des données aux variables
        publicite_dict = {
            'idPub': publicite[0],
            'libellePub': publicite[1],
            'imagePub': publicite[2],
            'idAdmin': publicite[3]
        }
        publicites_list.append(publicite_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'publicites': publicites_list})


@app.route('/publicite/<int:id>', methods=['GET', 'POST'])
def readpub(id):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT * FROM Publicite WHERE idUtilisateur = %s"
    # Exécution de la requête
    cursor.execute(query, (id,))
    publicites = cursor.fetchall()
    cursor.close()
# Traitement du résultat de la requête
    publicites_list = []
    for publicite in publicites:
    # Attribution des données aux variables
        publicite_dict = {
            'idPub': publicite[0],
            'libellePub': publicite[1],
            'imagePub': publicite[2],
            'idAdmin': publicite[3]
        }
        publicites_list.append(publicite_dict)
        # Envoi du contenu des variables au frontend
    return jsonify({'publicites': publicites_list})


# ---------------------------------------------------
# fonctions UPDATE
@app.route('/updatevent/<int:idEvenement>', methods=['PUT'])
def updatevent(idEvenement):
    data = request.form
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
            "heureFin = %s, lieuEvenement = %s, programme = %s"
    params = [nom, description, type, dateDebut, dateFin, heureDebut, heureFin, lieu, programme]
    if filename != '':
        query += ", imageEvenement = %s"
        params.append(filename)

    query += "WHERE idEvenement = %s"
    params.append(idEvenement)

    cursor.execute(query, tuple(params))
    db.commit()
    cursor.close()
    return jsonify({'message': 'Evènement mis à jour avec succès'})


# ---------------------------------------------------
# fonctions DELETE
@app.route('/deletevent/<int:idEvenement>', methods=['DELETE'])
def deletevent(idEvenement):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de suppression
    query = "DELETE FROM Evenement WHERE idEvenement = %s"
    # Exécution de la requête
    cursor.execute(query, (idEvenement,))
    db.commit()
    cursor.close()

    return jsonify({'message': 'Evènement supprimé avec succès'})


@app.route('/deletenewsletter/<int:idNewsletter>', methods=['DELETE'])
def deletenewsletter(idNewsletter):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de suppression
    query = "DELETE FROM Newsletter WHERE idNewsletter = %s"
    # Exécution de la requête
    cursor.execute(query, (idNewsletter,))
    db.commit()
    cursor.close()

    return jsonify({'message': 'Newsletter supprimée avec succès'})


@app.route('/deletepub/<int:idPub>', methods=['DELETE'])
def deletepub(idPub):
    # Curseur de recherche dans la base de données
    cursor = db.cursor()
    # Requête de suppression
    query = "DELETE  FROM Publicite WHERE idPub = %s"
    # Exécution de la requête
    cursor.execute(query, (idPub,))
    db.commit()
    cursor.close()

    return jsonify({'message': 'Publicité supprimée avec succès'})




# fonction qui permet d'envoyer un mail contenant la newsletter aux utilisateurs
# pour le déploiement, une autre personne a besoin de créer un compte sur sendgrid et générer sa clé
@app.route('/send_emails', methods=['POST'])
def send_emails():
    # Récupération les informations de la newsletter à partager depuis la requête
    data = request.get_json()
    # Attribution des données aux variables
    libelleNewsletter = data['libelleNewsletter']
    contenuNewsletter = data['contenuNewsletter']

    # Récupération de la liste des adresses e-mail des utilisateurs depuis la base de données
    cursor = db.cursor()
    # Requête de sélection
    query = "SELECT emailUtilisateur FROM Utilisateur"
    # Exécution de la requête
    cursor.execute(query)
    users = cursor.fetchall()
    cursor.close()
    sender = 'Events.com'

    # Initialisation de l'API de messagerie
    # Diffère selon l'utilisateur. Nous avons renseigné nos propres coordonnées de messagerie pour la clé
    # Vous devez créer un compte sur Sendgrid et générer votre propre clé et la remplacer
    sg = sendgrid.SendGridAPIClient(api_key='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')

    # Envoi de mail à chaque utilisateur
    for user in users:
        emailUtilisateur = user[0]
        message = Mail(
            from_email='essikomissa@gmail.com',
            to_emails=emailUtilisateur,
            subject=libelleNewsletter,
            plain_text_content=contenuNewsletter
        )
        try:
            # Envoi du mail
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
        except Exception as e:
            # Gestion en cas d'erreur
            print(str(e))

    return jsonify({'message': 'E-mails envoyés avec succès'})


# main
if __name__ == "__main__":
    app.run(debug=True)
