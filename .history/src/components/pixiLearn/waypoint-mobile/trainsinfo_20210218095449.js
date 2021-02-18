import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"



function trainsinfo() {
    return (
  
<Container className="traininfo">
  <Row className="activity">
    <Col className="activityname">Grundstädning </Col>
    <Col className="cleantime"> Städtid:</Col>
    <Col className="cleantimestartend"> 08:30 - 09:25</Col>
  </Row>
  <Row className="traininfodeparr">
      <Col className="arrivaltime">Ankomsttid </Col>
      <Col className="departuretime">Avgångstid </Col>
      <Col className="departuretime">Avgångstid </Col>
  </Row>
</Container>
  
    )
}

export default trainsinfo
