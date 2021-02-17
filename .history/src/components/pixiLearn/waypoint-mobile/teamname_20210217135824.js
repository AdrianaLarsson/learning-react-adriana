import React from 'react'
import styled from 'styled-components';

function teamName() {
    
const Box = styled.div`
background: #61b15a;
borderRadius: 20px;
height: 225px;
color: white;
font-size: 20px;
`
    return (
        <div>
        <Box><p>Tur 4</p>
        <p className="workposti">HGL</p>
        <p>08:00 - 17:00</p>
        </Box>
        </div>
    )
}

export default teamName
