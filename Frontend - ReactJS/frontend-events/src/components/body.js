import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { FaMusic, FaGuitar, FaMask, FaGlassCheers, FaStar, FaHamburger, FaBookOpen, FaHospitalSymbol, FaHeart, FaCcPaypal} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

  
  const buttonStyles = {
    margin: '5px 0',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
  };
  
  const cardStyles = {
    width: '4rem',
    height : '3rem'
  }
  
  const iconStyles = {
    marginTop : '16px',
    marginLeft : '22px',
    size : "lg",
    color : '#fff'
  }

  const cardtitleStyles = {
    marginTop : '10px',
  }

  const readStyles = {
    maxHeight : "400px",
    minHeight : "400px"
  }

function Body(){
  const navigate = useNavigate()
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [pubs, setPubs] = useState([]);

    useEffect(() => {

      fetch('http://127.0.0.1:5000/readevents')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events)
        fetch('http://127.0.0.1:5000/publicite')
          .then(response => response.json())
          .then(data => {
            setPubs(data.publicites)
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des publicités:', error);
          })
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des évènements:', error);
      });

    }, []);


    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedEvent(null);
    }

    const handleOpenModal = (event) => {
      setSelectedEvent(event);
      setShowModal(true);
    }

    return (
        <div>
            <br></br><br></br>
            <h3>Découvrez les catégories du moment</h3>
            <br></br>
            <Row>
              <Col md={3}>
                <Card border="danger" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='danger' style={cardStyles}>
                                <FaMusic style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Musique</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="secondary" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='secondary' style={cardStyles}>
                                <FaGuitar style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Spectacles</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="secondary" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='secondary' style={cardStyles}>
                            <FaMask style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Théâtres</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="danger" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='danger' style={cardStyles}>
                                <FaGlassCheers style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Fêtes</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br></br>

            <Row>
              <Col md={3}>
                <Card border="danger" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='danger' style={cardStyles}>
                                <FaStar style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Loisirs</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="secondary" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='secondary' style={cardStyles}>
                                <FaHamburger style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Gastronomie</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="secondary" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='secondary' style={cardStyles}>
                            <FaBookOpen style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Education</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3}>
                <Card border="danger" text="black">
                  <Card.Body>
                    <Row>
                        <Col md={2}>
                            <Card bg='danger' style={cardStyles}>
                                <FaHospitalSymbol style={iconStyles}/>
                            </Card>
                        </Col>
                        <Col md={10}>
                            <Card.Title style={cardtitleStyles}>Santé</Card.Title>
                        </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <br></br><br></br><br></br><br></br>
            <h3>Evènements à ne pas rater</h3>
            <br></br>
            <Row>
              {events.map(event => (
                <Col md={3} key={event.idEvenement}>
                <Card style={readStyles}>
                    <Card.Img variant="top" src={event.imageEvenement} />
                    <Card.Body>
                        <Card.Title>{event.nomEvenement}</Card.Title>
                        <Card.Text>{event.descriptionEvenement}</Card.Text>
                        <Button style={buttonStyles} onClick={() => handleOpenModal(event)}>Plus de détails</Button>
                    </Card.Body>
                </Card>
                </Col>
              ))}
            </Row>
            <br></br>
            <h3>Publicités</h3>
            <br></br>
            <Row>
              {pubs.map(pub => (
                <Col md={3} key={pub.idPub}>
                  <Card style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Text>{pub.libellePub}</Card.Text>
                      </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
              {
                selectedEvent && (
                  <Modal show={showModal} onHide={handleCloseModal} size='lg'>
                    <Modal.Header closeButton>
                    <Modal.Title>Détails de l'évènement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Card border='danger'>
                        <Card.Header>
                          <h3>{selectedEvent.nomEvenement}</h3>
                        </Card.Header>
                        <Card.Body>
                          <p>{selectedEvent.descriptionEvenement}</p>
                        </Card.Body>
                        <Card.Footer>
                        <Button variant='outline-danger'><FaCcPaypal/>&nbsp;Payer un ticket</Button>&nbsp;&nbsp;
                        <Button variant='outline-secondary'><FaHeart/>&nbsp;Ajouter à ma liste</Button>
                        </Card.Footer>
                      </Card>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='secondary' onClick={handleCloseModal}>Fermer</Button>
                </Modal.Footer>
                  </Modal>
                )
              }
      </div>
    )
}

export default Body