import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Form, FormSelect} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faChartLine, faTachometerAlt,faCalendarDays, faEnvelope, faMusic} from '@fortawesome/free-solid-svg-icons';
import CardHeader from 'react-bootstrap/esm/CardHeader';

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


function Createnewsletter() {
    return (
      <Card border='secondary'>
      <CardHeader>
      <h2>Créer une nouvelle newsletter</h2>
      </CardHeader>
      <Card.Body>
        <Row>
            <Form>
                <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Titre de la newsletter</Form.Label>
                <Form.Control type="text" name='libelleNewsletter' placeholder="Entrez le nom" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contenu de la newsletter</Form.Label>
                    <Form.Control as="textarea" name='contenuNewsletter' rows={2} />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Créateur de la newsletter</Form.Label>
                <Form.Select aria-label="Default select example" name='idAdmin'>
                    <option>Choisissez un administrateur</option>
                    <option value="1">One</option>
                </Form.Select>
                </Form.Group>
                </Row>
                <Button variant="danger" type="submit">Enregister</Button>
                <Button variant="secondary" type="reset">Annuler</Button>
        </Form>
  
        </Row>
        </Card.Body>
        </Card>
    )
}

export default Createnewsletter