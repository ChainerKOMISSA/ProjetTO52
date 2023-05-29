import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Form, FormSelect} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faShoppingCart, faChartLine, faTachometerAlt,faCalendarDays, faEnvelope, faMusic} from '@fortawesome/free-solid-svg-icons';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { toast } from 'react-toastify';

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
  const navigate = useNavigate()
  const [libelleNewsletter, setLibelleNewsletter] = useState('');
  const [contenuNewsletter, setContenuNewsletter] = useState('');
  const [idAdmin, setIdAdmin] = useState('');

  const handleLibelleNewsletterChange = (e) => {
    setLibelleNewsletter(e.target.value);
  }

  const handleContenuNewsletterChange = (e) => {
    setContenuNewsletter(e.target.value);
  }

  const handleIdAdminChange = (e) => {
    setIdAdmin(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      libelleNewsletter : libelleNewsletter,
      contenuNewsletter : contenuNewsletter,
      idAdmin : idAdmin
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/addnewsletter', {
      method : 'POST', 
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(data),
    })

    if (response.ok) {
      const data = await response.json();
      toast.success('Evènement ajouté avec succès')
      navigate('/dashboard/newsletter')
    } else {
      toast.error('Une erreur s\'est produite.')
    }
      
    } catch (error) {
      
    }
    

  }
    return (
      <Card border='secondary'>
      <CardHeader>
      <h2>Créer une nouvelle newsletter</h2>
      </CardHeader>
      <Card.Body>
        <Row>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Titre de la newsletter</Form.Label>
                <Form.Control type="text" name='libelleNewsletter' onChange={handleLibelleNewsletterChange} value={libelleNewsletter} placeholder="Entrez le nom" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Contenu de la newsletter</Form.Label>
                    <Form.Control as="textarea" name='contenuNewsletter' onChange={handleContenuNewsletterChange} value={contenuNewsletter} rows={2} />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Créateur de la newsletter</Form.Label>
                <Form.Select aria-label="Default select example" name='idAdmin' onChange={handleIdAdminChange} value={idAdmin}>
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