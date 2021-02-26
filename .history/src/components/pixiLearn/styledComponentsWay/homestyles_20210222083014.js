import styled from "styled-components";
import px2vw from "./px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(215, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;
  border-radius: 5px;
  border-bottom: 2px solid;
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const ActivityTitle = styled.p`
  color: rgb(0, 140, 255);
  font-weight: bold;
  font-size: 3rem;
  text-align: start;
  display: flex;
  justify-content: center;
  padding: 0.1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const ArrivalTitle = styled.p`
  color: rgb(38, 98, 148);
  font-weight: bold;
  font-size: 3rem;
  text-align: start;
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const TrackPosStausTitle = styled.p`
  color: rgb(38, 98, 148);
  font-weight: bold;
  font-size: 3rem;
  text-align: start;
  display: flex;
  justify-content: center;
  padding: 0.4rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const PosStausTitle= styled.p`
color: rgb(38, 98, 148);
font-weight: bold;
font-size: 2rem;
text-align: start;
display: flex;
justify-content: center;
padding: 0.4rem;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`;

const Button = styled.button`
  color: #00AB3B;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const GridPosStatusTrack = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Grid = styled.div`
  width: ${px2vw(285, 320)};
  min-height: ${px2vw(25, 320)};
  display: grid;
  background-color: white;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1px 20px;
  grid-gap: 1px;
  border-color: grey;
  border-radius: 5px;
  border-bottom: 1px solid;
  @media (min-width: 1024px) {
    width: ${px2vw(240, 780)};
    min-height: ${px2vw(20, 768)};
    height: 100%;
  }
`;

export const GridArrival = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const GridArrivalTimeDepartureTime = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 70px;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const ArrivalTimeDeparureTimeItem = styled.p`
  color: #61b15a;
  font-weight: bold;
  font-size: 3rem;
  text-align: start;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const TrainName = styled.p`
  color: grey;
  font-weight: bold;
  font-size: 6.5rem;
  opacity: 59%;
  text-align: start;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`;

export const CleanTitle = styled.p`
  color: black;
  font-size: 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const ArrivalNrDepatureNrGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 195px;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`
export const ArrivalNrDepatureNr = styled.p`
color: #61b15a;
font-weight: bold;
font-size: 3rem;
text-align: start;
display: flex;
justify-content: center;
@media (min-width: 1024px) {
  font-size: 1.5rem;
}
`