import React from 'react'
import Badge from './Badge'
import { B4 } from '../Typography'
import styled from 'styled-components/'


export const Grid = styled.div`
  display: inline;

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
