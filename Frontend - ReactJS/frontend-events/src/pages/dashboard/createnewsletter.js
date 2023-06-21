import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Card, Button, Form, Toast, ToastContainer} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Createnewsletter() {
  //Déclaration des variables
  const navigate = useNavigate()
  const [libelleNewsletter, setLibelleNewsletter] = useState('');
  const [contenuNewsletter, setContenuNewsletter] = useState('');
  const [idAdmin, setIdAdmin] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [admins, SetAdmins] = useState([]);
  //Récupération de l'identifiant de l'administrateur
  const id = localStorage.getItem('id');

  //Fonctions de gestions des zones de saisie
  const handleLibelleNewsletterChange = (e) => {
    setLibelleNewsletter(e.target.value);
  }

  const handleContenuNewsletterChange = (e) => {
    setContenuNewsletter(e.target.value);
  }

  //Fonction de gestion du toast
  const handleCloseToast = () => {
    setShowToast(false)
  }

  //Fonction d'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Attibution des valeurs aux variables locales
    const data = {
      libelleNewsletter : libelleNewsletter,
      contenuNewsletter : contenuNewsletter,
      //identifiant  de l'administrateur
      idAdmin : id
    };

    try {
      //Envoi des données à l'API
      const response = await fetch('http://127.0.0.1:5000/addnewsletter', {
      method : 'POST', 
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    })

    //Gestion du résultat de la requête
    if (response.ok) {
      const data = await response.json();
      //Ouverture du toast
      setShowToast(true)
      //Redirection vers une autre route
      navigate('/dashboard/newsletter')
    } else {
      //Gestion en cas d'erreur
      console.error('Une erreur s\'est produite: ')
    }
      
    } catch (error) {
      //Gestion en cas d'erreur
      console.error('Une erreur s\'est produite: ', error)
    } 
  } 
    return (
      //Code jsx pour le formulaire de création de newsletter
      <Card border='secondary'>
      <CardHeader>
      <h2>Créer une nouvelle newsletter</h2>
      </CardHeader>
      <Card.Body>
        <Row>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Titre de la newsletter</Form.Label>
                <Form.Control type="text" name='libelleNewsletter' onChange={handleLibelleNewsletterChange} value={libelleNewsletter} placeholder="Entrez le nom" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contenu de la newsletter</Form.Label>
                    <Form.Control as="textarea" name='contenuNewsletter' onChange={handleContenuNewsletterChange} value={contenuNewsletter} rows={2} />
                </Form.Group>
                </Row>
                <Button variant="danger" type="submit">Enregister</Button>
                <Button variant="secondary" type="reset">Annuler</Button>
        </Form>
        </Row>
        </Card.Body>
        {/**Mise en forme du toast de gestion des évènements */}
        <ToastContainer>
          <Toast show={showToast} onClose={handleCloseToast} delay={3000} autohide>
            <Toast.Header>
              <strong className='me-auto'>Succès!</strong>
            </Toast.Header>
            <Toast.Body>La newsletter a été créée avec succès!</Toast.Body>
          </Toast>
        </ToastContainer>
        </Card>
    )
}

export default Createnewsletter