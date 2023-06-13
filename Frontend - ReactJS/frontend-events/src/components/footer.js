import React from 'react'
import { Col, Row , Image} from 'react-bootstrap'
import Elogo from '../images/ELogo.png';
import { FaFigma, FaGithub} from 'react-icons/fa';


const footerStyles =  {
    backgroundColor: '#343a40',
    color: '#fff',
    height: '40vh',
}

const logoStyles = {
    width : '35px'
}

function Footer() {
  return (
    <div style={footerStyles}>
        <Row>
            <Col md={3}>

            </Col>
            <Col md={6}>
                
            </Col>
            <Col md={3}>
                
            </Col>
        </Row>
        <Row>
            <Col md={3}>
            <Image src={Elogo} style={logoStyles}/>
            </Col>
            <Col md={6}>
                
            </Col>
            <Col md={3}>
                
            </Col>
        </Row>
            <FaFigma/>&nbsp;<FaGithub/>
    </div>
  )
}

export default Footer