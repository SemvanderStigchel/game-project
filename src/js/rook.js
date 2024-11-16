import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from './resources.js';

export class Rook extends Actor {
    constructor() {
        super({width: Resources.Rook.width, height: Resources.Rook.height});
        this.graphics.use(Resources.Rook.toSprite());
        this.pos = new Vector(2000, 540);
        this.vel = new Vector(-1100,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.killActor();
        }
    }

    killActor () {
        this.kill();
    }
}