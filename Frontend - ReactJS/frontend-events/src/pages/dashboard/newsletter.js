import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal, Toast, ToastContainer} from 'react-bootstrap';
import { FaFolderOpen, FaShareSquare, FaEdit, FaTrash} from 'react-icons/fa';
import CardHeader from 'react-bootstrap/esm/CardHeader';



function Newsletter() {
  //Déclaration des variables
  const navigate = useNavigate();
  const [newsletters, setNewsletters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [showToast, setShowToast] = useState(false);
  //Récupération de l'identifiant de l'administrateur
  const id = localStorage.getItem('id')



  //Fonction de récupération des newsletters
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/newsletter/${id}`)
    .then(response => response.json())
    .then(data => {
      //Gestion du résultat de la requête
      setNewsletters(data.newsletters)
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de la récupération des concerts:', error);
    });
  }, []);

//Fonctions de gestion de la boîte de dialogue
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedNewsletter(null)
    setShowToast(false)
  }

  const handleOpenModal = (newsletter) => {
    setSelectedNewsletter(newsletter)
    setShowModal(true)
  }

  //Fonction de gestion du toast
  const handleCloseToast = () => {
    setShowToast(false)
  }

  //Fonction d'envoi de mails
  const sendEmail = () => {
    //Déclaration des variables locales
    const libelleNewsletter = selectedNewsletter.libelleNewsletter;
    const contenuNewsletter = selectedNewsletter.contenuNewsletter;

    //Attribution des valeurs aux variables locales
    const data = {
      libelleNewsletter : libelleNewsletter,
      contenuNewsletter : contenuNewsletter
    };

    //Requête vers l'api pour l'envoi de mails
    fetch('http://localhost:5000/send_emails', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      //Gestion du résultat de la requête
      console.log(data.message)
      setShowToast(true)
      //Redirection vers une autre route
      navigate('/dashboard/newsletter')
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de l\'envoi des e-mails:', error)
    })
  }

  //Fonction de suppression d'un évènement
  const handleDelete = (idNewsletter) => {
    if(window.confirm('Êtes-vous sûr de vouloir supprimer cette newsletter ?')) {
      //Envoi de la requête de suppression
      fetch(`http://127.0.0.1:5000/deletenewsletter/${idNewsletter}`, {
        method:'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        //Gestion du résultat de la requête
      console.log(data.message);
      //Redirection vers une autre route
      navigate('/dashboard/newsletter');
      })
      .catch(error => {
        //Gestion en cas d'erreur
        console.error('Erreur lors de la suppression de la newsletter:', error);
      })
    }
  }


  return (
    //Code jsx pour le formulaire de création de la newsletter
        <Card border="secondary">
          <CardHeader>
            <Row>
              <Col md={8}>
              <h2>Newsletter</h2>
              </Col>
              <Col md={4}>
                <Link to="/dashboard/createnewsletter">
                  <Button variant='secondary'>Créer une nouvelle newsletter</Button>
                </Link>
              </Col>
            </Row>
          </CardHeader>
          <Card.Body>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>N°</th>
            <th>Titre de la newsletter</th>
            <th>Contenu de la newsletter</th>
          </tr>
        </thead>
        <tbody>
          {/**Récupération des données reçues par l'API */}
          {newsletters.map(newsletter => (
            <tr key={newsletter.idNewsletter}>
                <td>{newsletter.idNewsletter}</td>
                <td>{newsletter.libelleNewsletter}</td>
                <td>{newsletter.contenuNewsletter}</td>
                <td>
                  <Button variant='danger' onClick={() => handleOpenModal(newsletter)}><FaFolderOpen /></Button>
                </td>
            </tr>
          ))}
        </tbody>
            </Table>
          </Card.Body>
          {/**Mise en forme de la boîte de dialogue */}
            {
              selectedNewsletter && (
                <Modal show={showModal} onHide={handleCloseModal} size='lg'>
                  <Modal.Header closeButton>
                      <Modal.Title>Details de la newsletter</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedNewsletter.libelleNewsletter}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedNewsletter.contenuNewsletter}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='danger' onClick={sendEmail}><FaShareSquare/>&nbsp;Partager</Button>&nbsp;&nbsp;
                    <Button variant='outline-danger'><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary' onClick={() => handleDelete(selectedNewsletter.idNewsletter)}><FaTrash/>&nbsp;Supprimer</Button>
                    </Card.Footer>
                  </Card>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={handleCloseModal}>Fermer</Button>
                  </Modal.Footer>
                </Modal>
              )}
              {/**Mise en forme du toast de gestion des évènements */}
              <ToastContainer>
                <Toast show={showToast} onClose={handleCloseToast} delay={3000} autohide border="outline-success">
                  <Toast.Header>
                    <strong className='me-auto'>Succès!</strong>
                  </Toast.Header>
                  <Toast.Body>La newsletter a été partagée avec succès!</Toast.Body>
                </Toast>
              </ToastContainer>
        </Card>
  )
}

export default Newsletter