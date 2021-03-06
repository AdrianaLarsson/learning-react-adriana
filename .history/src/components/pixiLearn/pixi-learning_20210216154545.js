import React from 'react'
import { Graphics, TextStyle } from 'pixi.js';
import { PixiComponent, Stage, Text } from '@inlet/react-pixi';

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
         <Rectangle x={100} y={100} width={500} height={200} fill={0xff0000} />
         <Text
         text="Hello World"
         anchor={0.5}
         x={150}
         y={150}
         style={
             new TextStyle({})
         }

        />
      </Stage>

    )
}

export default pixiLearning;
