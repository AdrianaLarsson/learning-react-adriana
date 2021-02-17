import React from 'react'
import styled from 'styled-components';
import { FiPhone } from "react-icons/fi";


function perosnal() {
    const EqualDivider = styled.div`
  display: flex;
  padding: 0.4rem;
  height: 80px;
  background: lightgrey;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;
     font-style:bold;
    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

const Child = styled.div`

background: linear-gradient(#338EBC 0%, #ffffff 34.48%, #00e2ed 100%);
`;

    return (
        <div>
        <EqualDivider>
          <Child><p>first</p>
          <FiPhone className="phone" />
          </Child>
          <Child>first
          <FiPhone className="phone" />
          </Child>
          <Child>first
          <FiPhone className="phone" />
          </Child>
        </EqualDivider>
      
        </div>
    )
}

export default perosnal;
