import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function boxNameDayTime() {
    return (
<Container className="box">
  <Row>
    <Col className="name">Adriana Larsson</Col>
    <Col className="date">Måndag 2 Feb 2021</Col>
    <Col>13:00</Col>
  </Row>
</Container>

    )
}

export default boxNameDayTime;
