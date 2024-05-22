import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../assets/css/player.scss'
import { usePlayerStore } from '../../store/playerStore';
const Player = () => {
  const songUrl = usePlayerStore((state) => state.songUrl)

  return <AudioPlayer
    autoPlay
    src={songUrl}
    onPlay={e => console.log("onPlay")}
  /> 
};

export default Player
