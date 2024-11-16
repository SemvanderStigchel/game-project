import { ImageSource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'
import floorImage from '../images/Floorspritesheet.png'
import backgroundImage from  '../images/background-game.webp'
import pawnImage from '../images/pawn.png'
import rookImage from '../images/rook.png'
import knightImage from '../images/knight.png'
import bishopImage from '../images/bishop.png'
import queenImage from '../images/queen.png'
import kingImage from '../images/king.png'
import goldPieceImage from '../images/inca-goudstuk.png'
import cactusImage from '../images/cactus.png'
import jungleFloorImage from '../images/jungle-floor.jpeg'

const Resources = {
    Player: new ImageSource(playerImage),
    Floor: new ImageSource(floorImage),
    Background: new ImageSource(backgroundImage),
    Pawn: new ImageSource(pawnImage),
    Rook: new ImageSource(rookImage),
    Knight: new ImageSource(knightImage),
    Bishop: new ImageSource(bishopImage),
    Queen: new ImageSource(queenImage),
    King: new ImageSource(kingImage),
    Collectable: new ImageSource(goldPieceImage),
    Cactus: new ImageSource(cactusImage),
    JungleFloor: new ImageSource(jungleFloorImage),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Floor,
    Resources.Background,
    Resources.Pawn,
    Resources.Rook,
    Resources.Knight,
    Resources.Bishop,
    Resources.Queen,
    Resources.King,
    Resources.Collectable,
    Resources.Cactus,
    Resources.JungleFloor,
]);

export { Resources, ResourceLoader }