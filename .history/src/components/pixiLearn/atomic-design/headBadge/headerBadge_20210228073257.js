import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
display: inline;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 100px 20px;
grid-gap: 100px;
`;


function headerBadge() {
    return (
        <div>
         
               <Grid>
               <B4 style={{display: 'inline',textAlign: 'left'}}>ActivityTitle</B4> 
              <p style={{display: 'inline',textAlign: 'right', }}>12:00 - 13:00</p> 
               </Grid>
          
        </div>
    )
}

export default headerBadge
