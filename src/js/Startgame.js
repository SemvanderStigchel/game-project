import {
    Scene,
} from "excalibur";
import {Background} from "./Background.js";
import {Floor} from "./Floor.js";
import {Player} from "./Player.js";
import {collectableSpawner} from "./CollectableSpawner.js";
import {Obstacle} from "./Obstacle.js";
import {Ui} from "./Ui.js";

export class Startgame extends Scene {
    ui;
    player;
    obstacle;
    collectable;
    background;
    floor;
    score = 0;

    constructor() {
        super();
        this.background = new Background();
        this.add(this.background);

        this.floor = new Floor();
        this.add(this.floor);

        this.collectable = new collectableSpawner();
        this.add(this.collectable);

        this.obstacle = new Obstacle();
        this.add(this.obstacle);

        this.ui = new Ui();
        this.add(this.ui);
    }

    onActivate(_context) {
        this.player = new Player();
        this.add(this.player);
        this.score = 0;
    }

    addPoint() {
        this.score++
        this.ui.updateScore(this.score)
    }

    _postupdate(engine, delta) {
        super._postupdate(engine, delta);
        if (this.player.isKilled()) {
            engine.goToScene('gameover', {score: this.score});
        }
    }
}