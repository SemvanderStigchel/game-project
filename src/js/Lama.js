import {Actor, Vector, CollisionType, SpriteSheet, Animation, range} from "excalibur";
import {Resources} from './Resources.js';

export class Lama extends Actor {
    constructor() {
        super({width: 190, height: 250});
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Lama,
            grid: {rows: 1, columns: 7, spriteWidth: 267, spriteHeight: 250},
        });
        const run = Animation.fromSpriteSheet(runSheet, range(0, 8), 80);

        this.graphics.add("run", run);
        this.graphics.use(run);
        this.pos = new Vector(2000, 570);
        this.vel = new Vector(-1100,0);
        this.body.collisionType = CollisionType.Fixed;
        if (this.pos.x < 0) {
            this.kill();
        }
    }
}