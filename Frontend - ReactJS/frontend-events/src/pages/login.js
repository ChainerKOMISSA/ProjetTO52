import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  //Déclaration des variables
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  //Fonctions de gestion des zones de saisie
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //Fonction de connexion
  const handleLogin = () => {
    //Déclaration des variables locales
    const data = {
      username: username,
      password: password,
    };

    //Envoi de la requête de connexion
    fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(({user}) => {
        //Gestion du résultat de la requête
        setUsername(user.username)
        setId(user.id)
        //Enregistrement des identifiants dans le local Storage
        localStorage.setItem('username', user.username)
        localStorage.setItem('id', user.id)
        //Redirection vers une autre route
        navigate('/dashboard/dashindex');
      })
      .catch((error) => {
        //Gestion en cas d'erreur
        console.error(error);
      });
  };

  return (
    //Code jsx pour le formulaire de connexion
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
         <div className="container p-5" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', width:'50%' }}>
         <h3 className="text-center mb-4">Connexion</h3>
         <Form>
            <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={username} onChange={handleUsernameChange} placeholder="JohnDOE@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="........." />
            </Form.Group>

        <Button variant="danger" onClick={handleLogin}>Connexion</Button>
      </Form>
        <p>Vous n'avez pas encore de compte? <Link to={'/register'}>Inscrivez-vous</Link></p>
         </div>
    </div>
    
  );
}

export default Login;
