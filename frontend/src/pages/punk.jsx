import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Punk() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/genres/7?populate=*");
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
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif', color: "black" }}>Панк (англ. Punk) — субкультура</h1>
        <p>
          Возникшая в конце 1960-х - начале 1970-х годов в Великобритании, США, Канаде и Австралии.</p>
        <p>  На данный момент делится на стрит-панк, краст-панк, анархо-панк и просто панк, объединяющий в себе элементы всех подвидов движения.
        </p>
        <p>
          Панк берёт своё начало в 1960-х годах, когда под влиянием The Beatles и The Rolling Stones стало появляться много молодёжных команд,</p>
        <p>исполняющих рок-н-ролл. </p>
        <p>  Родителями панка такого, каков он есть, была нью-йоркская группа The Ramones.</p>
        <p> Они первые начали классифицировать себя как панков, создали внешний стиль и стиль игры.</p>
      </div>
      <div className="group-punk">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box punk">
              <img className="Image" src={song.cover}  />
             
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
 