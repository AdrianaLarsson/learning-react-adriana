import React from 'react'
import styled from 'styled-components';


function perosnal() {
    const EqualDivider = styled.div`
  display: flex;
  padding: 1rem;
  height: 100px;
  background: papayawhip;
  ${props => props.vertical && "flex-direction: column;"}

  > * {
    flex: 1;

    &:not(:first-child) {
      ${props => props.vertical ? "margin-top" : "margin-left"}: 1rem;
    }
  }
`;

const Child = styled.div`
  padding: 0.25rem 0.5rem;
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
