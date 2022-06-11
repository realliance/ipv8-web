import { Vec2 } from "./math";
import { Sprite as PIXISprite, SpriteSource, Container } from 'pixi.js';

export class Sprite {
  pixiSprite: PIXISprite;

  constructor([x, y]: Vec2, texture: SpriteSource) {
    const sprite = PIXISprite.from(texture);
    sprite.x = x;
    sprite.y = y;

    this.pixiSprite = sprite;
  }

  show(container: Container) {
    container.addChild(this.pixiSprite);
  }

  hide(container: Container) {
    container.removeChild(this.pixiSprite);
  }
}
