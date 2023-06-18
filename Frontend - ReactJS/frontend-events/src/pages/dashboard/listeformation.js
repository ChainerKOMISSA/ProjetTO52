import React , {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaTrash, FaEdit} from 'react-icons/fa';


function Listeformation() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [formations, setFormations] = useState([]);
    const [selectedFormation, setSelectedFormation] = useState(null);
    const id = localStorage.getItem('id')



    useEffect(() => {
        fetch(`http://127.0.0.1:5000/formation/${id}`)
        .then(response => response.json())
        .then(data => {
            setFormations(data.formations)
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des formations:', error)
        })
    }, [])

    const handleCloseModal = () => {
        setShowModal(false)
        setSelectedFormation(null)
    }

    const handleOpenModal = (formation) => {
        setSelectedFormation(formation);
        setShowModal(true);
    }

    const handleDelete = (idEvenement) => {
        if(window.confirm('Êtes-vous sûr de vouloir supprimer cet évènement ?')) {
            fetch(`http://127.0.0.1:5000/deletevent/${idEvenement}`, {
            method : 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
            console.log(data.message);
            navigate('/dashboard/listeconcert');
            })
            .catch(error => {
              console.error('Erreur lors de la suppression de l\'évènement:', error);
            })
        }
    }

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
                        <td><Button variant='danger' onClick={() => handleOpenModal(formation)}><FaFolderOpen /></Button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
      </Card.Body>
      {
        selectedFormation && (
            <Modal show={showModal} onHide={handleCloseModal} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Détails de l'évènement</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedFormation.nomEvenement}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedFormation.descriptionEvenement}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='outline-danger' ><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary' onClick={() => handleDelete(selectedFormation.idEvenement)}><FaTrash/>&nbsp;Supprimer</Button>
                    </Card.Footer>
                  </Card>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='secondary' onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
            </Modal>
        )
      }
    </Card>
  )
}

export default Listeformation