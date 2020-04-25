import React from 'react';
import './Hero-index.css'
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PRSHero from './images/PRS_2.jpeg';
import SemiHero from './images/Semihollowhero.jpg';
import StratHero from './images/Strat-hero.jpg';

function Hero1() {
  return(
    <div className="jumbotron-carousel jumbotron-fluid ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block hero-img"
            src={PRSHero}
            alt="PRS Hero"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hero-img"
            src={SemiHero}
            alt="Semi-Hollow Hero"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hero-img"
            src={StratHero}
            alt="Strat Hero"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero1
