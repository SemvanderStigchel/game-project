import {Actor, Vector, CollisionType, SpriteSheet, Animation, range} from "excalibur";
import {Resources} from './Resources.js';

export class Bird extends Actor {
    constructor() {
        super({width: 111, height: 76});
        const flySheet = SpriteSheet.fromImageSource({
            image: Resources.Bird,
            grid: {rows: 1, columns: 9, spriteWidth: 111, spriteHeight: 76},
        });
        const fly = Animation.fromSpriteSheet(flySheet, range(0, 8), 80);

        this.graphics.add("fly", fly);
        this.graphics.use(fly);
        this.pos = new Vector(2000, 500);
        this.vel = new Vector(-1300,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.kill();
        }
    }
}