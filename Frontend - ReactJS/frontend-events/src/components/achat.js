import React from 'react'
import { Button, Card, Col, FormGroup, FormSelect, Image, Row, InputGroup, Form } from 'react-bootstrap'
import car2 from "../images/car2.png";
import {FaCcVisa, FaCcPaypal, FaExpeditedssl} from 'react-icons/fa';

const buttonStyles = {
    margin: '45px 0',
    backgroundColor: '#fff',
    border: 'none',
    color : '#000',
}


function Achat() {
  return (
    <div>
        <Row><Button style={buttonStyles}><h2>Paiement</h2></Button></Row>
        <Card border='secondary'>
            <Card.Body>
                <Row>
                    <Col md={3}>
                        <Card>
                           <Image src={car2}></Image>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card border='light'>
                        <h3>Title: Summer Music Festival</h3>
                        <h6>Date: July 20th, 2023<br></br>Location: City Park Amphitheater</h6>
                        Join us for an unforgettable day of live music and entertainment at the Summer Music Festival. This annual event brings together renowned artists from various genres to create a vibrant and energetic atmosphere for music lovers of all ages.

                        Featuring a diverse lineup of local and international musicians, the festival promises an eclectic mix of performances that will cater to every musical taste. From rock and pop to jazz and hip-hop, there's something for everyone.
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card border='light'>
                            <h5>Paiement</h5><br></br>
                            <FormGroup>
                                <FormSelect>
                                    <option>Options de paiement...</option>
                                </FormSelect>
                            </FormGroup><br></br>
                            <h5>Nombre de tickets</h5><br></br>
                            <InputGroup>
                                <InputGroup.Text>-</InputGroup.Text>
                                <Form.Control placeholder="2" />
                                <InputGroup.Text>+</InputGroup.Text>
                            </InputGroup><br></br>
                            <h6>Prix total : <b>€5000</b></h6><br></br>
                            <Row><Button variant="danger" size="md">Payer le(s) ticket(s)</Button></Row><br></br>
                            <Row><Button variant="outline-danger" size="md">Ajouter au panier</Button></Row>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                <FaCcVisa/>&nbsp;<FaCcPaypal/>&nbsp;<FaExpeditedssl/>
            </Card.Footer>
        </Card>
    </div>
  )
}

export default Achat