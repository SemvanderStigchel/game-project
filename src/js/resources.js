import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'
import floorImage from '../images/Floorspritesheet.png'
import backgroundImage from  '../images/Backgroundimage.png'
import pawnImage from '../images/pawn.png'
import rookImage from '../images/rook.png'
import knightImage from '../images/knight.png'
import bishopImage from '../images/bishop.png'
import queenImage from '../images/queen.png'
import kingImage from '../images/king.png'
import pkImage from '../images/puntkomma.png'

const Resources = {
    Antwan: new ImageSource(playerImage),
    Floor: new ImageSource(floorImage),
    Background: new ImageSource(backgroundImage),
    Pawn: new ImageSource(pawnImage),
    Rook: new ImageSource(rookImage),
    Knight: new ImageSource(knightImage),
    Bishop: new ImageSource(bishopImage),
    Queen: new ImageSource(queenImage),
    King: new ImageSource(kingImage),
    Pk: new ImageSource(pkImage)
}
const ResourceLoader = new Loader([
    Resources.Antwan,
    Resources.Floor,
    Resources.Background,
    Resources.Pawn,
    Resources.Rook,
    Resources.Knight,
    Resources.Bishop,
    Resources.Queen,
    Resources.King,
    Resources.Pk
]);

export { Resources, ResourceLoader }