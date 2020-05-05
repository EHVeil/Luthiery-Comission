import React from 'react';
import Custom1 from './images/guitars/custom1.png'
import Custom2 from './images/guitars/custom2.png'
import Custom3 from './images/guitars/custom3.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Stylesheets/Collection3.css'

function Collection1() {
  return(
    <div className="space">
      <Container fluid>
      <h1>Custom Shop</h1>
        <Row>
          <Col md={4} sm={12}><img className="collectionstyle justify-content-between" src={Custom1} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col md={4} sm={12}><img className="collectionstyle justify-content-between" src={Custom2} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col md={4} sm={12}><img className="collectionstyle justify-content-between" src={Custom3} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Collection1
