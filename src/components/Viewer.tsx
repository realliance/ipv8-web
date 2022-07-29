import Pixi from '@inlet/react-pixi';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Map from "./Map";
import building from '../assets/building.png';

export const Viewer = () => {
  return (
    <Pixi.Stage
      options={{ backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1, antialias: true }}
    >
      <Map>
        <Pixi.Sprite image={building} />
      </Map>
    </Pixi.Stage>
  )
}
