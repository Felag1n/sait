// import { useCallback, useState, useRef } from 'react';
// import styles from './Player.module.css'

// function Player({ player }) {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [elapsedTime, setElapsedTime] = useState(0);
//     const [duration, setDuration] = useState(0);
//     const audioRef = useRef(null);

//     const handlePlayPause = () => {
//       setIsPlaying(!isPlaying);
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//         updateElapsedTime();
//       }
//     };

//     useCallback(() => {
//     }, [isPlaying])

//     const updateElapsedTime = () => {
//       setElapsedTime(audioRef.current.currentTime);

//       if (isPlaying) {
//         setTimeout(updateElapsedTime, 1000);
//         console.log('1');
//       }
//     };

//     const handleLoadedMetadata = (e) => {
//       setDuration(e.target.duration);
//     };


//     return (
//         <div className={styles.card}>
//         <div className="top">
//         <div className="pfp">
//           <div className="playing">
//             <div className={[styles.greenline, styles["line-1"]]}></div>
//             <div className="greenline line-2"></div>
//             <div className="greenline line-3"></div>
//             <div className="greenline line-4"></div>
//             <div className="greenline line-5"></div>
//           </div>
//         </div>
//         <div className="texts">
//         <p className="title-1">Soldiers Rage</p>
//         <p className="title-2">Tha Mechanic</p>
//         </div>
//         </div>

//         <div style={{ color: 'white' }}>
//           {isPlaying.toString()}
//         </div>
        
//         <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} src={player.songUrl}></audio>

//         <div className="controls">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="20" width="24" className="volume_button">
//         <path clipRule="evenodd" d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z" fillRule="evenodd"></path>
//           </svg>
//           <div className="volume">
//             <div className="slider">
//               <div className="green"></div>
//             </div>
//             <div className="circle"></div>
//           </div>
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
//         <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z" fillRule="evenodd"></path>
//       </svg>
//       <button onClick={handlePlayPause}>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
//           <path clipRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" fillRule="evenodd"></path>
//         </svg>
//       </button>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
//         <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z" fillRule="evenodd"></path>
//       </svg>
//       <div className="air"></div>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" height="20" width="24">
//         <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z"></path>
//       </svg>
//         </div>
//         <div className="time">
//           <div className="elapsed" style={{ width: `${duration === 0 ? 0 : elapsedTime / duration * 100}%` }}></div>
//         </div>
//         <p className="timetext time_now">{elapsedTime}</p>
//         <p className="timetext time_full">{duration}</p>
//       </div>
      
//     )
// }

// export default Player



// import React, { useState, useRef } from 'react';

// const Player = ({ player }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = useRef(null);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//       updateElapsedTime();
//     }
//   };

//   const updateElapsedTime = () => {
//     setElapsedTime(audioRef.current.currentTime);
//     if (isPlaying) {
//       setTimeout(updateElapsedTime, 1000);
//     }
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   const handleLoadedMetadata = (e) => {
//     setDuration(e.target.duration);
//   };

//   return (
//     <div className="player">
//       <div className="controls">
//         <button onClick={handlePlayPause}>
//           {isPlaying ? (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
//               <path d="M14 10h4v4h-4v-4zm-6 0h4v4h-4v-4zm12 0h4v4h-4v-4zM10 22c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V10h2v12zm12-12h-4v4h4v-4zM4 10h4v4H4V10zm12 0h4v4h-4V10z" />
//             </svg>
//           ) : (
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
//               <path d="M8 5v14l11-7Z" />
//             </svg>
//           )}
//         </button>
//         <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata} src={player.songUrl}></audio>
//         <div className="time">
//           <div className="elapsed">{formatTime(elapsedTime)}</div>
//         </div>
//         <p className="timetext time_now">{formatTime(elapsedTime)}</p>
//         <p className="timetext time_full">{formatTime(duration)}</p>
//       </div>
//       <div className="song-info">
//         <div className="texts">
//           <p className="title-1">{player.title1}</p>
//           <p className="title-2">{player.title2}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Player;