import '../css/style.css';
import {Actor, Engine, Physics, Vector} from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import {Antwan} from "./antwan.js";

export class Game extends Engine {

    constructor() {
        super({ width: 1530, height: 745});
        this.start(ResourceLoader).then(() => this.startGame())
        Physics.useArcadePhysics();
    }

    startGame() {
        const fish = new Actor()
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)

        const antwan = new Antwan();
        this.add(antwan);
    }
}

new Game()
