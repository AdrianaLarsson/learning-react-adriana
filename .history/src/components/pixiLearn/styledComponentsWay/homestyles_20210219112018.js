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
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
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
  padding: .4rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const Grid = styled.div`
display: grid;
background-color: white;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-color: grey;
border-radius: 10p
border-bottom: 1px solid;
`;

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem
`

export const CleanTitle = styled.p`
 color: black;
 font-size: 2rem;
 text-align: center;
 @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
 `


export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;