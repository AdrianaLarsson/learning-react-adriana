import React from 'react'
import {
  Container,
  TrainName,
  Box,
  ArrivalTimeDeparureTimeItem,
  ActivityTitle,
  GridArrivalTimeDepartureTime,
  BoxText,
  CleanTitle,
  Grid,
  Item,
  GridArrival,
  ArrivalTitle,
  ArrivalNrDepatureNrGrid,ArrivalNrDepatureNr,
  GridPosStatusTrack,
  TrackPosStausTitle,
  PosStausTitle,
  ButtonOn

} from "./homestyles";



export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map((box) => (
        <Box key={box.id} bgColor={box.bgColor}>
          <Grid>
            <ActivityTitle>{box.title}</ActivityTitle>
            <ActivityTitle style={{ color: "black" }}>Städtid</ActivityTitle>
            <ActivityTitle>
              {box.cleanTimeStart}-{box.cleantimeEnd}
            </ActivityTitle>
          </Grid>
          <GridArrival>
            <ArrivalTitle>Ankomsttid</ArrivalTitle>
            <ArrivalTitle>2025</ArrivalTitle>
            <ArrivalTitle>Avgångstid</ArrivalTitle>
          </GridArrival>
          <GridArrivalTimeDepartureTime>
            <ArrivalTimeDeparureTimeItem>10:00</ArrivalTimeDeparureTimeItem>
            <TrainName>X2</TrainName>
            <ArrivalTimeDeparureTimeItem>10:00</ArrivalTimeDeparureTimeItem>
          </GridArrivalTimeDepartureTime>
          <GridArrival>
            <ArrivalTitle>Ankomstnr</ArrivalTitle>
            <ArrivalTitle>2525</ArrivalTitle>
            <ArrivalTitle>Avgångsnr</ArrivalTitle>
          </GridArrival>
          <ArrivalNrDepatureNrGrid>
          <ArrivalNrDepatureNr>90786</ArrivalNrDepatureNr>
          <ArrivalNrDepatureNr style={{color:}}>7 vagnar</ArrivalNrDepatureNr>
          <ArrivalNrDepatureNr>90123</ArrivalNrDepatureNr>
          </ArrivalNrDepatureNrGrid>
          <GridPosStatusTrack>
           <TrackPosStausTitle>Spår</TrackPosStausTitle>
           <PosStausTitle>Status/Position</PosStausTitle>
   
          </GridPosStatusTrack>
          <ButtonOn>Klicka på</ButtonOn>
        </Box>
      ))}
    </Container>
  );
}
