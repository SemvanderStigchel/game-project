import {Actor, Input, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';

export class Antwan extends Actor {
    constructor() {
        super({width: Resources.Antwan.width, height: Resources.Antwan.height});
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.graphics.use(Resources.Antwan.toSprite());
        this.pos = new Vector(50, 625);
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