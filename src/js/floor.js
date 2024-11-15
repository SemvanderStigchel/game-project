import {Actor, Vector, SpriteSheet, Animation, range, CollisionType} from "excalibur";
import {Resources} from './resources.js';

export class Floor extends Actor {
    constructor() {
        super({width: 1535, height: 160});

         const floorSheet = SpriteSheet.fromImageSource({
             image: Resources.Floor,
             grid: {rows: 9, columns: 1, spriteWidth: 1530, spriteHeight:160},
         });
        const floor = Animation.fromSpriteSheet(floorSheet, range(0, 12), 80);

        this.graphics.add("floor", floor);
        this.graphics.use(floor);
        this.body.collisionType = CollisionType.Fixed;
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.pos = new Vector(765, 705);
    }
}