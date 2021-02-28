import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import Col from 'react-bootstrap/Col'
function headerBadge() {
    return (
        <div>
           <Badge>
               <Col>
                   hej
               </Col>

               <Col xs>
                   då
               </Col>
              <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'end' }}>ActivityTitle</p> 
           </Badge>
        </div>
    )
}

export default headerBadge
