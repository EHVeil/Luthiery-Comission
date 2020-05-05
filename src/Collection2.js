import React from 'react';
import Strand1 from './images/guitars/strand1.webp'
import Strand2 from './images/guitars/strand2.webp'
import Strand3 from './images/guitars/strand3.webp'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Stylesheets/Collection3.css'

function Collection2() {
  return(
    <div className="space">
      <Container fluid>
      <h1>Standard Models</h1>
        <Row>
          <Col md={4} sm={12}><img className="collectionstyle justif-content-md-between" src={Strand1} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col md={4} sm={12}><img className="collectionstyle justif-content-md-between" src={Strand2} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
          <Col md={4} sm={12}><img className="collectionstyle justif-content-md-between" src={Strand3} alt=""/><Button variant="warning" className="margins">Order</Button></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Collection2
