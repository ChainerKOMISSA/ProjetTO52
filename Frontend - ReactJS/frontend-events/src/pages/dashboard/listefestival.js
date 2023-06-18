import React , {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaTrash, FaEdit} from 'react-icons/fa';



function Listefestival() {
  const navigate = useNavigate();
  const [festivals, setFestivals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const id = localStorage.getItem('id')




  useEffect(() => {
    fetch(`http://127.0.0.1:5000/festival/${id}`)
    .then(response => response.json())
    .then(data => {
      setFestivals(data.festivals)
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des festivals:', error);
    });
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFestival(null);
  }

  const handleOpenModal = (festival) => {
    setSelectedFestival(festival);
    setShowModal(true);
  }

  const handleDelete = (idEvenement) => {
    if(window.confirm('Êtes-vous sûr de vouloir supprimer cet évènement ?')){
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
                        <Button variant='danger' onClick={() => handleOpenModal(festival)}><FaFolderOpen /></Button>
                    </Link>
                  </td>
                  </tr>
                ))}
          </tbody>
      </Table>
    </Card.Body>
    {
      selectedFestival && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
          < Modal.Title>Détails de l'évènement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedFestival.nomEvenement}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedFestival.descriptionEvenement}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='outline-danger'><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary' onClick={() => handleDelete(selectedFestival.idEvenement)}><FaTrash/>&nbsp;Supprimer</Button>
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

export default Listefestival