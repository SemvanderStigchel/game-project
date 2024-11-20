import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from './Resources.js';

export class King extends Actor {
    constructor() {
        super({width: Resources.King.width, height: Resources.King.height});
        this.graphics.use(Resources.King.toSprite());
        this.pos = new Vector(2000, 530);
        this.vel = new Vector(-950,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.killActor();
        }
    }

    killActor () {
        this.kill();
    }
}