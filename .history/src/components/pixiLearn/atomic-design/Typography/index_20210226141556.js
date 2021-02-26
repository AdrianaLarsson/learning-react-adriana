import { Form } from 'react-bootstrap';
import styled,{ css} from 'styled-components'
import { color} 

const baseStyle = css`
  font-family: sj_sans, Helvetica, Arial, sans-serif; //TODO: code review-Q is this ok?
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  text-align: left;
  margin: 0;
  padding: 0;
  color: ${props => (props.green ? colors.kellyGreen : 'inherit')};
opacity: ${props => (props.soft ? 0.6 : 1)};

`;
 export const B4 = styled.span`
  ${baseStyle};
  font-size: 17px;
`;
/* color: ${props => (props.green ? colors.kellyGreen : 'inherit')};
opacity: ${props => (props.soft ? 0.6 : 1)}; */