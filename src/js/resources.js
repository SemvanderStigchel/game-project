import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'
import floorImage from '../images/Floorspritesheet.png'
import backgroundImage from  '../images/Backgroundimage.png'

const Resources = {
    Antwan: new ImageSource(playerImage),
    Floor: new ImageSource(floorImage),
    Background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([Resources.Antwan, Resources.Floor, Resources.Background]);

export { Resources, ResourceLoader }