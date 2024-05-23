import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Electronic() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/3?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Электро́нная музыка (от англ. Electronic music)</h1>
        <p>
          Широкий жанр, обозначающий музыку, созданную с использованием электронных музыкальных инструментов 
          и электронного оборудования. Хотя первые электронные инструменты появились ещё в начале XX вв., 
          электронная музыка как жанр развилась во второй половине XX в., и на начало XXI в. включает десятки разновидностей.
        </p>
      </div>
      <div className="group-electronic">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box electronic" >
              <img className="Image" src={song.cover} alt={song.name} />
              
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
