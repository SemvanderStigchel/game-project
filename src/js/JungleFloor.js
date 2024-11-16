import {Actor, Vector, GraphicsGroup, CollisionType} from 'excalibur'
import { Resources } from './resources.js'


export class JungleFloor extends Actor {
    offset

    constructor() {
        super({width: 4000, height: 160});
    }

    onInitialize(engine){
        const spaceImage = Resources.JungleFloor.toSprite()
        this.offset = spaceImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: spaceImage,
                    pos: new Vector(765, 705),
                },
                {
                    graphic: spaceImage,
                    pos: new Vector(spaceImage.width, 705),
                }
            ]
        })

        this.graphics.anchor = new Vector(0, 0);
        this.graphics.add(group);
        this.pos = new Vector(765, 705);
        this.vel = new Vector(-1000, 0);
        this.body.collisionType = CollisionType.Fixed;
    }

    onPostUpdate(engine, delta) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(765, 705)
        }
    }
}