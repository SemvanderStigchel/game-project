import '../css/style.css';
import {Actor, Engine, Physics, vec, Vector} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';
import {Antwan} from "./antwan.js";
import {Floor} from "./floor.js";
import {Background} from "./background.js";
import {pkSpawner} from "./pkSpawner.js";
import {Obstacle} from "./obstacle.js";
import {UI} from "./ui.js";
import {Startgame} from "./startgame.js";
import {Startscreen} from "./startscreen.js";
import {Gameover} from "./gameover.js";

export class Game extends Engine {
    constructor() {
        super({width: 1530, height: 745});
        this.start(ResourceLoader).then(() => this.startGame())
        Physics.useArcadePhysics();
        Physics.gravity = vec(0, 5000);
        // this.showDebug(true);
        // this.debug.transform.showAll = true;
    }

    startGame() {
        this.addScene('startscreen', new Startscreen());
        this.addScene('startgame', new Startgame());
        this.addScene('gameover', new Gameover());

        this.goToScene('startscreen');

    }
}

new Game()
