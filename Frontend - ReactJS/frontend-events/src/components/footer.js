import React from 'react'
import { Row , Image, Button} from 'react-bootstrap'
import Elogo from '../images/ELogo.png';
import { FaFigma, FaGithub, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';


const footerStyles =  {
    backgroundColor: '#343a40',
    color: '#fff',
    height: '40vh',
    width : '195vh',
}

const logoStyles = {
    width : '50px'
}

const buttonStyles = {
    margin: '55px 0',
    backgroundColor: '#343a40',
    border: 'none',
}



function Footer() {
    //Mise en forme du footer
  return (
    <div style={footerStyles}>
        <Row>
            <Button style={buttonStyles}><Image src={Elogo} style={logoStyles}/>Events.com</Button>
        </Row>
            <FaFigma/>&nbsp;<FaGithub/>&nbsp;<FaFacebookF/>&nbsp;<FaLinkedinIn/><br></br><br></br>
            Copyright &copy;2023 - Events.com - Tous droits réservés
    </div>
  )
}

export default Footer