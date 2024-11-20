import {Vector, ScreenElement, Label, Font, FontUnit, Color} from "excalibur";

export class Ui extends ScreenElement {
    scoreText

    constructor() {
        super({ x: 10, y: 10 })
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Inca goudstukken verzameld: 0`,
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
        this.scoreText.text = `Inca goudstukken verzameld: ${score}`
    }
}