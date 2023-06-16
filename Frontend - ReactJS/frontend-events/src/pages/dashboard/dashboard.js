import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Image} from 'react-bootstrap';
import { FaEnvelope, FaCube, FaMusic, FaDrum, FaTachometerAlt, FaBookOpen, FaGuitar} from 'react-icons/fa';



const sidebarStyles = {
  backgroundColor: '#343a40',
  color: '#fff',
  height: '150vh',
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
  const username = localStorage.getItem('username')
  //const id = localStorage.getItem('id')
  
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
            <h4>Bienvenue {username} </h4>
            </Button>
            </Nav.Link>
            <Nav.Link href="">
              <Link to="/">
                <Button style={buttonStyles}>
                <FaTachometerAlt style={sidebarIconStyles}/>
                Acceuil
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/dashindex">
                <Button style={buttonStyles}>
                <FaTachometerAlt style={sidebarIconStyles}/>
                Tableau de bord
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/listeconcert">
                <Button style={buttonStyles}>
                <FaMusic style={sidebarIconStyles}/>
                Concerts
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/listefestival">
                <Button style={buttonStyles}>
                <FaDrum style={sidebarIconStyles}/>
                Festivals
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/listeformation">
                <Button style={buttonStyles}>
                <FaBookOpen style={sidebarIconStyles}/>
                Formations
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/listespectacle">
                <Button style={buttonStyles}>
                <FaGuitar style={sidebarIconStyles}/>
                Spectacles
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/listepub">
                <Button style={buttonStyles}>
                <FaCube style={sidebarIconStyles}/>
                Publicités
                </Button>
              </Link>
            </Nav.Link><br></br>
            <Nav.Link href="">
              <Link to="/dashboard/newsletter">
                <Button style={buttonStyles}>
                <FaEnvelope style={sidebarIconStyles}/>
                Newsletter
                </Button>
              </Link>
            </Nav.Link><br></br>
          </Nav>
          </Navbar>
        </Col>
          <Col md={10}>
            <br></br>
          <Outlet/>
        </Col>
      </Row>
    </Container>
    
    </>

  );
}

export default Dashboard;
