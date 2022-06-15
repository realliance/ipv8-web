import Pixi from '@inlet/react-pixi';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Map from "./components/map";
import building from './assets/building.png';

const App = () => {
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#viewer')
);
