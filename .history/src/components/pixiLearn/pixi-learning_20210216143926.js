import React from 'react'
import { Stage, Sprite } from '@inlet/react-pixi';


const Rectangle = PixiComponent('Rectangle', {
    create: props => new Graphics(),
    applyProps: (instance, _, props) => {
      const { x, y, width, height, fill } = props;
      instance.clear();
      instance.beginFill(fill);
      instance.drawRect(x, y, width, height);
      instance.endFill();
    },
  });

function pixiLearning() {
    return (
        <Stage width={300} height={400}>
     
      </Stage>

    )
}

export default pixiLearning;
