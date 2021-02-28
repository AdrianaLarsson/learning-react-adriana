import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import Row from 'react-bootstrap/Row!'
function headerBadge() {
    return (
        <div>
           <Badge>
              <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'end' }}>ActivityTitle</p> 
           </Badge>
        </div>
    )
}

export default headerBadge
