import React from 'react'
import { Container, Box, ActivityTitle, BoxText, CleanTitle, Grid, Item, GridArrival, ArrivalTitle } from "./homestyles";



export default function Home({ boxData }) {
    return (
      <Container>
        {boxData.map(box => (
          <Box key={box.id} bgColor={box.bgColor}>
            <Grid>
            <ActivityTitle>{box.title}</ActivityTitle>
            <ActivityTitle sty>{box.cleanTitle}</ActivityTitle>
            <ActivityTitle>{box.cleanTimeStart}-{box.cleantimeEnd}</ActivityTitle>
            </Grid>
            <GridArrival>
            <ArrivalTitle>Ankomsttid</ArrivalTitle>
            <ArrivalTitle>Avgångstid</ArrivalTitle>

            </GridArrival>
          </Box>
        ))}
      </Container>
    );
  }
