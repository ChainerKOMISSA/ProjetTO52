import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaTrash, FaEdit} from 'react-icons/fa';


const sidebarStyles = {
  backgroundColor: '#343a40',
  color: '#fff',
  height: '100vh',
};

const sidebarIconStyles = {
  marginRight: '8px',

};

const buttonStyles = {
  margin: '5px 0',
  backgroundColor: '#343a40',
  //color: '#dc3545',
  color: '#fff',
  border: 'none',
};



function Listeconcert() {
  const navigate = useNavigate();
  const [concerts, setConcerts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(null);
  

  useEffect(() => {
    fetch('http://127.0.0.1:5000/concert')
    .then(response => response.json())
    .then(data => {
      setConcerts(data.concerts)
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des concerts:', error);
    });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConcert(null);
  };

  const handleOpenModal = (concert) => {
    setSelectedConcert(concert);
    setShowModal(true);
  };

  const handleDelete = (idEvenement) => {
    fetch(`http://127.0.0.1:5000/deletevent/${idEvenement}`, {
      method : 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
    console.log(data.message);
    navigate('/listeconcert');
  })
    .catch(error => {
      console.error('Erreur lors de la suppression de l\'évènement:', error);
  })
  }

  

  const handleEdit = (idEvenement) => {
    const selectedConcert = concerts.find(concert => concert.idEvenement === idEvenement);
    const updatedData = {
      nomEvenement: selectedConcert.nomEvenement,
      descriptionEvenement: selectedConcert.descriptionEvenement,
      // Ajouter d'autres champs à mettre à jour
    };

    fetch(`http://127.0.0.1:5000/updatevent/${idEvenement}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      navigate('/listeconcert');
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour de l\'événement:', error);
    });
  };


  return (
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
          {
            selectedConcert && (
              <Modal show={showModal} onHide={handleCloseModal}>
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