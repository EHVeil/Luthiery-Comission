import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Luthier from './images/Luthier.jpg'
import './Comission-hero.css'

function Hero2() {
  return(
     <div className="jumbotron-fluid Luthier jsutify-content-center">
      <img
       className="hero"
       src={Luthier}
       alt="Comission photo"
      />
      <div className="lowerleft">
        Comission
      </div>
    </div>
  )
}
export default Hero2
