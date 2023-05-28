import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';
import CardHeader from 'react-bootstrap/esm/CardHeader';



function Newsletter() {
  const [newsletters, setNewsletters] = useState([]);

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

export default Newsletter