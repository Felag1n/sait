import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
import PlayButton from './PlayButton'; 

export default function AlbumPage() {
  const { id } = useParams();
  const albumId = +id;

  const [songs, setSongs] = useState([]);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumResponse = await axios.get(`http://localhost:1337/api/albums/${albumId}?populate=*`);
        const albumData = albumResponse.data.data.attributes;
        setDescription(albumData.description);

        const songPromises = albumData.songs.data.map(async (rawSong) => {
          const songResponse = await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`);
          const song = songResponse.data.data;
          const songAttributes = song.attributes;

          return {
            id: rawSong.id,
            name: songAttributes.Name,
            cover: `http://localhost:1337${songAttributes.Cover.data[0].attributes.url}`,
            songUrl: songAttributes.SongUrl, 
          };
        });

        const resolvedSongs = await Promise.all(songPromises);
        setSongs(resolvedSongs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [albumId]);

  const setSongAtStore = (songUrl) => {
    
    console.log("Playing song:", songUrl);
  };

  return (
    <>
      <div className="text-container album-content">
        <Markdown>{description}</Markdown>
      </div>
      <div className="group-album">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id} className="song-link">
            <div className="box album">
              <img className="image" src={song.cover} alt={song.name} />
              <div className="play-button">
                <PlayButton
                  onClick={(e) => {
                    e.preventDefault(); 
                    setSongAtStore(song.songUrl);
                  }}
                />
              </div>
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
