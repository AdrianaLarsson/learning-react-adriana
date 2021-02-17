import React from 'react'
import styled from 'styled-components';


function perosnal() {
    const EqualDivider = styled.div`
  display: flex;
  padding: 0.4rem;
  height: 100px;
  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;
     font-style:bo
    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

const Child = styled.div`

background: linear-gradient(#006ded 0%, #1bace2 34.48%, #00e2ed 100%);
`;

    return (
        <div>
        <EqualDivider>
          <Child>First</Child>
          <Child>Second</Child>
          <Child>Third</Child>
        </EqualDivider>
      
        </div>
    )
}

export default perosnal;
