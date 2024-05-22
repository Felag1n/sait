import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Rap() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/8?populate=*");
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
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    })();
  }, []);

  return (
    <>
      <div className="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Рэп (англ. rap, rapping)</h1>
        <p>
          Также известное как рифмование (rhyming), фристайл (freestyling, или в просторечии spitting), эмсиинг (emceeing) или MC’инг (MCing, M.C.’ing) — музыкальная форма вокальной подачи,
          включающая в себя «рифму, ритмичную речь и уличный жаргон», которая исполняется или произносится нараспев различными способами, как правило, под фоновый бит или музыкальный аккомпанемент.
        </p>
        <p>
          Компоненты рэпа включают в себя «содержание» (то, что говорится), «флоу» (ритм, рифма) и «подачу» (каденция, тон).
          Рэп отличается от устной поэзии тем, что обычно исполняется под музыкальное сопровождение. Рэп — основной элемент хип-хоп-музыки, обычно ассоциируется именно с этим жанром и даже служит его метонимией;
          однако истоки рэпа на много лет предшествовали появлению хип-хоп-культуры.
        </p>
      </div>
      <div className="group-rap">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box rap" style={{ maxWidth: 150 }}>
              <img className="Image" src={song.cover} alt={song.name} />
              <div className="song-name">{song.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

