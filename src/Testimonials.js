import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Stylesheets/testimonials.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Testimonials() {
  return(

    <Container className="Testimonials">
        <h1>"I think the pinnacle of this craft is to find the shapes and sounds that the material wants, not the shapes and sounds that we, the creator, want."</h1>
        <p>-Eli Veilleux owner and proprietor of Grim Luthiery</p>
    </Container>
  )
}

export default Testimonials
