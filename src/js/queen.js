import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Queen extends Actor {
    constructor() {
        super({width: Resources.Queen.width, height: Resources.Queen.height});
        this.graphics.use(Resources.Queen.toSprite());
        this.pos = new Vector(2000, 495);
        this.vel = new Vector(-1200,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.killActor();
        }
    }

    killActor () {
        this.kill();
    }
}