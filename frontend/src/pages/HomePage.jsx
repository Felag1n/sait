import"../components/Body/body.css";
import alternative from "../entities/photo/alternative.png"
import electronic from "../entities/photo/electronic.png"
import jazz from "../entities/photo/jazz.png"
import pop from "../entities/photo/pop.png"
import rnb from "../entities/photo/rnb.png"
import punk from "../entities/photo/punk.png"
import rap from "../entities/photo/rap.png"
import rock from "../entities/photo/rock.png"
import hiphops from "../entities/photo/hip-hop.png"
import BOs from "../entities/photo/80s.png"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [authors, setAuthors] = useState([])
  const [albums, setAlmums] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/authors?populate=*&pagination[pageSize]=100000000')
      .then((r) => {
        const _authors = r.data.data.map((author) => ({
            id: author.id,
            description: author.attributes.Description,
            image: "http://localhost:1337" + author.attributes.Image.data.attributes.url,
        }))

        setAuthors(shuffleArray(_authors));
      });

    axios
      .get('http://localhost:1337/api/albums?populate=*')
      .then((rawAlmubs) => {
        const albums = rawAlmubs.data.data.map((album) => ({
          id: album.id,
          name: album.attributes.Name,
          coverURL: 'http://localhost:1337' + album.attributes.Cover.data.attributes.url,
        }))

        setAlmums(albums)
      })
  }, []);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return(
    <>
        <h1 style={{ textAlign: "center", color: "white" }}>Музыка</h1>
        <h2 style={{ textAlign: "center", color: "white", paddingLeft: "20px" }}>Обзор</h2>
        <h3 style={{ textAlign: "center", color: "white" }}>Интересные теги</h3>
        <div>

        <div className="body-div grid">
                <Link to="/ganre/8" className="grid-box">
                    <img src={rap} alt="Image 5" />
                </Link>
                <Link to="/ganre/7" className="grid-box">
                    <img src={punk} alt="Image 1" />
                </Link>
                <Link to="/ganre/2" className="grid-box">
                    <img src={rock} alt="Image 2" />
                </Link>
                <Link to="/ganre/5" className="grid-box">
                    <img src={jazz} alt="Image 3" />
                </Link>
                <Link to="/ganre/4" className="grid-box">
                <img src={hiphops} alt="Image 4" />
                </Link>
                <Link to="/ganre/10" className="grid-box">
                <img src={rnb} alt="Image 6" />
                </Link>
                <Link to="/ganre/1" className="grid-box">
                <img src={alternative} alt="Image 7" />
                </Link>
                <Link to="/ganre/3" className="grid-box">
                <img src={electronic} alt="Image 8" />
                </Link>
                <Link to="/ganre/6" className="grid-box">
                <img src={pop} alt="pop" />
                </Link>
                <Link to="/ganre/9" className="grid-box">
                <img src={BOs} alt="80's" />
                </Link>
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Авторы</h1>
            <div className="flex-container">
            {authors.slice(0, 7).map((author) => (
                    <div className="flex-box" key={author.id}>
                        <img className="flex-box__image" src={author.image}  />
                          <div className="flex-box__modal">
                              <p>
                                {author.description}
                              </p>
                          </div>
                    </div>
                ))}
            </div>

        </div>

        <h1 style={{ textAlign: "center", color: "white" }}>Последниие релизы</h1>
        
        {  <div className="group">
  {albums.map((album) => (
    <Link to={`/album/${album.id}`} key={album.id}>
      <div className="box" >
        <img
          className="Image"
          src={album.coverURL}
          alt={`Обложка ${album.name}`}
        />
        Lorem.
      </div>
    </Link>
  ))}
  </div>}
    </>
    
  );
  
}

export default HomePage