import React from 'react'
import { Container, Box, ActivityTitle, BoxText, CleanTitle, Grid, Item, GridArrival } from "./homestyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
            <Grid>
            <ActivityTitle>{box.title}</ActivityTitle>
            <ActivityTitle>{box.cleanTitle}</ActivityTitle>
            <ActivityTitle>{box.cleanTimeStart}-{box.cleantimeEnd}</ActivityTitle>
            </Grid>
            <GridArrival>
            <ActivityTitle>Ankomsttid</ActivityTitle>
            <ActivityTitle>{box.title}</ActivityTitle>

            </GridArrival>
          </Box>
        ))}
      </Container>
    );
  }
