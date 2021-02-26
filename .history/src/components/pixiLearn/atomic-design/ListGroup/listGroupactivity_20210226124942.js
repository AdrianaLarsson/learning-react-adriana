import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import StyledCard from '../Card/Card';
import headerBadge from '../headBadge/headerBadge';


function listGroupActivity() {
    return (
        <div>
<ListGroup>
  <ListGroup.Item><StyledCard>1
   <HeaderBadge></eaderBadge>
    </StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>2</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>3</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>4</StyledCard></ListGroup.Item>
</ListGroup>
        </div>
    )
}

export default listGroupActivity;
