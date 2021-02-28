import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import StyledCard from '../Card/Card';
import HeaderBadge from '../headBadge/headerBadge';
import { H } from '../Typography'


function listGroupActivity() {
    return (
        <div>
<ListGroup>
  <ListGroup.Item><StyledCard>
    <HeaderBadge></HeaderBadge>
<H2>Ankomsttid </H2>
  </StyledCard>
  </ListGroup.Item>
{/*   <ListGroup.Item><StyledCard>2</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>3</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>4</StyledCard></ListGroup.Item> */}
</ListGroup>
        </div>
    )
}

export default listGroupActivity;
