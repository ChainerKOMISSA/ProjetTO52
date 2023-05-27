import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Nav, Navbar , Button, Table, Card} from 'react-bootstrap';
import { FaFolderOpen} from 'react-icons/fa';
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
        <Card border="secondary">
          <CardHeader>
            <Row>
              <Col md={8}>
              <h2>Newsletter</h2>
              </Col>
              <Col md={4}>
                <Link to="/dashboard/createnewsletter">
                  <Button variant='secondary'>Créer une nouvelle newsletter</Button>
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <Link to="">
                  <Button variant='danger'><FaFolderOpen/></Button>
              </Link>
            </td>
          </tr>
        </tbody>
            </Table>
          </Card.Body>
        </Card>
  )
}

export default Newsletter