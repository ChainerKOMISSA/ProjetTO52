import React , { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Form} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Newevent() {
  //Déclaration des variables
  const navigate = useNavigate()
  const [nomEvenement, setNomEvenement] = useState('');
  const [descriptionEvenement, setDescriptionEvenement] = useState('');
  const [idType, setIdType] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [heureDebut, setHeureDebut] = useState('');
  const [heureFin, setHeureFin] = useState('');
  const [lieuEvenement, setLieuEvenement] = useState('');
  const [programme, setProgramme] = useState('');
  const [imageEvenement, setImageEvenement] = useState(null);
  const [types, SetTypes] = useState([]);
  //Récupération de l'identifiant de l'administrateur
  const id = localStorage.getItem('id');

  //Fonctions de gestions des zones de saisie
  const handleNomEvenementChange = (e) => {
    setNomEvenement(e.target.value);
  }

  const handleDescriptionEvenementChange = (e) => {
    setDescriptionEvenement(e.target.value);
  }

  const handleIdTypeChange = (e) => {
    setIdType(e.target.value);
  }

  const handleDateDebutChange = (e) => {
    setDateDebut(e.target.value);
  }
  
  const handleDateFinChange = (e) => {
    setDateFin(e.target.value);
  }

  const handleHeureDebutChange = (e) => {
    setHeureDebut(e.target.value);
  }

  const handleHeureFinChange = (e) => {
    setHeureFin(e.target.value);
  }

  const handleLieuEvenementChange = (e) => {
    setLieuEvenement(e.target.value);
  }

  const handleProgrammeChange = (e) => {
    setProgramme(e.target.value);
  }

  const handleImageEvenementChange = (e) => {
    const file = e.target.files[0];
    setImageEvenement(file);
  }


  //Fonction d'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    //Attribution des valeurs aux variables locales
    formData.append('nomEvenement', nomEvenement);
    formData.append('descriptionEvenement', descriptionEvenement);
    formData.append('idType', idType);
    formData.append('dateDebut', dateDebut);
    formData.append('dateFin', dateFin);
    formData.append('heureDebut', heureDebut);
    formData.append('heureFin', heureFin);
    formData.append('lieuEvenement', lieuEvenement);
    formData.append('programme', programme);
    formData.append('imageEvenement', imageEvenement);
    //identifiant  de l'administrateur
    formData.append('idUser', id);
    

    try {
      //Envoi des données à l'API
      const response = await fetch('http://127.0.0.1:5000/createvent', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
         //Ouverture du toast
        toast.success('Evènement ajouté avec succès')
        //Redirection vers une autre route
        navigate('/dashboard/listeconcert')
      } else {
        //Ouverture du toast erreur
        toast.error('Une erreur s\'est produite.')
      }
    } catch (error) {
      //Gestion en cas d'erreur
      console.log('Une erreur s\'est produite.', error);
      toast.error('Une erreur s\'est produite.')
    }
  }

  //Récupération des types de la base de données
  useEffect(()  => {
    fetch('http://127.0.0.1:5000/type')
    .then(response => response.json())
    .then(data => {
      //Récupération des types de la base de données
      SetTypes(data.types)
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de la récupération des types:', error);
    });
  }, []);

  return (
    //Code jsx pour le formulaire de création de newsletter
    <Card border='secondary'>
      <CardHeader>
      <h2>Enregister un nouvel évènement</h2>
      </CardHeader>
      <Card.Body>
      <Row>
          <Form onSubmit={handleSubmit} encType='multipart/form-data'>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nom de l'évènement</Form.Label>
            <Form.Control type="text" name='nomEvenement' onChange={handleNomEvenementChange} value={nomEvenement} placeholder="Entrez le nom" required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Type</Form.Label>
            <Form.Select defaultValue="Choose..." name='idType' onChange={handleIdTypeChange} value={idType} required>
              <option>Sélectionnez un type...</option>
              {types.map(type => (
                <option value={type.idType}>{type.libelleType}</option>
              ))}
            </Form.Select>
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Description de l'évènement</Form.Label>
            <Form.Control type="text" name='descriptionEvenement' onChange={handleDescriptionEvenementChange} value={descriptionEvenement} placeholder="Entrez la description" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lieu</Form.Label>
            <Form.Control type="text" name='lieuEvenement' onChange={handleLieuEvenementChange} value={lieuEvenement} placeholder="Entrez le lieu" required/>
          </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date de début</Form.Label>
            <Form.Control type="date" name='dateDebut' onChange={handleDateDebutChange} value={dateDebut} placeholder="" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Heure de début</Form.Label>
            <Form.Control type="time" name='heureDebut' onChange={handleHeureDebutChange} value={heureDebut} placeholder="" required/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Date de fin</Form.Label>
            <Form.Control type="date" name='dateFin' onChange={handleDateFinChange} value={dateFin} placeholder="" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Heure de fin</Form.Label>
            <Form.Control type="time" name='heureFin' onChange={handleHeureFinChange} value={heureFin} placeholder="" required/>
          </Form.Group>
          </Row>

          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Programme</Form.Label>
            <Form.Control type="text" name='programme' onChange={handleProgrammeChange} value={programme} placeholder="Entrez le programme..." required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={handleImageEvenementChange} placeholder="Ajoutez une image" accept='image/*' />
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

export default Newevent