import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrunspritesheet.png'

const Resources = {
    Antwan: new ImageSource(playerImage)
}
const ResourceLoader = new Loader([Resources.Antwan]);

export { Resources, ResourceLoader }