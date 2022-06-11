import { Application, Container } from "pixi.js";
import { subVec2, Vec2 } from "../lib/math";

export class Map {
  app: Application;
  container: Container;

  lastDragEvent: Vec2 = [0, 0];
  currentDragEvent: Vec2 = [0, 0];
  skipOnce = false;

  listener = (e) => this.onDragMove(e);

  private onDragStart() {
    this.app.stage.addEventListener('pointermove', this.listener);
    this.skipOnce = true;
  }

  private onDragMove(e) {
    this.currentDragEvent = [e.data.global.x, e.data.global.y];
    if (!this.skipOnce) {
      const delta = subVec2(this.currentDragEvent, this.lastDragEvent);
      this.container.x += delta[0];
      this.container.y += delta[1];
    } else {
      this.skipOnce = false;
    }
    this.lastDragEvent = this.currentDragEvent;
  }

  private onDragEnd() {
    this.app.stage.removeEventListener('pointermove', this.listener);
    this.lastDragEvent = [0, 0];
    this.currentDragEvent = [0, 0];
  }

  constructor(app: Application) {
    const container = new Container();
    container.x = app.screen.width / 2;
    container.y = app.screen.height / 2;
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    
    app.stage.interactive = true;
    app.stage.hitArea = app.renderer.screen;

    this.app = app;
    this.container = container;

    this.app.stage.addEventListener('pointerdown', () => this.onDragStart());
    this.app.stage.addEventListener('pointerup', () => this.onDragEnd());
    this.app.stage.addEventListener('pointerupoutside', () => this.onDragEnd());
  
    app.stage.addChild(this.container);
  }
}
