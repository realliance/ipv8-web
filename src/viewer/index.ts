import { Application, Renderer } from 'pixi.js';
import { Sprite } from './lib/sprite';
import { Map } from './components/map';
import { EventSystem } from '@pixi/events';

import building from './assets/building.png';

delete Renderer.__plugins.interaction;
const app = new Application({ backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1, antialias: true });
app.renderer.addSystem(EventSystem, 'events');
document.querySelector('#viewer')!!.appendChild(app.view);

const map = new Map(app);

// create a new Sprite from an image path
const sprite = new Sprite([0, 0], building);
sprite.show(map.container);
