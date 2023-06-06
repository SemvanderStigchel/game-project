import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Knight extends Actor {
    constructor() {
        super({width: Resources.Knight.width, height: Resources.Knight.height});
        this.graphics.use(Resources.Knight.toSprite());
        this.pos = new Vector(2000, 530);
        this.vel = new Vector(-1400,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.killActor();
        }
    }

    killActor () {
        this.kill();
    }
}