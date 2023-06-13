import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Image} from 'react-bootstrap';
import { FaMusic, FaDrum, FaGuitar, FaUserAlt} from 'react-icons/fa';

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

const cardStyles = {
  width: '3rem',
  height : '3rem'
}

const iconStyles = {
  marginTop : '16px',
  marginLeft : '16px',
  size : "lg",
  color : '#fff'
}

const logoStyles = {
  width : '35px'
}

function Dashindex() {
  return (
    <div>
          <Row>
            <Row><h2>Tableau de bord</h2></Row>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link>
                    <Card bg='danger' style={cardStyles}>
                    <FaMusic style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Mes évènements</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="/dashboard/newsletter">
                    <Card bg='danger' style={cardStyles}>
                    <FaDrum style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Mes newsletters</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="/dashboard/listepub">
                    <Card bg='danger' style={cardStyles}>
                    <FaGuitar style={iconStyles}/>
                    </Card><br></br>
                  </Link >
                  <Card.Title>Mes publicités</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="">
                    <Card bg='danger' style={cardStyles}>
                    <FaUserAlt style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Gérer mon compte</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row><br></br><br></br>

          <Row>
          <Row><h2>Mes statistiques</h2></Row>
            <Card border='secondary'>
              <Card.Body>

              </Card.Body>
              <Card.Footer>
                
              </Card.Footer>
            </Card>
          </Row>
    </div>
  )
}

export default Dashindex