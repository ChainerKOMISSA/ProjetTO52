from flask import Flask, request, session, jsonify
from flask_mysqldb import MySQL
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
import MySQLdb.cursors

app = Flask(__name__)
app.secret_key = 'secret'

app.config['JWT_SECRET_KEY'] = 'secret'
jwt = JWTManager(app)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'eventsdatabase'

mysql = MySQL(app)
@app.route('/login', methods = ['GET','POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute('SELECT * FROM Utilisateur WHERE emailUtilisateur = %s AND mdpUtilisateur = %s', (email, password))
    user = cursor.fetchone()
    if user :
        session['loggedin'] = True
        session['idUtilisateur'] = user['idUtilisateur']
        session['emailUtilisateur'] = user['emailUtilisateur']
        session['mdpUtilisateur'] = user['mdpUtilisateur']
        access_token = create_access_token(identity=email)
        return jsonify({'access_token': access_token}), 200
    else :
        return jsonify({'message': 'Invalid credentials'}), 401


'''@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({'message': 'Protected resource'}), 200'''


@app.route('/register')
def register():
    print()

@app.route('/addevent')
def addevent():
    print()



if __name__ == "__main__":
    app.run(debug=True)
    #app.run(host="http://127.0.0.1/", port=5000, debug=True)

