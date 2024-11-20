import {
    Input,
    Vector,
    Scene,
    Label,
    Font, FontUnit, Color
} from "excalibur";
import {Background} from "./Background.js";
import {Floor} from "./Floor.js";

export class Startscreen extends Scene {
    title;
    subtitle;

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
            text: 'Thijs op Reis!',
            font: new Font({
                unit: FontUnit.Px,
                family: 'Impact',
                size: 100,
                color: Color.Black,
            }),
            pos: new Vector(400, 100)
        })
        this.add(this.title);

        this.subtitle = new Label({
            text: 'Druk op enter om te starten!',
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

    _preupdate(engine, delta) {
        super._preupdate(engine, delta);
        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            engine.goToScene('startgame');
        }
    }
}