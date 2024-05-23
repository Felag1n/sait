import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Jazz() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/5?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Джаз (англ. Jazz)</h1>
        <p>
          Это направление в музыке, которое возникло в США в самом начале XX века.
        </p>
        <p>
          В нем тесно переплетаются ритмы, обрядовые песнопения и рабочие песни афроамериканцев,
          а также гармоническая составляющая, присущая музыке белых переселенцев. Другими словами,
          это импровизационный жанр, появившийся в результате смешивания западноевропейской и западноафриканской музыки.
        </p>
      </div>
      <div className="group-jazz">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box jazz">
              <img className="Image" src={song.cover}  />

            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}