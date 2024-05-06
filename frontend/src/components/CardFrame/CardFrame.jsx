import styles from './CardFrame.module.css'
import PlayerButton from "../PlayerButton/PlayerButton"
function CardFrame(props) {
  return (
    <div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.back}>
    <div className={styles['back-content']}>
          <img src="/artem.jpg" style={{display: 'block', width: '100%', height: '100%', objectFit: 'cover', position: 'absolute'}} />
        <strong></strong>
      </div>
    </div>
    <div className={styles.front}>
      
      <div className={styles.img}>
        <div className={styles.circle}>
        </div>
        <div className={styles.circle} id={styles.right}>
        </div>
        <div className={styles.circle} id={styles.bottom}>
        </div>
      </div>
      
      <div className={styles['front-content']}>
        <small className={styles.badge}></small>
        <div className={styles.description}>
          <div className={styles.title}>
            <p className={styles.title}>
              <strong></strong>
            </p>
            <svg fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              {/* <g transform="scale(8,8)" style="mix-blend-mode: normal" textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset="0" strokeDasharray="" strokeMiterlimit="10" strokeLinejoin="miter" strokeLinecap="butt" strokeWidth="1" stroke="none" fillRule="nonzero" fill="#20c997"> */}
                  <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
              {/* </g> */}
            </svg>
          </div>
          <p className={styles['card-footer']}>
            30 Mins &nbsp; | &nbsp; 1 Serving
          </p>
          <PlayerButton/>
        </div>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default CardFrame

// <img src="" style="display: block; width: 100%; height: 100%; object-fit: cover;">