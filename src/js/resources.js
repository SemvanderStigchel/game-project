import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import playerImage from '../images/Antwanrun.png'

const Resources = {
    Antwan: new ImageSource(playerImage)
}
const ResourceLoader = new Loader([Resources.Antwan]);

export { Resources, ResourceLoader }