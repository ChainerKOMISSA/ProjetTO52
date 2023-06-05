import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';

function Listespectacle() {
    const [spectacles, setSpectacles] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/spectacle')
        .then(response => response.json())
        .then(data => {
            setSpectacles(data.spectacles)
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des spectacles:', error)
        })
    }, [])

  return (
    <Card border='secondary'>
        <Card.Header>
            <Row>
                <Col md={8}>
                <h2>Liste des spectacles</h2>
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
                    {spectacles.map(spectacle => (
                        <tr key={spectacle.idEvenement}>
                            <td>{spectacle.idEvenement}</td>
                            <td>{spectacle.nomEvenement}</td>
                            <td>{spectacle.descriptionEvenement}</td>
                            <td>{spectacle.dateDebut}</td>
                            <td>{spectacle.dateFin}</td>
                            <td>{spectacle.heureDebut}</td>
                            <td>{spectacle.heureFin}</td>
                            <td>{spectacle.lieuEvenement}</td>
                            <td>{spectacle.programme}</td>
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

export default Listespectacle