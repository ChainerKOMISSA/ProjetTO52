import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Form, FormSelect, Toast, ToastContainer} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Createpub() {
    const navigate = useNavigate()
    const [libellePub, setLibellePub] = useState('');
    const [idAdmin, setIdAdmin] = useState('');
    const [imagePub, setImagePub] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const id = localStorage.getItem('id');

    const handleLibellePubChange = (e) => {
        setLibellePub(e.target.value)
    }

    const handleImagePubChange = (e) => {
      const file = e.target.files[0];
      setImagePub(file);
    }

    const handleCloseToast = () => {
        setShowToast(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append("libellePub", libellePub);
        formData.append("imagePub", imagePub);
        formData.append("idAdmin", id);

        try {
            const response = await fetch('http://127.0.0.1:5000/createpub', {
                method : 'POST', 
                body : formData,
            })

            if (response.ok) {
                const data = await response.json();
                setShowToast(true)
                navigate('/dashboard/listepub')
              } else {
                console.error('Une erreur s\'est produite: ')
              }
                
              } catch (error) {
                console.error('Une erreur s\'est produite: ', error)
              } 
    }
    


  return (
    <Card border='secondary'>
        <CardHeader>
        <h2>Créer une nouvelle publicité</h2>
        </CardHeader>
        <Card.Body>
            <Row>
            <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                <Row className="mb-6">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Titre de la publicité</Form.Label>
                <Form.Control type="text" name='libellePub' onChange={handleLibellePubChange} value={libellePub} placeholder="Entrez le libellé" />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Image de la publicité</Form.Label>
                  <Form.Control type="file" onChange={handleImagePubChange} placeholder="Ajoutez une image" accept='image/*' />
                </Form.Group>
                </Row><br></br>
                <Button variant="danger" type="submit">Enregister</Button>&nbsp;&nbsp;
                <Button variant="secondary" type="reset">Annuler</Button>
            </Form>
            </Row>
        </Card.Body>
    </Card>
  )
}

export default Createpub