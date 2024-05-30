import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import PlayButton from '../components/PlayerButton/PlayButton';

export default function AlbumPage() {
  const albumId = +useParams().id;

  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumResponse = await axios.get(`http://localhost:1337/api/albums/${albumId}?populate=*`);
        const albumData = albumResponse.data.data.attributes;

        setAlbum({
          id: albumResponse.data.data.id,
          name: albumData.Name,
        });

        const songPromises = albumData.songs.data.map(async (rawSong) => {
          const songResponse = await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`);
          const song = songResponse.data.data;
          const songAttributes = song.attributes;

          return {
            id: rawSong.id,
            name: songAttributes.Name,
            coverUrl: `http://localhost:1337` + albumData.Cover.data.attributes.url,
            songUrl: "http://localhost:1337" + songAttributes.SongUrl, 
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
      {/* <div className="text-container album-content">
        <Markdown>{description}</Markdown>
      </div> */}
      {album !== null && (
        <div>
          <h1 style={{ color: 'rgb(80, 10, 67)' }}>{album.name}</h1>
          
          <div>
            <div className="group-album">
              {songs.map((song) => (
                <Link to={`/song/${song.id}`} key={song.id} className="song-link">
                  <div className="box album">
                    <img className="image" src={song.coverUrl} alt={song.name} />
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
          </div>
        </div>
      )}
      {/* <div className="group-album">
        
      </div> */}
    </>
  );
}
