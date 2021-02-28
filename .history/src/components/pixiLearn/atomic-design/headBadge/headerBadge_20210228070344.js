import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
              <B4>ActivityTitle</B4> 
              <p style={{textAlign: 'end', display: 'inline'}}>ActivityTitle</p> 
           </Badge>
        </div>
    )
}

export default headerBadge
