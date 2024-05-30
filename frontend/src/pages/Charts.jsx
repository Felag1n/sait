import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Charts() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/chart?populate=*&pagination[pageSize]=30');
        const songsData = response.data.data.attributes.songs.data;

        const songsPromises = songsData.map(async (rawSong) => {
          const songResponse = await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`);
          const song = songResponse.data.data;

          return {
            coverUrl: "http://localhost:1337" + song.attributes.Cover.data[0].attributes.url,
            songUrl: "http://localhost:1337" + song.attributes.Song.data.attributes.url,
            name: song.attributes.Name,
            id: rawSong.id,
          };
        });

        const songs = await Promise.all(songsPromises);
        setSongs(songs);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading songs: {error.message}</div>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>Чарты</h1>
      <div className="group-charts" style={{ marginLeft: '610px' }}>
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box-charts">
              <img className="image" src={song.coverUrl} alt={song.name} />
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

