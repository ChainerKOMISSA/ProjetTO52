import React from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Elogo from '../images/ELogo.png';

const logoStyles = {
  width : '35px'
}

function Header(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand className="text-danger" href="#home"><Image src={Elogo} style={logoStyles}/>Events.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Acceuil</Nav.Link>
              <NavDropdown title="Evènements" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Concerts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Festivals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Formations</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Spectacles pour enfants</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Autres</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="">Mon compte</Nav.Link>
            </Nav>
            <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Rechercher"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-danger">Rechercher</Button>
            </Form>
            <Link to={'/login'} className='m-2'><Button variant="danger">Se connecter</Button></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;