import {Actor, Vector, CollisionType, RotationType} from "excalibur";
import {Resources} from './resources.js';

export class Rock extends Actor {
    constructor() {
        super({width:Resources.Rock.width, height: Resources.Rock.height});
        this.graphics.use(Resources.Rock.toSprite());
        this.pos = new Vector(2000, 585);
        this.vel = new Vector(-1200,0);
        this.body.collisionType = CollisionType.Fixed;
        this.actions.rotateBy(100, 5, RotationType.CounterClockwise);
        if (this.pos.x < 0) {
            this.kill();
        }
    }
}