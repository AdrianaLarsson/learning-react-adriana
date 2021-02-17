import React from 'react'
import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"


function teamName() {
    
const Box = styled.div`
background: #61b15a;
borderRadius: 20px;
height: 55px;
width:500px;
color: white;
font-size: 20px;
display: inline-flex;
text-align: center;
margin-right: 100px;
`
    return (
        <Container className="teamname">
        <Row>
          <Col className="work">Adriana Larsson </Col>
          <Col className="date"> Måndag 2 Feb 2021</Col>
          <Col className="time"> 13:00 </Col>
        </Row>
      </Container>
    )
}

export default teamName
