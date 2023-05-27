import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Button, Table, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFolderOpen, faTachometerAlt,faCalendarDays, faEnvelope, faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

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

function Listefestival() {
  return (
    <Card border="secondary">
    <Card.Header>
      <Row>
        <Col md={6}>
        <h2>Liste des festivals</h2>
        </Col>
        <Col md={6}>
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
            <th>Nom du concert</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Heure de début</th>
            <th>Heure de fin</th>
            <th>Lieu</th>
            <th>Programme</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>
              <Link to="">
                  <Button variant='danger'><FontAwesomeIcon icon={faFolderOpen} /></Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
  )
}

export default Listefestival