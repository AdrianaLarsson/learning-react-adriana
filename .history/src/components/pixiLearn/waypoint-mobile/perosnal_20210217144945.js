import React from 'react'
import styled from 'styled-components';


function perosnal() {
    const EqualDivider = styled.div`
  display: flex;


  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
    }
  }
`;

const Child = styled.div`

  background: palevioletred;
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
