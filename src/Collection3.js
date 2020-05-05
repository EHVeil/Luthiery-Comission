import React from 'react';
import Vintage1 from './images/guitars/stratvin.png'
import Vintage2 from './images/guitars/televin.png'
import Vintage3 from './images/guitars/lespaulvin.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Stylesheets/Collection3.css'

function Collection3() {
  return(
    <div className="space">
      <Container fluid>
      <h1>Classic Series</h1>
        <Row>
          <Col className="justify-content-md-between" md={4} sm={12}><img className="collectionstyle" src={Vintage1} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col className="justify-content-md-between" md={4} sm={12}><img className="collectionstyle" src={Vintage2} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col className="justify-content-md-between" md={4} sm={12}><img className="collectionstyle" src={Vintage3} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
        </Row>
      </Container>
    </div>
    )
  }

  export default Collection3
