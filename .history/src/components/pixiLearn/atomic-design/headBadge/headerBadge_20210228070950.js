import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
           <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
              <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'end' }}>ActivityTitle</p> 
           </Badge>
        </div>
    )
}

export default headerBadge
