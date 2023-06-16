import React , {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Image, Carousel, Row, Col, Card, Modal } from 'react-bootstrap';
import { FaMusic, FaGuitar, FaMask, FaGlassCheers, FaCalendarAlt, FaStar, FaHamburger, FaBookOpen, FaHospitalSymbol, FaHeart, FaCcPaypal, FaMapMarkerAlt} from 'react-icons/fa';
import { BsSmartwatch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import car2 from "../images/car2.png";
import Elogo from '../images/ELogo.png';


  
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

  const cardStyles2 = {
    width: '2rem',
    height : '2rem'
  }
  
  const iconStyles = {
    marginTop : '16px',
    marginLeft : '22px',
    size : "lg",
    color : '#fff'
  }

  const iconStyles2 = {
    marginTop : '7px',
    marginLeft : '7px',
    size : "lg",
    color : 'red'
  }

  const cardtitleStyles = {
    marginTop : '10px',
  }

  const readStyles = {
    maxHeight : "310px",
    minHeight : "310px"
  }

  const logoStyles = {
  width : '35px'
  }

function Body(){
  const navigate = useNavigate()
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [pubs, setPubs] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchValue, setSearchValue] = useState('');



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

    const handleSearchInputChange = (event) => {
      setSearchValue(event.target.value);
    };

    const handleSearch = () => {
      const filtered = events.filter(event => {
        return event.nomEvenement.toLowerCase().includes(searchValue.toLowerCase());
      })

      setFilteredEvents(filtered);
    }

    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand className="text-danger" href="#home"><Image src={Elogo} style={logoStyles}/>Events.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Acceuil</Nav.Link>
              <NavDropdown title="Evènements" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Concerts</NavDropdown.Item>
                <NavDropdown.Item href="#">Festivals</NavDropdown.Item>
                <NavDropdown.Item href="#">Formations</NavDropdown.Item>
                <NavDropdown.Item href="#">Spectacles pour enfants</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Autres</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Recherche..."
                    className="me-2"
                    aria-label="Search"
                    value={searchValue}
                    onChange={handleSearchInputChange}
                  />
                  <Button variant="outline-danger" onClick={handleSearch}>Rechercher</Button>
            </Form>
            <Link to={'/login'} className='m-2'><Button variant="danger">Se connecter</Button></Link>
          </Navbar.Collapse>
        </Container>
        </Navbar>
          <Carousel>
            {pubs.map(pub => (
              <Carousel.Item key={pub.idPub}>
              <img
                className="d-block w-100"
                src={car2} 
                alt="First slide"
                height= "500vh"
              />
              <Carousel.Caption>
                <p>{pub.libellePub}</p>
              </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>

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
                    <Card.Img variant="top" src={event.imageEvenement} /><br></br>
                    <Card.Title>{event.nomEvenement}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                          {event.descriptionEvenement}<br></br><br></br><br></br>
                        </Card.Text>
                        <Button style={buttonStyles} onClick={() => handleOpenModal(event)}>Plus de détails</Button>
                    </Card.Body>
                </Card>
                </Col>
              ))}
            </Row>
            <br></br>
            {
              /** <h3>Publicités</h3>
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
            </Row>*/
            }
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
                          <p>{selectedEvent.descriptionEvenement}</p><br></br>
                          <Card border='light'>
                          <Row>
                          <Col md={2}>
                              <Card border='danger' style={cardStyles2}>
                              <BsSmartwatch  style={iconStyles2}/>
                              </Card>
                          </Col>
                          <Col md={10}>
                            {selectedEvent.heureDebut} - {selectedEvent.heureFin}
                          </Col>
                          </Row><br></br>
                          <Row>
                          <Col md={2}>
                              <Card border='danger' style={cardStyles2}>
                              <FaCalendarAlt style={iconStyles2}/>
                              </Card>
                          </Col>
                          <Col md={10}>
                            {selectedEvent.dateDebut} - {selectedEvent.dateFin}
                          </Col>
                          </Row><br></br>
                          <Row>
                          <Col md={2}>
                              <Card border='danger' style={cardStyles2}>
                                  <FaMapMarkerAlt style={iconStyles2}/>
                              </Card>
                          </Col>
                          <Col md={10}>
                          {selectedEvent.lieuEvenement}
                          </Col>
                          </Row>
                          </Card>
                        </Card.Body>
                        <Card.Footer>
                          <Link to='/payer'>
                            <Button variant='outline-danger'><FaCcPaypal/>&nbsp;Payer un ticket</Button>&nbsp;&nbsp;
                          </Link>&nbsp; 
                          <Link >
                            <Button variant='outline-secondary'><FaHeart/>&nbsp;Ajouter à ma liste</Button>
                          </Link> 
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