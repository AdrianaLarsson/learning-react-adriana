import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"



function trainsinfo() {
    return (
  
<Container className="traininfo">
  <Row className="activity" style={{borderWidth: "10px", borderColor:'black'}}>
    <Col className="activityname">Grundstädning </Col>
    <Col className="cleantime"> Städtid:</Col>
    <Col className="cleantimestartend"> 08:30 - 09:25</Col>
  </Row>
  <Row className="traininfodeparr">
      <Col className="arrivaltimetitle">Ankomsttid </Col>
      <Col className="departuretimetitle">Avgångstid </Col>
      <Col className="arrivaltime">08:15 </Col>
      <Col className="departuretime">10:00 </Col>
  </Row>
</Container>
  
    )
}

export default trainsinfo
