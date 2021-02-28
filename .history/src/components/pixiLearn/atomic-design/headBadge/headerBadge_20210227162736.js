import React from 'react'
import Badge from './Badge'
import { B4, H2 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
            <B4 style={{textAlign: 'left'}}>Grundstäd</B4>
            <H2 sty>12:00 - 13:00 </H2>
           </Badge>
        </div>
    )
}

export default headerBadge
