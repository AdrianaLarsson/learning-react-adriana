import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge>
            <B4>Grundstäd</B4>
            <span style={{display: 'inline-flex'}}>t</span>
           </Badge>
        </div>
    )
}

export default headerBadge
