import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
display: grid;
background-color: rgba(0,0,0,0.05);
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1px 20px;
grid-gap: 1px;
border-sha: grey;
border-radius: 4px;

border-bottom: 1px solid;

`;

export default StyledCard;