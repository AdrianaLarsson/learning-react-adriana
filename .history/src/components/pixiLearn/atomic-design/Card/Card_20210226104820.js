import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
display: grid;
background-color: white;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-color: grey;
border-radius: 5px;
border-bottom: 1px solid;

`;

export default StyledCard;