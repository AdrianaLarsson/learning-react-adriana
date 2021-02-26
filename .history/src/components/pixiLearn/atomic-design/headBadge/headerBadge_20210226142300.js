import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
function headerBadge() {
    return (
        <div>
           <Badge><B4>Grundstäd</B4>
           <p style={{display: 'inline', paddingLeft: '135px'}}>12:00 - 13:00</p>
           </Badge>
        </div>
    )
}

export default headerBadge
