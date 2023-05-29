import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';


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
  const [concerts, setConcerts] = useState([]);
  const [showModal, setShowModal] = useState([]);
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

  /*const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = (concert) => {
    setSelectedConcert(concert);
    setShowModal(true);
  };*/

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
                    <td><Button variant='danger'><FaFolderOpen /></Button></td>
                  </tr>
                ))}
                <tr>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
          {/*{
            selectedConcert && (
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Que voulez-vous faire?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                      <Row>
                        <Col md={4}>
                        <Button variant='danger'><FaFolderOpen />Afficher</Button>
                        </Col>
                        <Col md={4}>
                        <Button variant='secondary'><FaFolderOpen />Modifier</Button>
                        </Col>
                        <Col md={4}>
                        <Button variant='secondary'><FaFolderOpen />Supprimer</Button>
                        </Col>
                      </Row>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='secondary' onClick={handleCloseModal}><FaFolderOpen />Fermer</Button>
                </Modal.Footer>
              </Modal>
            )}*/}
        </Card>

  )
}

export default Listeconcert