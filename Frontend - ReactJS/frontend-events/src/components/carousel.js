import {Carousel, Image} from 'react-bootstrap';
import car2 from "../images/car2.png";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";

function Carouselfunction() {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car2} 
          fluid
          alt="First slide"
          height= "500vh"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car3} 
          alt="Second slide"
          height= "500vh"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={car4} 
          alt="Third slide"
          height= "500vh"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Carouselfunction