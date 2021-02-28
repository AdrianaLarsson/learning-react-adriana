import { Form } from 'react-bootstrap';
import styled,{ css} from 'styled-components'
import { colors } from '../utils/theme'

const baseStyle = css`
  font-family: sj_sans, Helvetica, Arial, sans-serif; 
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  font-weight: normal;
  text-align: left;
  color: ${props => (colors.kellyGreen)};
  opacity: ${props => (props.soft ? 0.6 : 1)};

`;

 export const B4 = styled.span`
  ${baseStyle};
  font-size: 17px;
`;
export const H2 = styled.span`
  color: ${colors.black}
  font-size: 16px;
`;

/* color: ${props => (props.green ? colors.kellyGreen : 'inherit')};
opacity: ${props => (props.soft ? 0.6 : 1)}; */