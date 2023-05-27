import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faChartLine, faTachometerAlt,faCalendarDays, faEnvelope, faMusic, faGuitar, faBookOpen, faLightbulb, faDrum} from '@fortawesome/free-solid-svg-icons';


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
  size : "lg",
  color : '#fff'
}

const logoStyles = {
  width : '35px'
}

function Dashboard() {
  
  return (
    <>
    <Container fluid>
      <Row>
        <Col md={2} style={sidebarStyles}>
          <Navbar>
          <Nav className="flex-column">
          <Nav.Link href="">
            <Button style={buttonStyles}>
            <Image src='' style={logoStyles}/>
            Events.com
            </Button>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/dashboard">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faTachometerAlt} style={sidebarIconStyles}/>
                Tableau de bord
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/dashboard/listeconcert">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faMusic} style={sidebarIconStyles}/>
                Concerts
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/dashboard/listefestival">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faDrum} style={sidebarIconStyles}/>
                Festivals
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faBookOpen} style={sidebarIconStyles}/>
                Formations
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faGuitar} style={sidebarIconStyles}/>
                Spectacles
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faLightbulb} style={sidebarIconStyles}/>
                Publicités
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/dashboard/newsletter">
                <Button style={buttonStyles}>
                <FontAwesomeIcon icon={faEnvelope} style={sidebarIconStyles}/>
                Newsletter
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
          </Navbar>
        </Col>
          <Col md={10}>
          <h2>Tableau de bord</h2>
          <Row>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Card bg='danger' style={cardStyles}>
                  <FontAwesomeIcon icon={faMusic} style={iconStyles}/>
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
                  <FontAwesomeIcon icon={faShoppingCart} style={iconStyles}/>
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
                  <FontAwesomeIcon icon={faChartLine} style={iconStyles}/>
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
                  <FontAwesomeIcon icon={faUsers} style={iconStyles}/>
                  </Card>
                  <Card.Title>Utilisateurs</Card.Title>
                  <Card.Text>5000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row><br></br>
          <Outlet/>
        </Col>
      </Row>
    </Container>
    
    </>

  );
}

export default Dashboard;
