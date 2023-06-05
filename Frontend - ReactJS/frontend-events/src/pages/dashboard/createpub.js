import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Nav, Navbar , Button, Form, FormSelect, Toast, ToastContainer} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Createpub() {
    const navigate = useNavigate()
    const [libellePub, setLibellePub] = useState('')
    const [idAdmin, setIdAdmin] = useState('')
    const [showToast, setShowToast] = useState(false);
    const [admins, SetAdmins] = useState([]);

    const handleLibellePubChange = (e) => {
        setLibellePub(e.target.value)
    }

    const handleIdAdminChange = (e) => {
        setIdAdmin(e.target.value)
    }

    const handleCloseToast = () => {
        setShowToast(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            libellePub : libellePub,
            idAdmin : idAdmin
        }

        try {
            const response = await fetch('http://127.0.0.1:5000/createpub', {
                method : 'POST', 
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(data),
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


    useEffect(() => {
        fetch('http://127.0.0.1:5000/admin')
        .then(response => response.json())
        .then(data => {
          SetAdmins(data.admins)
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des admins:', error);
        });
    }, []);
    


  return (
    <Card border='secondary'>
        <CardHeader>
        <h2>Créer une nouvelle publicité</h2>
        </CardHeader>
        <Card.Body>
            <Row>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-6">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Titre de la publicité</Form.Label>
                <Form.Control type="text" name='libellePub' onChange={handleLibellePubChange} value={libellePub} placeholder="Entrez le libellé" />
                </Form.Group>
                </Row>
                <Row className="mb-6">
                <Form.Group controlId="formGridEmail">
                <Form.Label>Créateur de la publicité</Form.Label>
                <Form.Select aria-label="Default select example" name='idAdmin' onChange={handleIdAdminChange} value={idAdmin}>
                    <option>Choisissez un administrateur</option>
                {admins.map(admin => (
                    <option value={admin.idAdmin}>{admin.nomAdmin}</option>
                ))}
                  </Form.Select>
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