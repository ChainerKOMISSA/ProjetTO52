import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaTrash, FaEdit} from 'react-icons/fa';


function Listeconcert() {
  //Déclaration des variables
  const navigate = useNavigate();
  const [concerts, setConcerts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);
  //Récupération de l'identifiant de l'administrateur
  const id = localStorage.getItem('id')
  

  //Récupération des concerts
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/concert/${id}`)
    .then(response => response.json())
    .then(data => {
      //Récupération des concerts
      setConcerts(data.concerts)
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de la récupération des concerts:', error);
    });
  }, []);

  //Fonctions de gestion de la boîte de dialogue
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConcert(null);
  };

  const handleOpenModal = (concert) => {
    setSelectedConcert(concert);
    setShowModal(true);
  };

  //Fonction de suppression d'un évènement
  const handleDelete = (idEvenement) => {
    if(window.confirm('Êtes-vous sûr de vouloir supprimer cet évènement ?')) {
      //Envoi de la requête de suppression
      fetch(`http://127.0.0.1:5000/deletevent/${idEvenement}`, {
      method : 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        //Gestion du résultat de la requête
      console.log(data.message);
      //Redirection vers une autre route
      navigate('/dashboard/listeconcert');
      })
      .catch(error => {
        //Gestion en cas d'erreur
        console.error('Erreur lors de la suppression de l\'évènement:', error);
      })
    }
  }

  //Fonction de modification
  const handleEdit = (idEvenement) => {
    const selectedConcert = concerts.find(concert => concert.idEvenement === idEvenement);
    const updatedData = new FormData();
      //Attribution des valeurs aux variables locales
      updatedData.append('nomEvenement', selectedConcert.nomEvenement);
      updatedData.append('descriptionEvenement', selectedConcert.descriptionEvenement);
      updatedData.append('idType', selectedConcert.idType);
      updatedData.append('dateDebut', selectedConcert.dateDebut);
      updatedData.append('dateFin', selectedConcert.dateFin);
      updatedData.append('heureDebut', selectedConcert.heureDebut);
      updatedData.append('heureFin', selectedConcert.heureFin);
      updatedData.append('lieuEvenement', selectedConcert.lieuEvenement);
      updatedData.append('programme', selectedConcert.programme);
      updatedData.append('imageEvenement', selectedConcert.imageEvenement);
    

      //Envoi de la requête de modification à l'API
    fetch(`http://127.0.0.1:5000/updatevent/${idEvenement}`, {
    method: 'PUT',
    body: updatedData,
    headers: {
      'Content-Type': 'multipart/form-data' 
    },
  })
    .then(response => response.json())
    .then(data => {
      //Gestion du résultat de la requête
      console.log(data);
      //Redirection vers une autre route
      navigate('/dashboard/listeconcert');
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de la mise à jour de l\'événement:', error);
    });
  };


  return (
    //Code jsx pour l'affichage des newsletters
        <Card border="secondary">
          <Card.Header>
            <Row>
              <Col md={8}>
              <h2>Liste des concerts</h2>
              </Col>
              <Col md={4}>
              <Link to="/dashboard/newevent">
                  <Button variant='secondary'>Ajouter un nouvel évènement</Button>
                </Link>
              </Col>
            </Row>
            </Card.Header>
          <Card.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Nom</th>
                  <th>Description</th>
                  <th>Date(début)</th>
                  <th>Date(fin)</th>
                  <th>Heure(début)</th>
                  <th>Heure(fin)</th>
                  <th>Lieu</th>
                  <th>Programme</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/**Récupération des données reçues par l'API */}
                {concerts.map(concert => (
                  <tr key={concert.idEvenement}>
                    <td>{concert.idEvenement}</td>
                    <td>{concert.nomEvenement}</td>
                    <td>{concert.descriptionEvenement}</td>
                    <td>{concert.dateDebut}</td>
                    <td>{concert.dateFin}</td>
                    <td>{concert.heureDebut}</td>
                    <td>{concert.heureFin}</td>
                    <td>{concert.lieuEvenement}</td>
                    <td>{concert.programme}</td>
                    <td><Button variant='danger' onClick={() => handleOpenModal(concert)}><FaFolderOpen /></Button></td>
                  </tr>
                ))}
                <tr>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
          {/**Mise en forme de la boîte de dialogue */}
          {
            selectedConcert && (
              <Modal show={showModal} onHide={handleCloseModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de l'évènement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedConcert.nomEvenement}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedConcert.descriptionEvenement}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='outline-danger' onClick={() => handleEdit(selectedConcert.idEvenement)}><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary' onClick={() => handleDelete(selectedConcert.idEvenement)}><FaTrash/>&nbsp;Supprimer</Button>
                    </Card.Footer>
                  </Card>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='secondary' onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
              </Modal>
              )}
        </Card>
  )
}



export default Listeconcert