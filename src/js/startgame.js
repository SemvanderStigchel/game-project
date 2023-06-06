import {
    Actor,
    Input,
    Vector,
    SpriteSheet,
    Random,
    Animation,
    range,
    CollisionType,
    Scene,
    Label,
    Font, FontUnit, Color
} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';
import {Background} from "./background.js";
import {Floor} from "./floor.js";
import {Antwan} from "./antwan.js";
import {pkSpawner} from "./pkSpawner.js";
import {Obstacle} from "./obstacle.js";
import {UI} from "./ui.js";

export class Startgame extends Scene {
    ui;
    antwan;
    obstacle;
    pk;
    background;
    floor;
    score = 0;

    constructor() {
        super();
        this.background = new Background();
        this.add(this.background);

        this.floor = new Floor();
        this.add(this.floor);

        this.pk = new pkSpawner();
        this.add(this.pk);

        this.obstacle = new Obstacle();
        this.add(this.obstacle);

        this.ui = new UI();
        this.add(this.ui);
    }

    onActivate(_context) {
        this.antwan = new Antwan();
        this.add(this.antwan);
        this.obstacle.removeAllObstacles();
        this.score = 0;

    }

    addPoint() {
        this.score++
        this.ui.updateScore(this.score)
    }

    _postupdate(engine, delta) {
        super._postupdate(engine, delta);
        if (this.antwan.isKilled()) {
            engine.goToScene('gameover', {score: this.score});
        }
    }
}