import {Actor, Vector, CollisionType} from "excalibur";
import {Resources} from './resources.js';
import {Player} from "./Player.js";

export class Collectable extends Actor {
    constructor() {
        super({width: Resources.Pk.width, height: Resources.Pk.height});
        this.graphics.use(Resources.Pk.toSprite());
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