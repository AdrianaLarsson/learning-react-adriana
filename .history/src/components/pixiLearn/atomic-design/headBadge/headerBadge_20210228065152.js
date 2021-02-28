import React from 'react'
import Badge from './Badge'
import { B4, H2 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
            <B4 style={{textAlign: 'left'}}>Grundstäd</B4>
           </Badge>
        </div>
    )
}

export default headerBadge
