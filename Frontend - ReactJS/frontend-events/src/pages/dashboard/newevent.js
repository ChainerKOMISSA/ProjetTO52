import React ,{Link} from 'react';
import { Container, Row, Col, Card, Nav, Navbar , Button, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faChartLine, faTachometerAlt,faCalendarDays, faEnvelope, faMusic} from '@fortawesome/free-solid-svg-icons';

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


function Newevent() {
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
        <h2>Enregister un nouvel évènement</h2>
          <Form>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom de l'évènement</Form.Label>
            <Form.Control type="text" name='nomEvenement' placeholder="Entrez le nom" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Select defaultValue="Choose..." name='idType'>
              <option>Sélectionnez un type...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Description de l'évènement</Form.Label>
            <Form.Control type="text" name='descriptionEvenement' placeholder="Entrez la description" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lieu</Form.Label>
            <Form.Control type="text" name='lieuEvenement' placeholder="Entrez le lieu" />
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date de début</Form.Label>
            <Form.Control type="date" name='dateDebut' placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Heure de début</Form.Label>
            <Form.Control type="time" name='heureDebut' placeholder="" />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date de fin</Form.Label>
            <Form.Control type="date" name='dateFin' placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Heure de fin</Form.Label>
            <Form.Control type="time" name='heureFin' placeholder="" />
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Programme</Form.Label>
            <Form.Control type="text" name='programme' placeholder="Entrez le programme..." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name='imageEvenement' placeholder="Ajoutez une image" />
          </Form.Group>
          </Row>

          <Button variant="danger" type="submit">Enregister</Button>
          <Button variant="secondady" type="reset">Annuler</Button>
          </Form>
        </Col>

      </Row>
  )
}

export default Newevent