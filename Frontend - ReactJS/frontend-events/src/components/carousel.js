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
          alt="First slide"
          height= "500vh"
        />
        <Carousel.Caption>
          <h1>Bienvenue sur Events</h1>
          <p>Toutes les infos sur les plus grands évènements sont ici!</p>
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
          <p>Soyez informés de tout ce qui se passe autour de vous!</p>
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
          <p>Ayez les bonnes informations au bon moment§</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}

export default Carouselfunction