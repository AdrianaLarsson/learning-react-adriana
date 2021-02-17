import React from 'react'
import { Graphics, TextStyle } from 'pixi.js';
import { PixiComponent, Stage, Text } from '@inlet/react-pixi';

const Rectangle = PixiComponent('Rectangle', {
    create: props => new Graphics(),
    applyProps: (instance, _, props, drag) => {
      const { x, y, width, height, fill } = props;
      instance.clear();
      instance.beginFill(fill);
      instance.drawRect(x, y, width, height);
      instance.endFill();
      drag
    },
  });



function pixiLearning() {
    function createDragAndDrop(Rectangle){
       
    }
    return (
        <Stage width={300} height={400}>
         <Rectangle
      
          x={100} y={100} width={500} height={200} fill={0xff0000} />
         <Text
         text="Hello World"
         anchor={0.5}
         x={150}
         y={150}
         style={
             new TextStyle({
                 align: 'center',
                 fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
                 fontSize: 50,
                 fontWeight: 400,
                 fill: ['#ffffff', '#00ff99'], // gradient
             })
         }

        />

      </Stage>

    )
}

export default pixiLearning;
