import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
width: ${(285, 320)};
min-height: ${(100, 320)};
display: grid;
background-color: white;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-color: grey;
border-radius: 5px;
border-bottom: 1px solid;
@media (min-width: 1024px) {
  width: ${(240, 780)};
  min-height: ${(20, 768)};
  height: 100%;
}
`;

export default StyledCard;