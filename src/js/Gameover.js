import {
    Input,
    Vector,
    Scene,
    Label,
    Font, FontUnit, Color
} from "excalibur";
import {Background} from "./Background.js";
import {Floor} from "./Floor.js";

export class Gameover extends Scene {
    title;
    subtitle;
    overallScore;

    constructor() {
        super();
        const background = new Background();
        this.add(background);

        const floor = new Floor();
        this.add(floor);
    }

    onInitialize(engine) {
        super.onInitialize(engine);
        this.title = new Label({
            text: 'Game Over',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 75,
                color: Color.Black,
            }),
            pos: new Vector(400, 100)
        })
        this.add(this.title);

        this.subtitle = new Label({
            text: 'Druk op enter om het opnieuw te proberen!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 28,
                color: Color.Black,
            }),
            pos: new Vector(400, 600)
        })
        this.subtitle.actions.blink(800, 100, 10000);
        this.add(this.subtitle);
    }

    onActivate(context) {
        super.onActivate(context);
        if (context.data) {
            this.overallScore = new Label({
                text: `Inca goudstukken verzameld: ${context.data.score}`,
                font: new Font({
                    unit: FontUnit.Px,
                    family: 'Impact',
                    size: 28,
                    color: Color.Black,
                }),
                pos: new Vector(400, 400)
            })
            this.add(this.overallScore);
        }
    }

    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            this.overallScore.kill();
            engine.goToScene('startscreen');
        }
    }
}