import Pixi from '@inlet/react-pixi';
import React, { useEffect, useRef, useState } from "react";
import { subVec2, Vec2, addVec2 } from '../lib/math';

interface MapProps {
  children: React.ReactNode;
}

export default ({ children }: MapProps) => {
  const app = Pixi.useApp();
  const [dragging, setDragging] = useState(false);
  const [skipOnce, setSkipOnce] = useState(false);
  const [mapPosition, setMapPosition] = useState<Vec2>([0, 0]);
  const [cursorPosition, setCursorPosition] = useState<[Vec2, Vec2]>([[0, 0], [0, 0]]);

  const [x, y] = mapPosition;

  useEffect(() => {
    app.stage.interactive = true;
    app.stage.hitArea = app.renderer.screen;
    app.stage.on('pointerdown', () => { 
      setDragging(true);
      setSkipOnce(true);
    });
    app.stage.on('pointerup', () => { 
      setDragging(false); 
      setCursorPosition([[0, 0], [0, 0]]); 
    });
    app.stage.on('pointerupoutside', () => { 
      setDragging(false); 
      setCursorPosition([[0, 0], [0, 0]]); 
    });
  }, []);
  
  return (
    <Pixi.Container 
      x={x} 
      y={y}
      interactive={true}
      pointermove={(e) => {
        if (dragging) {
          const cursor: Vec2 = [e.data.global.x, e.data.global.y];
          let current = cursorPosition;
          current.shift();
          current.push(cursor);
  
          if (!skipOnce) {
            const delta = subVec2(current[1], current[0]);
            const newPosition = addVec2(mapPosition, delta);
            setMapPosition(newPosition);
          } else {
            setSkipOnce(false);
          }
          setCursorPosition(current);
        }
      }}
    >
      {children}
    </Pixi.Container>
  )
}
