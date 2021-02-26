import Card from 'react-bootstrap/Card';
//Packages
import styled from 'styled-components/';

const StyledCard = styled(Card)`
width: 100%;

box-shadow: ${props =>
  props.status >= STATUS_LOADING || props.type > ACTIVITY_LAYUP
    ? 'none'
    : '0 1px 3px 0 rgba(0, 0, 0, 0.2)'};
background-color: ${props =>
  props.status >= STATUS_LOADING || props.type > ACTIVITY_LAYUP ? black05 : white};
border-radius: 4px;
`;

export default StyledCard;