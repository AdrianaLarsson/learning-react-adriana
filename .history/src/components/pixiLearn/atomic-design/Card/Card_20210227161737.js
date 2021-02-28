import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
height: 6em;
margin:10px;
background-color: rgba(0,0,0,0.05);
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
border-radius: 4px;
align-items: center;
display: flex;
@media (min-width: 1024px) {
    width: ${(240, 780)};
    min-height: ${(20, 768)};
    height: 100%;
  }
`;

export default StyledCard;