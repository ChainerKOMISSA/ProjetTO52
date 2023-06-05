import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';
import { faPersonMilitaryToPerson } from '@fortawesome/free-solid-svg-icons';


function Listeformation() {
    const [formations, setFormations] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/formation')
        .then(response => response.json())
        .then(data => {
            setFormations(data.formations)
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des formations:', error)
        })
    }, [])

  return (
    <Card border="secondary">
        <Card.Header>
            <Row>
                <Col md={8}>
                <h2>Liste des formations</h2>
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
                {formations.map(formation => (
                    <tr key={formation.idEvenement}>
                        <td>{formation.idEvenement}</td>
                        <td>{formation.nomEvenement}</td>
                        <td>{formation.descriptionEvenement}</td>
                        <td>{formation.dateDebut}</td>
                        <td>{formation.dateFin}</td>
                        <td>{formation.heureDebut}</td>
                        <td>{formation.heureFin}</td>
                        <td>{formation.lieuEvenement}</td>
                        <td>{formation.programme}</td>
                        <td>
                        <Link to="">
                            <Button variant='danger'><FaFolderOpen /></Button>
                        </Link>
                    </td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default Listeformation