import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Bishop extends Actor {
    constructor() {
        super({width: Resources.Bishop.width, height: Resources.Bishop.height});
        this.graphics.use(Resources.Bishop.toSprite());
        this.pos = new Vector(2000, 515);
        this.vel = new Vector(-900,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.killActor();
        }
    }

    killActor () {
        this.kill();
    }
}