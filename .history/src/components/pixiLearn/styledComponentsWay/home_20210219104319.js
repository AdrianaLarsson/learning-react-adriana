import React from 'react'
import { Container, Box, ActivityTitle, BoxText, CleanTitle, Grid, Item } from "./homestyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
              <Grid>
            <ActivityTitle>{box.title}</ActivityTitle>
            <Item></Item><CleanTitle>Städtid</CleanTitle>
            <BoxText>{box.text}</BoxText>
            </Grid>
          </Box>
        ))}
      </Container>
    );
  }
