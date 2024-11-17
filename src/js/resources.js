import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'
import floorImage from '../images/Floorspritesheet.png'
import backgroundImage from  '../images/background-game.webp'
import queenImage from '../images/queen.png'
import kingImage from '../images/king.png'
import goldPieceImage from '../images/inca-goudstuk.png'
import cactusImage from '../images/Cactus.png'
import rockImage from '../images/rock.png'
import birdSpriteSheet from '../images/BirdFlyingSpriteSheet.png'
import jungleFloorSpriteSheet from '../images/JungleFloorSpriteSheet.png'

const Resources = {
    Player: new ImageSource(playerImage),
    Floor: new ImageSource(floorImage),
    Background: new ImageSource(backgroundImage),
    Queen: new ImageSource(queenImage),
    King: new ImageSource(kingImage),
    Collectable: new ImageSource(goldPieceImage),
    Cactus: new ImageSource(cactusImage),
    Rock: new ImageSource(rockImage),
    Bird: new ImageSource(birdSpriteSheet),
    JungleFloor: new ImageSource(jungleFloorSpriteSheet),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Floor,
    Resources.Background,
    Resources.Queen,
    Resources.King,
    Resources.Collectable,
    Resources.Cactus,
    Resources.Rock,
    Resources.Bird,
    Resources.JungleFloor,
]);

export { Resources, ResourceLoader }