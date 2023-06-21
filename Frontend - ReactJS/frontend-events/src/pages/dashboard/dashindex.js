import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Card, Table} from 'react-bootstrap';
import { FaMusic, FaDrum, FaGuitar, FaUserAlt} from 'react-icons/fa';



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


function Dashindex() {
  //Déclaration des variables
  const [events, setEvents] = useState([])
  //Récupération de l'identifiant de l'utilisateur
  const id = localStorage.getItem('id')

  useEffect(() => {
    //Envoi de la requête à l'API
    fetch(`http://127.0.0.1:5000/readmyevents/${id}`)
    .then(response => response.json())
    .then(data => {
      //Gestion du résultat de la requête
      setEvents(data.events)
    })
    .catch(error => {
      //Gestion en cas d'erreur
      console.error('Erreur lors de la récupération des évènements:', error);
    });
  }, [])

  return (
    <div>
          <Row>
            <Row><h2>Tableau de bord</h2></Row>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link>
                    <Card bg='danger' style={cardStyles}>
                    <FaMusic style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Mes évènements</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="/dashboard/newsletter">
                    <Card bg='danger' style={cardStyles}>
                    <FaDrum style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Mes newsletters</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="/dashboard/listepub">
                    <Card bg='danger' style={cardStyles}>
                    <FaGuitar style={iconStyles}/>
                    </Card><br></br>
                  </Link >
                  <Card.Title>Mes publicités</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card border="danger" text="black">
                <Card.Body>
                  <Link to="">
                    <Card bg='danger' style={cardStyles}>
                    <FaUserAlt style={iconStyles}/>
                    </Card><br></br>
                  </Link>
                  <Card.Title>Gérer mon compte</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row><br></br><br></br>

          <Row>
          <Row><h2>Mes évènements</h2></Row>
            <Card border='secondary'>
              <Card.Body>
                <Table striped hover bordered>
                  <thead>
                    <th>Nom de l'évènement</th>
                    <th>Description</th>
                    <th>Date (début)</th>
                    <th>Date (fin)</th>
                    <th>Heure (début)</th>
                    <th>Heure (fin)</th>
                    <th>Lieu</th>
                    <th>Programme</th>
                  </thead>
                  <tbody>
                    {/**Récupération des données reçues par l'API */}
                    {
                      events.map(event => (
                        <tr key={event.idEvenement}>
                          <td>{event.nomEvenement}</td>
                          <td>{event.descriptionEvenement}</td>
                          <td>{event.dateDebut}</td>
                          <td>{event.dateFin}</td>
                          <td>{event.heureDebut}</td>
                          <td>{event.heureFin}</td>
                          <td>{event.lieuEvenement}</td>
                          <td>{event.programme}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Row>
    </div>
  )
}

export default Dashindex