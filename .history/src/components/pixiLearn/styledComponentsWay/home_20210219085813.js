import React from 'react'
import { Container, Box, BoxTitle, BoxText } from "./HomeStyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
            <BoxTitle>Adriana</BoxTitle>
            <BoxText>hsakjh</BoxText>
          </Box>
        ))}
      </Container>
    );
  }
