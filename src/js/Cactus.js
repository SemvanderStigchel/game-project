import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from './Resources.js';

export class Cactus extends Actor {
    constructor() {
        super({width: 200, height: 300});
        this.graphics.use(Resources.Cactus.toSprite());
        this.pos = new Vector(2000, 540);
        this.vel = new Vector(-900,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.kill();
        }
    }
}