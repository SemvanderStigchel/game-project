import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from './resources.js';
import {Player} from "./Player.js";

export class Collectable extends Actor {
    constructor() {
        super({width: 100, height: 100});
        this.graphics.use(Resources.Collectable.toSprite());
        this.pos = new Vector(2000, 495);
        this.vel = new Vector(-1000,0);
        this.body.collisionType = CollisionType.Passive;
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        this.on("collisionstart", (event) => this.hitPlayer(event));
    }

    hitPlayer(event) {
        if(event.other instanceof Player) {
            this.scene.addPoint();
            this.kill();
        }
    }
}