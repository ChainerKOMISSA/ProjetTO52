import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaTrash, FaEdit} from 'react-icons/fa';

function Listespectacle() {
    //Déclaration des variables
    const navigate = useNavigate();
    const [spectacles, setSpectacles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSpectacle, setSelectedSpectacle] = useState(null);
    //Récupération de l'identifiant de l'administrateur
    const id = localStorage.getItem('id')


    //Fonction de récupérartion des spectacles
    useEffect(() => {
        fetch(`http://127.0.0.1:5000/spectacle/${id}`)
        .then(response => response.json())
        .then(data => {
            //Gestion du résultat de la requête
            setSpectacles(data.spectacles)
        })
        .catch(error => {
            //Gestion en cas d'erreur
            console.error('Erreur lors de la récupération des spectacles:', error)
        })
    }, [])

    //Fonctions de gestion de la boîte de dialogue
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedSpectacle(null)
    }

    const handleOpenModal = (spectacle) => {
        setShowModal(true);
        setSelectedSpectacle(spectacle)
    }

    //Fonction de suppression d'un évènement
    const handleDelete = (idEvenement) => {
    if(window.confirm('Êtes-vous sûr de vouloir supprimer cet évènement ?')) {
        //Envoi de la requête de suppression
      fetch(`http://127.0.0.1:5000/deletevent/${idEvenement}`, {
      method : 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
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

  return (
    //Code jsx pour l'affichage de la liste des spectacles
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
                    {/**Récupération des données reçues par l'API */}
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
                                    <Button variant='danger' onClick={() => handleOpenModal(spectacle)}><FaFolderOpen /></Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card.Body>
        {/**Mise en forme de la boîte de dialogue */}
        {
            selectedSpectacle && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Détails de l'évènement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedSpectacle.nomEvenement}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedSpectacle.descriptionEvenement}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='outline-danger'><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary' onClick={() => handleDelete(selectedSpectacle.idEvenement)}><FaTrash/>&nbsp;Supprimer</Button>
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

export default Listespectacle