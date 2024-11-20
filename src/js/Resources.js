import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'
import backgroundImage from  '../images/background-game.webp'
import goldPieceImage from '../images/inca-goudstuk.png'
import cactusImage from '../images/Cactus.png'
import rockImage from '../images/rock.png'
import birdSpriteSheet from '../images/BirdFlyingSpriteSheet.png'
import jungleFloorSpriteSheet from '../images/JungleFloorSpriteSheet.png'
import lamaSpriteSheet from '../images/LamaSpriteSheet.png'

const Resources = {
    Player: new ImageSource(playerImage),
    Background: new ImageSource(backgroundImage),
    Collectable: new ImageSource(goldPieceImage),
    Cactus: new ImageSource(cactusImage),
    Rock: new ImageSource(rockImage),
    Bird: new ImageSource(birdSpriteSheet),
    JungleFloor: new ImageSource(jungleFloorSpriteSheet),
    Lama: new ImageSource(lamaSpriteSheet),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Background,
    Resources.Collectable,
    Resources.Cactus,
    Resources.Rock,
    Resources.Bird,
    Resources.JungleFloor,
    Resources.Lama,
]);

export { Resources, ResourceLoader }