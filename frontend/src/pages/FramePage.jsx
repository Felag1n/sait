import styles from "../components/Body/FrameBody.module.css";
import CardFrame from "../components/CardFrame/CardFrame";
import LikeButton from "../components/LikeButton/LikeButton";
import PlayerButton from "../components/PlayerButton/PlayerButton"
export default function FramePage(props) {
    return(
      <>
      <div className="text-container-frames"> 
      <h1 className={`${styles.h1} new-rocker-regular ${props.className || ''}`}>Название</h1>
      </div>
         <div style={{ marginTop: 60, display: 'flex', justifyContent: 'flex-end', marginInline: 100 }}>
         <CardFrame/>
         </div>
         <div>
          <LikeButton/>
         </div>
         <div>
          <PlayerButton/>
         </div>
      </>
      
    );
    
  }
  
