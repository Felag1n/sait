import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Alternative() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:1337/api/genres/1?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Альтернатива (англ. Alternative)</h1>
        <p>Музыкальное направление, имеющие общие черты с indie, britpop, shoegaze, post-grunge, garage и punk. 
          Изначально альтернатива задумывалась как альтернатива (отсюда и название) всем существующим стилям, 
          но за время своего существования образовались свои особенности.</p>
        <p>Флагманами стиля были английские группы. Альтернатива достигла расцвета популярности на рубеже XX и XXI веков.</p>
      </div>
      <div className="group-alternative">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box alternative">
              <img className="Image" src={song.cover}  />
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}