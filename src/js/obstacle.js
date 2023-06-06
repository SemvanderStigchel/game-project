import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType, Engine, Timer} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';
import {Pawn} from "./pawn.js";
import {King} from "./king.js";
import {Rook} from "./rook.js";
import {Queen} from "./queen.js";
import {Bishop} from "./bishop.js";
import {Knight} from "./knight.js";

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

    removeAllObstacles() {
        this.removeAllChildren();
    }

    spawn(engine) {
        this.randomNumber = Math.random() * 100;
        if (this.randomNumber < 20) {
            this.obstacle = new Queen();
        } else if (this.randomNumber < 40) {
            this.obstacle = new Rook();
        } else if (this.randomNumber < 60) {
            this.obstacle = new Bishop();
        } else if (this.randomNumber < 80) {
            this.obstacle = new Knight();
        } else if (this.randomNumber < 100) {
            this.obstacle = new King();
        }
        engine.currentScene.add(this.obstacle);
    }
}