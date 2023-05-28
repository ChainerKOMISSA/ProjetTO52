import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';



function Listefestival() {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/festival')
    .then(response => response.json())
    .then(data => {
      setFestivals(data.festivals)
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
        <h2>Liste des festivals</h2>
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
                {festivals.map(festival => (
                  <tr key={festival.idEvenement}>
                    <td>{festival.idEvenement}</td>
                    <td>{festival.nomEvenement}</td>
                    <td>{festival.descriptionEvenement}</td>
                    <td>{festival.dateDebut}</td>
                    <td>{festival.dateFin}</td>
                    <td>{festival.heureDebut}</td>
                    <td>{festival.heureFin}</td>
                    <td>{festival.lieuEvenement}</td>
                    <td>{festival.programme}</td>
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

export default Listefestival