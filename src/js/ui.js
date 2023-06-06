import {Actor, Input, Vector, SpriteSheet, Random, Animation, range, CollisionType, ScreenElement, Label, Font, FontUnit, Color} from "excalibur";
import {Resources, ResourceLoader} from './resources.js';

export class UI extends ScreenElement {
    scoreText

    constructor() {
        super({ x: 10, y: 10 })
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Puntkomma's gered: 0`,
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(600, 100)
        })
        this.addChild(this.scoreText)

    }

    updateScore(score) {
        this.scoreText.text = `Puntkomma's gered: ${score}`
    }
}