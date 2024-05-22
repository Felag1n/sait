import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BOs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:1337/api/genres/9?populate=*");
      const songs = response.data.data.attributes.songs.data;

      const songPromises = songs.map(async (rawSong) => {
        const songResponse = await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`);
        const song = songResponse.data.data;
        const songAttributes = song.attributes;

        return {
          id: rawSong.id,
          name: songAttributes.Name,
          cover: 'http://localhost:1337' + songAttributes.Cover.data[0].attributes.url
        };
      });

      const resolvedSongs = await Promise.all(songPromises);
      setSongs(resolvedSongs);
    })();
  }, []);

  return (
    <>
      <div className="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Музыка 80-х</h1>
        <p>Сюда относится вся музыка, выпущенная в период времени с 1 января 1980 по 31 декабря 1989.</p>
      </div>

      <div className="group-bos">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box bos" style={{ maxWidth: 150 }}>
              <img className="Image" src={song.cover} alt={song.name} />
              <div className="song-name">{song.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
