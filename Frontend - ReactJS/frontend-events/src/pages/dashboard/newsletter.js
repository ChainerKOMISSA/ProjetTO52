import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card, Modal} from 'react-bootstrap';
import { FaFolderOpen, FaShareSquare, FaEdit, FaTrash} from 'react-icons/fa';
import CardHeader from 'react-bootstrap/esm/CardHeader';



function Newsletter() {
  const [newsletters, setNewsletters] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  


  useEffect(() => {
    fetch('http://127.0.0.1:5000/newsletter')
    .then(response => response.json())
    .then(data => {
      setNewsletters(data.newsletters)
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des concerts:', error);
    });
  }, []);


  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedNewsletter(null)
  }


  const handleOpenModal = (newsletter) => {
    setSelectedNewsletter(newsletter)
    setShowModal(true)
  }

  

  

  return (
        <Card border="secondary">
          <CardHeader>
            <Row>
              <Col md={8}>
              <h2>Newsletter</h2>
              </Col>
              <Col md={4}>
                <Link to="/dashboard/createnewsletter">
                  <Button variant='secondary'>Créer une nouvelle newsletter</Button>
                </Link>
              </Col>
            </Row>
          </CardHeader>
          <Card.Body>
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>N°</th>
            <th>Titre de la newsletter</th>
            <th>Contenu de la newsletter</th>
            <th>Créateur</th>
          </tr>
        </thead>
        <tbody>
          {newsletters.map(newsletter => (
            <tr key={newsletter.idNewsletter}>
                <td>{newsletter.idNewsletter}</td>
                <td>{newsletter.libelleNewsletter}</td>
                <td>{newsletter.contenuNewsletter}</td>
                <td>{newsletter.idAdmin}</td>
                <td>
                  <Link to="">
                          <Button variant='danger' onClick={() => handleOpenModal(newsletter)}><FaFolderOpen /></Button>
                  </Link>
                </td>
            </tr>
          ))}
        </tbody>
            </Table>
          </Card.Body>
            {
              selectedNewsletter && (
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Details de la newsletter</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Card border='danger'>
                    <Card.Header>
                      <h3>{selectedNewsletter.libelleNewsletter}</h3>
                    </Card.Header>
                    <Card.Body>
                      <p>{selectedNewsletter.contenuNewsletter}</p>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant='danger'><FaShareSquare/>&nbsp;Partager</Button>&nbsp;&nbsp;
                    <Button variant='outline-danger'><FaEdit/>&nbsp;Modifier</Button>&nbsp;&nbsp;
                    <Button variant='outline-secondary'><FaTrash/>&nbsp;Supprimer</Button>
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

export default Newsletter