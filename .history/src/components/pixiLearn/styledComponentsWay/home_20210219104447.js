import React from 'react'
import { Container, Box, ActivityTitle, BoxText, CleanTitle, Grid, Item } from "./homestyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
              <Grid>
          <Ite <ActivityTitle>{box.title}</ActivityTitle>
            <Item><CleanTitle>Städtid</CleanTitle></Item>
            <BoxText>{box.text}</BoxText>
            </Grid>
          </Box>
        ))}
      </Container>
    );
  }
