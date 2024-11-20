import '../css/style.css';
import {Engine, Physics, vec} from "excalibur";
import {ResourceLoader} from './Resources.js';
import {Startgame} from "./Startgame.js";
import {Startscreen} from "./Startscreen.js";
import {Gameover} from "./Gameover.js";

export class Game extends Engine {
    constructor() {
        super({width: 1535, height: 730});
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
