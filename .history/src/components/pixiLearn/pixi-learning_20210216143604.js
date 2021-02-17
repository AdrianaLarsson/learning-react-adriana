import React from 'react'
import { Stage, Sprite } from '@inlet/react-pixi';



function pixiLearning() {
    return (
        <Stage>
        <Sprite image="./bunny.png" x={100} y={100} />
      </Stage>

    )
}

export default pixiLearning;
