import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal, Toast, ToastContainer} from 'react-bootstrap';
import { FaFolderOpen, FaShareSquare, FaEdit, FaTrash} from 'react-icons/fa';
import CardHeader from 'react-bootstrap/esm/CardHeader';


function Listepub() {
  //Déclaration des variables
    const navigate = useNavigate();
    const [publicites, setPublicites] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectecPub, setSelectedPub] = useState(null)
    const [showToast, setShowToast] = useState(false)
    //Récupération de l'identifiant de l'administrateur
    const id = localStorage.getItem('id')


    //Fonction de récupération des publicités
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/publicite/${id}`)
        .then(response => response.json())
        .then(data => {
          //Gestion du résultat de la requête
            setPublicites(data.publicites)
        })
        .catch(error => {
          //Gestion en cas d'erreur
            console.error('Erreur lors de la récupération des publicités:', error)
        })
    }, [])


    //Fonctions de gestion de la boîte de dialogue
    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedPub(null)
        setShowToast(false)
    }

    const handleOpenModal = (publicite) => {
        setSelectedPub(publicite)
        setShowModal(true)
    }
    
    //Fonction de gestion du toast
    const handleCloseToast = () => {
        setShowToast(false)
    }
    
    
      //Fonction de suppression d'un évènement
      const handleDelete = (idPub) => {
        if(window.confirm('Êtes-vous sûr de vouloir supprimer cette publicité ?')){
          //Envoi de la requête de suppression
          fetch(`http://127.0.0.1:5000/deletepub/${idPub}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(data => {
          console.log(data.message);
          //Redirection vers une autre route
          navigate('/dashboard/listepub');
          })
          .catch(error => {
            //Gestion en cas d'erreur
            console.error('Erreur lors de la suppression de la publicité:', error);
          })
        }
      }

  return (
    //Code jsx pour le formulaire de création de publicité
    <Card border="secondary">
        <CardHeader>
            <Row>
              <Col md={8}>
              <h2>Publicités</h2>
              </Col>
              <Col md={4}>
                <Link to="/dashboard/createpub">
                  <Button variant='secondary'>Créer une nouvelle publicité</Button>
                </Link>
              </Col>
            </Row>
        </CardHeader>
        <Card.Body>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Libellé de la publicité</th>
                </tr>
            </thead>
            <tbody>
              {/**Récupération des données reçues par l'API */}
                {publicites.map(publicite => (
                    <tr key={publicite.idPub}>
                        <td>{publicite.idPub}</td>
                        <td>{publicite.libellePub}</td>
                        <td><Button variant='danger' onClick={() => handleOpenModal(publicite)}><FaFolderOpen /></Button></td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </Card.Body>
        {/**Mise en forme de la boîte de dialogue */}
            {selectecPub && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Détails de la publicité</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Card border='danger'>
                        <Card.Body>
                        <p>{selectecPub.libellePub}</p>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant='outline-danger'><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                        <Button variant='outline-secondary' onClick={() => handleDelete(selectecPub.idPub)}><FaTrash/>&nbsp;Supprimer</Button>
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
                  <Toast.Body>La publicité a été créée avec succès!</Toast.Body>
                </Toast>
              </ToastContainer>
    </Card>
  )
}

export default Listepub