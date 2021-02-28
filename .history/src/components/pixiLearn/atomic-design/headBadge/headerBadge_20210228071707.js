import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;
function headerBadge() {
    return (
        <div>
           <Badge>
               <Grid>

               </Grid>
    
           </Badge>
        </div>
    )
}

export default headerBadge
