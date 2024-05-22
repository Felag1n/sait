import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Pop() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/6?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Поп-музыка (англ. pop music от popular music)</h1>
        <p>
          Область массовой культуры, охватывающая различные формы, жанры и стили развлекательной и прикладной музыки 2-й половины XX — начала XXI веков.
        </p>
        <p>
          Основные черты поп-музыки — простота инструментальной части, ритмичность, акцент на вокал. Основная и практически единственная форма композиции в поп-музыке — песня.
        </p>
      </div>
      <div className="group-pop">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box pop" style={{ maxWidth: 150 }}>
              <img className="Image" src={song.cover} alt={song.name} />
              <div className="song-name">{song.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}


