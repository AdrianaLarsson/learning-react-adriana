import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
width: ${(285, 320)};
min-height: ${(25, 320)};
display: inline;

grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 100%em;
border-color: grey;
border-radius: 5px;
border-bottom: 1px solid;
@media (min-width: 1024px) {
  width: ${(240, 780)};
  min-height: ${(20, 768)};
  height: 100%;
}
`;
function headerBadge() {
    return (
        <div>
           <Badge>
               <Grid>
               <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'end' }}>ActivityTitle</p> 
               </Grid>
           </Badge>
        </div>
    )
}

export default headerBadge
