import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import StyledCard from '../Card/Card';


function listGroupActivity() {
    return (
        <div>
<ListGroup>
  <ListGroup.Item><StyledCard>1</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>2</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>Heej</StyledCard></ListGroup.Item>
  <ListGroup.Item><StyledCard>Heej</StyledCard></ListGroup.Item>
</ListGroup>
        </div>
    )
}

export default listGroupActivity;
