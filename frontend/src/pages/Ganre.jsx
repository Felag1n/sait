import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Markdown from 'markdown-to-jsx';
  

export default function Genre() {
  const { id } = useParams();
  const genreId = +id;

  const [songs, setSongs] = useState([]);
  const [description, setDescription] = useState('');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreResponse = await axios.get(`http://localhost:1337/api/genres/${genreId}?populate=*`);
        if (!genreResponse.data.data) {
          setNotFound(true);
          return;
        }
        
        const genreData = genreResponse.data.data.attributes;
        setDescription(genreData.description);

        const songPromises = genreData.songs.data.map(async (rawSong) => {
          const songResponse = await axios.get(`http://localhost:1337/api/songs/${rawSong.id}?populate=*`);
          const song = songResponse.data.data;
          const songAttributes = song.attributes;

          return {
            id: rawSong.id,
            name: songAttributes.Name,
            cover: `http://localhost:1337${songAttributes.Cover.data[0].attributes.url}`,
          };
        });

        const resolvedSongs = await Promise.all(songPromises);
        setSongs(resolvedSongs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNotFound(true);
      }
    };

    fetchData();
  }, [genreId]);

  if (notFound) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="text-container genre-content">
        <Markdown>{description}</Markdown>
      </div>
      <div className="group-genre">
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <div className="box genre">
              <img className="image" src={song.cover} alt={song.name} />
            </div>
            <div className="song-name">{song.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

