import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
width: ${(285, 320)};
min-height: ${px2vw(25, 320)};
display: grid;
background-color: white;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-color: grey;
border-radius: 5px;
border-bottom: 1px solid;
@media (min-width: 1024px) {
  width: ${px2vw(240, 780)};
  min-height: ${px2vw(20, 768)};
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
