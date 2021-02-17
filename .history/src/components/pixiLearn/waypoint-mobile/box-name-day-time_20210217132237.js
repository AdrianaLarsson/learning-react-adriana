import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function boxNameDayTime() {
    return (
<Container className="box">
  <Row>
    <Col>Adriana Larsson</Col>
    <Col>Måndag </Col>
  </Row>
  <Row>
    <Col></Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

    )
}

export default boxNameDayTime;
