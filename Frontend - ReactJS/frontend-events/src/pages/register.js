import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  //Déclaration des variables
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

   //Fonctions de gestion des zones de saisie
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  //Fonction d'inscription
  const handleRegister = () => {
    //Déclaration des variables locales
    const data = {
      username: username,
      email : email,
      password: password,
      confirmpassword : confirmpassword
    };

    //Envoi de la requête d'inscription
    fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        //Gestion du résultat de la requête
        console.log(data);
        //Redirection vers une autre route
        navigate('/dashboard')
      })
      .catch((error) => {
        //Gestion en cas d'erreur
        console.error(error);
      });
  };


  return (
    //Code jsx pour le formulaire d'inscription
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
         <div className="container p-5" style={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', width:'50%' }}>
         <h3 className="text-center mb-4">Inscription</h3>
         <Form>
         <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" value={username} onChange={handleUsernameChange} placeholder="John DOE" />
            </Form.Group>

            <Form.Group controlId="formUsername" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={email} onChange={handleEmailChange} placeholder="Johndoe@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control type="password" value={password} onChange={handlePasswordChange} placeholder="........." />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Confirmer le mot de passe</Form.Label>
            <Form.Control type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} placeholder="........." />
            </Form.Group>

        <Button variant="danger" onClick={handleRegister}>Inscription</Button>
      </Form>
        <p>Vous avez déjà un compte? <Link to={'/login'}>Connectez-vous</Link></p>
         </div>
    </div>
    
  );
}

export default Register