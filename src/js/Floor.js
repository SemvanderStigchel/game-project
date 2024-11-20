import {Actor, Vector, SpriteSheet, Animation, range, CollisionType} from "excalibur";
import {Resources} from './Resources.js';

export class Floor extends Actor {
    constructor() {
        super({width: 1535, height: 65});

         const floorSheet = SpriteSheet.fromImageSource({
             image: Resources.JungleFloor,
             grid: {rows: 13, columns: 1, spriteWidth: 1640, spriteHeight:65},
         });
        const floor = Animation.fromSpriteSheet(floorSheet, range(0, 12), 80);

        this.graphics.add("floor", floor);
        this.graphics.use(floor);
        this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.pos = new Vector(765, 720);
    }
}