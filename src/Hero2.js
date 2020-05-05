import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Luthier from './images/heroes/Luthier.jpg'
import './Stylesheets/Comission-hero.css'

function Hero2() {
  return(
     <div className="jumbotron-fluid Luthier justify-content-center">
      <img
       className="hero"
       src={Luthier}
       alt="Comission photo"
      />
      <div className="lowerleft comfont fontborder">
        Comissions
        <h4>Order from the custom shop</h4>
      </div>
      <div>
        <h4><a href="" className="lowerright">Order >></a></h4>
      </div>
    </div>
  )
}
export default Hero2
