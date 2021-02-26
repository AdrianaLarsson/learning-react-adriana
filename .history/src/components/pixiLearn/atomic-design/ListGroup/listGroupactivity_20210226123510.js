import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import StyledCard from '../Card/Card';


function listGroupActivity() {
    return (
        <div>
<ListGroup>
  <ListGroup.Item><StyledCard></StyledCard></ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
        </div>
    )
}

export default listGroupActivity;
