import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMasksTheater, faMusic, faUserDoctor, faStar, faChampagneGlasses, faGuitar, faBookOpen, faKitchenSet} from '@fortawesome/free-solid-svg-icons';

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
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
  };

  const buttonStyles2 = {
    margin: '5px 0',
    backgroundColor: 'grey',
    color: '#fff',
    border: 'none',
  };
  
  const cardStyles = {
    width: '4rem',
    height : '3rem'
  }
  
  const iconStyles = {
    marginTop : '16px',
    size : "lg",
    color : '#fff'
  }

  const cardtitleStyles = {
    marginTop : '10px',
    
  }

function Body(){

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
                                <FontAwesomeIcon icon={faMusic} style={iconStyles}/>
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
                                <FontAwesomeIcon icon={faGuitar} style={iconStyles}/>
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
                            <FontAwesomeIcon icon={faMasksTheater} style={iconStyles}/>
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
                                <FontAwesomeIcon icon={faChampagneGlasses} style={iconStyles}/>
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
                                <FontAwesomeIcon icon={faStar} style={iconStyles}/>
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
                                <FontAwesomeIcon icon={faKitchenSet} style={iconStyles}/>
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
                            <FontAwesomeIcon icon={faBookOpen} style={iconStyles}/>
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
                                <FontAwesomeIcon icon={faUserDoctor} style={iconStyles}/>
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
            <h3>A ne pas rater</h3>
            <br></br>
            <Row>
                <Col md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Nom de l'évènement</Card.Title>
                        <Card.Text>Just some text</Card.Text>
                        <Button style={buttonStyles}>Plus de détails</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            <br></br>
            <h3>Autres évènements</h3>
            <br></br>
            <Row>
                <Col md={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Nom de l'évènement</Card.Title>
                        <Card.Text>Just some text</Card.Text>
                        <Button style={buttonStyles2}>Plus de détails</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
      </Container>
    )
}

export default Body