import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Form} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';

function Createpub() {
    //Déclaration des variables
    const navigate = useNavigate()
    const [libellePub, setLibellePub] = useState('');
    const [imagePub, setImagePub] = useState(null);
    const [showToast, setShowToast] = useState(false);
    //identifiant  de l'administrateur
    const id = localStorage.getItem('id');

    //Fonctions de gestions des zones de saisie
    const handleLibellePubChange = (e) => {
        setLibellePub(e.target.value)
    }

    const handleImagePubChange = (e) => {
      const file = e.target.files[0];
      setImagePub(file);
    }

    //Fonction de gestion du toast
    const handleCloseToast = () => {
        setShowToast(false)
    }

    //Fonction d'envoi du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()

        //Attibution des valeurs aux variables locales
        const formData = new FormData();
        formData.append("libellePub", libellePub);
        formData.append("imagePub", imagePub);
        //identifiant  de l'administrateur
        formData.append("idAdmin", id);

        try {
          //Envoi des données à l'API
            const response = await fetch('http://127.0.0.1:5000/createpub', {
                method : 'POST', 
                body : formData,
            })

            if (response.ok) {
                const data = await response.json();
                 //Ouverture du toast
                setShowToast(true)
                navigate('/dashboard/listepub')
              } else {
                //Gestion en cas d'erreur
                console.error('Une erreur s\'est produite: ')
              }
                
              } catch (error) {
                //Gestion en cas d'erreur
                console.error('Une erreur s\'est produite: ', error)
              } 
    }
    


  return (
    //Code jsx pour le formulaire de création de newsletter
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