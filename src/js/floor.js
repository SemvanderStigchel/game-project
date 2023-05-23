import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType, Color} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Floor extends Actor {
    constructor() {
        super({width: 1530, height: 160});

         const floorSheet = SpriteSheet.fromImageSource({
             image: Resources.Floor,
             grid: {rows: 9, columns: 1, spriteWidth: 1530, spriteHeight:160},
         });
         console.log(floorSheet.sprites);
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