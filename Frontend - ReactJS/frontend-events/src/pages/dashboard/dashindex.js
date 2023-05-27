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
          <Row>
            <Row><h2>Tableau de bord</h2></Row>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Card bg='danger' style={cardStyles}>
                  <FaMusic style={iconStyles}/>
                  </Card>
                  <Card.Title>Concerts</Card.Title>
                  <Card.Text>100</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                <Card bg='danger' style={cardStyles}>
                  <FaDrum style={iconStyles}/>
                  </Card>
                  <Card.Title>Festivals</Card.Title>
                  <Card.Text>50</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                <Card bg='danger' style={cardStyles}>
                  <FaGuitar style={iconStyles}/>
                  </Card>
                  <Card.Title>Spectacles</Card.Title>
                  <Card.Text>5000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                <Card bg='danger' style={cardStyles}>
                  <FaUserAlt style={iconStyles}/>
                  </Card>
                  <Card.Title>Utilisateurs</Card.Title>
                  <Card.Text>5000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
  )
}

export default Dashindex