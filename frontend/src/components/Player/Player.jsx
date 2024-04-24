import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/player.scss'
const Player = () => (
  <AudioPlayer
  autoPlay
  src="/Manu_Chao_-_Me_gustas_tu_48056032.mp3"
  onPlay={e => console.log("onPlay")}
  /> 
);

export default Player
