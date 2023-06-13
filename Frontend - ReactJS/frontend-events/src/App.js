import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carouselfunction from './components/carousel';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='Carousel'>
      <Carouselfunction/>
      </div>
      <Body/> 
      <br></br><br></br>
      <Footer/>
    </div>
  );
}

export default App;
