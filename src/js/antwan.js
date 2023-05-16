import {Actor, Input, Vector, SpriteSheet, Random, Animation, range} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class Antwan extends Actor {
    constructor() {
        super({width: Resources.Antwan.width, height: Resources.Antwan.height});
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Antwan,
            grid: {rows: 1, columns: 7, spriteWidth: 170, spriteHeight: 250},
        });
        console.log(runSheet.sprites);
        const run = Animation.fromSpriteSheet(runSheet, range(0, 6), 80);

        this.graphics.add("run", run);
        this.graphics.use(run);
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.pos = new Vector(200, 620);
    }

    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.jump();
        }
    }

    jump() {
        this.vel = new Vector(0, -1000);
    }

}