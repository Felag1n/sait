import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Charts() {
  const [songs, setSongs] = useState([])
 
  useEffect(() => {
    (async () => {
      const responce = (await axios.get('http://localhost:1337/api/chart?populate=*')).data
 
      const songs = responce.data.attributes.songs.data
 
      const songsPromises = songs.map(async (rawSong) => {
        const song = (await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`)).data.data
 
        return {
          coverUrl: "http://localhost:1337" + song.attributes.Cover.data[0].attributes.url,
          songUrl: "http://localhost:1337" + song.attributes.Song.data.attributes.url,
          name: song.attributes.Name,
          id: rawSong.id,
        }
      })
 
      Promise.all(songsPromises).then(setSongs)
    })()
  }, [])
 
    return (
        <>
        <h1 style={{ textAlign: "center", color: "white" }}>Чарты</h1>
       <div className="group-charts">
        {songs.map((song, index) => (
          <Link to="/page" key={index}>
            <div className="box-charts" style={{maxWidth: 400, marginLeft: '610px'  }}>
              <img  
                className="Image"
                src={song.coverUrl}
                alt={song.name}
              />
            
            </div>
          </Link>
        ))}
        </div>
        </>
    );
}

