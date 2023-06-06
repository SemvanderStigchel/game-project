import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType, Timer} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';
import {Antwan} from "./antwan.js";
import {UI} from "./ui.js";

export class Pk extends Actor {
    constructor() {
        super({width: Resources.Pk.width, height: Resources.Pk.height});
        this.graphics.use(Resources.Pk.toSprite());
        this.pos = new Vector(2000, 495);
        this.vel = new Vector(-1000,0);
        this.body.collisionType = CollisionType.Passive;
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        this.on("collisionstart", (event) => this.hitAntwan(event, engine));
    }

    hitAntwan(event, engine) {
        if(event.other instanceof Antwan) {
            this.scene.addPoint();
            this.kill();
        }
    }
}