import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
display: grid;
background-color: rgba(0,0,0,0.05);
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.6);
border-radius: 4px;

`;

export default StyledCard;