import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Nav, Navbar , Button, Table, Card} from 'react-bootstrap';
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
                    <td>
                    <Link to="">
                        <Button variant='danger'><FaFolderOpen /></Button>
                    </Link>
                  </td>
                  </tr>
                ))}
                <tr>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

  )
}

export default Listeconcert