import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Pawn extends Actor {
    constructor() {
        super({width: Resources.Pawn.width, height: Resources.Pawn.height});
        this.graphics.use(Resources.Pawn.toSprite());
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