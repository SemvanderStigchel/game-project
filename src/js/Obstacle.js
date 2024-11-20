import {Actor, Random, Timer} from "excalibur";
import {Cactus} from "./Cactus.js";
import {Rock} from "./Rock.js";
import {Bird} from "./Bird.js";
import {Lama} from "./Lama.js";

export class Obstacle extends Actor{
    obstacle;
    randomNumber;

    constructor() {
        super();
        this.random = new Random(1337);
    }
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.timer = new Timer({
            fcn: () => this.spawn(_engine),
            interval: this.random.integer(1000, 2000),
            repeats: true
        })
        _engine.currentScene.add(this.timer);
        this.timer.start();

    }

    spawn(engine) {
        this.randomNumber = this.getRandomInt(0, 80);
        if (this.randomNumber < 20) {
            this.obstacle = new Bird();
        } else if (this.randomNumber < 40) {
            this.obstacle = new Cactus();
        } else if (this.randomNumber < 60) {
            this.obstacle = new Rock();
        } else if (this.randomNumber < 80) {
            this.obstacle = new Lama();
        }
        engine.currentScene.add(this.obstacle);
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

}