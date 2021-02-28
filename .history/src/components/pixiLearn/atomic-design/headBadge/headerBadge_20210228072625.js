import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
width: ${(285, 320)};
min-height: ${(25, 320)};
display: inline;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 100%em;
`;


function headerBadge() {
    return (
        <div>
           <Badge>
               <Grid>
               <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'right', paddingLeft: '120px' }}>12:00 - 13:00</p> 
               </Grid>
           </Badge>
        </div>
    )
}

export default headerBadge
