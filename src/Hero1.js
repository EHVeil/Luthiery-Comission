import React from 'react';
import './Stylesheets/Hero-index.css'
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import PRSHero from './images/heroes/PRS_2.jpeg';
import SemiHero from './images/heroes/Semihollowhero.jpg';
import StratHero from './images/heroes/Strat-hero.jpg';
import StrandHero from './images/heroes/strandback1.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Hero1() {
  return(
    <div className="jumbotron-carousel jumbotron-fluid Hero1">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block hero-img Strand"
            src={StrandHero}
            alt="PRS Hero"
          />
          <Carousel.Caption className="midleft text-left fontborder indfont">
            <h1>Basic Models</h1>
            <h3>Hand made, basic models</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hero-img"
            src={SemiHero}
            alt="Semi-Hollow Hero"
          />
          <Carousel.Caption className="midleft text-left fontborder indfont">
            <h1>Vintage line</h1>
            <h3>Vintage model copies to your specifications</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block hero-img"
            src={StratHero}
            alt="Strat Hero"
          />
          <Carousel.Caption className="midleft text-left fontborder indfont">
            <h1>Custom Shop</h1>
            <h3>Models out of our shop</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero1
