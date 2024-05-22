import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function HipHop() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/4?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Хип-хоп-музыка (англ. hip hop)</h1>
        <p>
          Музыкальный жанр популярной музыки, развитый в США в 1970-х годах афроамериканцами, 
          латиноамериканцами и американцами стран Карибского бассейна, живущими в бедных районах Бронкса 
          в Нью-Йорке. Хип-хоп-музыка состоит из стилизованной ритмичной музыки, которая обычно
          сопровождается рэпом, ритмичной и рифмованной речью, которую произносят нараспев.
        </p>
        <p>
          Хип-хоп-музыка развивалась как часть хип-хоп-культуры, субкультуры, определяемой четырьмя
          ключевыми стилистическими элементами: эмсиинг/исполнение рэпа, диджеинг/скретчинг с помощью
          виниловых проигрывателей, брейк-данс и рисование граффити. Другие элементы включают семплирование
          битов или басовых линий из записей (или синтезированных битов и звуков) и ритмичный битбокс.
        </p>
      </div>
      <div className="group-hiphop">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box hiphop" style={{ maxWidth: 150 }}>
              <img className="Image" src={song.cover} alt={song.name} />
              <div className="song-name">{song.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
