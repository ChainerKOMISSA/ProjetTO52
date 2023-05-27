import React ,{Link} from 'react';
import {Row, Col, Nav, Navbar , Button, Table, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFolderOpen, faTachometerAlt,faCalendarDays, faEnvelope, faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
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


function Newsletter() {
  return (
      <Row>
        <Col md={2} style={sidebarStyles}>
        <Navbar>
          <Nav className="flex-column">
          <Nav.Link href="" style={buttonStyles}>
            <FontAwesomeIcon icon={faTachometerAlt} style={sidebarIconStyles}/>
            Tableau de bord
            </Nav.Link>
            <Link to="" style={buttonStyles}>
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
        <h2>Newsletters</h2>
        <Card border="danger">
          <CardHeader>
            <Row>
              <Col md={4}>
              <Card.Title>Newsletter</Card.Title>
              </Col>
              <Col md={8}>
                <Link to="/dashboard/newevent">
                  <Button backgroundColor='#dc3545'>Créer une nouvelle newsletter</Button>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>1</td>
            <td>
              <Link to="">
                  <Button backgroundColor='#dc3545'><FontAwesomeIcon icon={faFolderOpen} /></Button>
              </Link>
              <Link>
                  <Button backgroundColor='#dc3545'><FontAwesomeIcon icon={faPenToSquare} /></Button>
              </Link>
              <Link>
                  <Button backgroundColor='#dc3545'><FontAwesomeIcon icon={faTrash} /></Button>
              </Link>
            </td>
          </tr>
        </tbody>
            </Table>
          </Card.Body>
        </Card>
        </Col>

      </Row>
  )
}

export default Newsletter