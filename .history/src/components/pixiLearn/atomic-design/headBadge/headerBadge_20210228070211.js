import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
              <B4>ActivityTitle</B4> 
              <p style={{textAlign: 'end'}}>ActivityTitle</B4> 
           </Badge>
        </div>
    )
}

export default headerBadge
