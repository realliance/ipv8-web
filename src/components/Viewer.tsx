import Pixi from '@inlet/react-pixi';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Map from "./Map";
import building from '../assets/building.png';

interface WindowSize {
  width?: number,
  height?: number,
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export const Viewer = () => {
  const size = useWindowSize();

  console.log(size)

  return (
    <Pixi.Stage
      width={size.width || 800}
      height={Math.floor((size.height || 600) * 0.75)}
      options={{ backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1, antialias: true }}
    >
      <Map>
        <Pixi.Sprite image={building} />
      </Map>
    </Pixi.Stage>
  )
}
