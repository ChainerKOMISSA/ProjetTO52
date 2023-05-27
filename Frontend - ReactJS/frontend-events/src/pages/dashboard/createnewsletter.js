import React ,{Link} from 'react';
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
        <Row>
          <Col md={2} style={sidebarStyles}>
          <Navbar>
            <Nav className="flex-column">
            <Nav.Link href="" style={buttonStyles}>
              <FontAwesomeIcon icon={faTachometerAlt} style={sidebarIconStyles}/>
              Tableau de bord
              </Nav.Link>
              <Link to="#" style={buttonStyles}>
              <Button>
              <FontAwesomeIcon icon={faCalendarDays} style={sidebarIconStyles}/>
              Evènements
              </Button>
              </Link>
              <Nav.Link href="" style={buttonStyles}>
                <FontAwesomeIcon icon={faShoppingCart} style={sidebarIconStyles} />
                Publicités
              </Nav.Link>
              <Nav.Link href="" style={buttonStyles}>
              <FontAwesomeIcon icon={faEnvelope} style={sidebarIconStyles}/>
                Newsletters
              </Nav.Link>
            </Nav>
            </Navbar>
          </Col>
  
          <Col md={10} style={sidebarStyles}>
          <h2>Créer une nouvelle newsletter</h2>
            <Card border='danger'>
                <CardHeader>
                    <Card.Title>Veuillez renseigner les informations</Card.Title>
                </CardHeader>
                <Card.Body>
                <Form>
                    <Row>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Titre de la newsletter</Form.Label>
                    <Form.Control type="text" name='libelleNewsletter' placeholder="Entrez le nom" />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contenu de la newsletter</Form.Label>
                        <Form.Control as="textarea" name='contenuNewsletter' rows={5} />
                    </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Créateur de la newsletter</Form.Label>
                    <Form.Select aria-label="Default select example" name='idAdmin'>
                        <option>Choiwissez un administrateur</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    </Form.Group>
                    </Row>
                    <Button variant="danger" type="submit">Enregister</Button>
                    <Button variant="secondady" type="reset">Annuler</Button>
            </Form>
                </Card.Body>
            </Card>
          </Col>
  
        </Row>
    )
}

export default Createnewsletter