import React , {useState, useEffect} from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaMusic, FaGuitar, FaMask, FaGlassCheers, FaStar, FaHamburger, FaBookOpen, FaHospitalSymbol} from 'react-icons/fa';

  
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

function Body(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
      fetch('http://127.0.0.1:5000/readevents')
      .then(response => response.json())
      .then(data => {
        setEvents(data.events)
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des concerts:', error);
      });
    }, []);

    return (
        <Container fluid>
            <br></br>
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

            <br></br>
            <h3>Evènements à ne pas rater</h3>
            <br></br>
            <Row>
              {events.map(event => (
                <Col md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={event.imageEvenement} />
                    <Card.Body>
                        <Card.Title>{event.nomEvenement}</Card.Title>
                        <Card.Text>{event.descriptionEvenement}</Card.Text>
                        <Button style={buttonStyles}>Plus de détails</Button>
                    </Card.Body>
                </Card>
                </Col>
              ))}
            </Row>
      </Container>
    )
}

export default Body