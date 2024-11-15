import {Actor, Random, Timer} from "excalibur";
import {Collectable} from "./Collectable.js";

export class collectableSpawner extends Actor {
    pk;

    constructor() {
        super();
        this.random = new Random(1337);
    }

    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.timer = new Timer({
            fcn: () => this.spawn(_engine),
            interval: this.random.integer(500, 2000),
            repeats: true
        })
        _engine.currentScene.add(this.timer);
        this.timer.start();
    }


    spawn(engine) {
        this.pk = new Collectable();
        engine.currentScene.add(this.pk);
    }
}