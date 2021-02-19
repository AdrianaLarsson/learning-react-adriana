import React from 'react'
import { Container, Box, ActivityTitle, BoxText, CleanTitle, Grid, It } from "./homestyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
              <Grid>
            <ActivityTitle>{box.title}</ActivityTitle>
            <CleanTitle>Städtid</CleanTitle>
            <BoxText>{box.text}</BoxText>
            </Grid>
          </Box>
        ))}
      </Container>
    );
  }
