import '../css/style.css';
import {Actor, Engine, Physics, vec, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import {Antwan} from "./antwan.js";
import {Floor} from "./floor.js";
import {Background} from "./background.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1530, height: 745});
        this.start(ResourceLoader).then(() => this.startGame())
        Physics.useArcadePhysics();
        Physics.gravity = vec(0, 5000);
        this.showDebug(true);
        this.debug.transform.showAll = true;
    }

    startGame() {
        const fish = new Actor()
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)

        const background = new Background();
        this.add(background);

        const antwan = new Antwan();
        this.add(antwan);

        const floor = new Floor();
        this.add(floor);
    }
}

new Game()
