import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType, Timer} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';
import {Pk} from "./pk.js";

export class pkSpawner extends Actor {
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
        this.pk = new Pk();
        engine.currentScene.add(this.pk);
    }
}