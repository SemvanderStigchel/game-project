import {Actor, Input, Vector, SpriteSheet, Animation, range, CollisionType} from "excalibur";
import {Resources} from './Resources.js';
import {Floor} from "./Floor.js";

export class Player extends Actor {
    grounded;

    constructor() {
        super({width: 120, height: 250});
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: {rows: 1, columns: 7, spriteWidth: 170, spriteHeight: 250},
        });
        const run = Animation.fromSpriteSheet(runSheet, range(0, 6), 80);

        this.graphics.add("run", run);
        this.graphics.use(run);
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = true;
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.pos = new Vector(200, 550);

        this.on("collisionstart", (evt) => {
            if(evt.other instanceof Floor) {
                this.grounded = true;
            }
        });
    }

    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.grounded) {
            this.jump();
        }
    }

    _postupdate(engine, delta) {
        super._postupdate(engine, delta);
        if (this.body.pos.x < 0) {
            this.kill();
        }
    }

    jump() {
        this.vel = new Vector(0, -2000);
        this.grounded = false;
    }

}