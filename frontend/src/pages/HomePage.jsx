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

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/authors?populate=*')
      .then((r) => {
        const _authors = r.data.data.map((author) => ({
            id: author.id,
            description: author.attributes.Description,
            image: "http://localhost:1337" + author.attributes.Image.data.attributes.url,
        }))

        setAuthors(_authors)
      })
  }, [])
  return(
    <>
        <h1 style={{ textAlign: "center", color: "white" }}>Музыка</h1>
        <h2 style={{ textAlign: "center", color: "white", paddingLeft: "20px" }}>Обзор</h2>
        <h3 style={{ textAlign: "center", color: "white" }}>Интересные теги</h3>
        <div>

        <div className="body-div grid">
                <Link to="/rap" className="grid-box">
                    <img src={rap} alt="Image 5" />
                </Link>
                <Link to="/punk" className="grid-box">
                    <img src={punk} alt="Image 1" />
                </Link>
                <Link to="/rock" className="grid-box">
                    <img src={rock} alt="Image 2" />
                </Link>
                <Link to="/jazz" className="grid-box">
                    <img src={jazz} alt="Image 3" />
                </Link>
                <Link to="/hiphop" className="grid-box">
                <img src={hiphops} alt="Image 4" />
                </Link>
                <Link to="/rnb" className="grid-box">
                <img src={rnb} alt="Image 6" />
                </Link>
                <Link to="/alternative" className="grid-box">
                <img src={alternative} alt="Image 7" />
                </Link>
                <Link to="/electronic" className="grid-box">
                <img src={electronic} alt="Image 8" />
                </Link>
                <Link to="/pop" className="grid-box">
                <img src={pop} alt="pop" />
                </Link>
                <Link to="/BOs" className="grid-box">
                <img src={BOs} alt="80's" />
                </Link>
            </div>
            <h1 style={{ textAlign: "center", color: "white" }}>Авторы</h1>
            <div className="flex-container">
                {authors.map((author) => (
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
  {[...Array(7)].map((_, index) => (
    <Link to="/page" key={index}>
      <div className="box" >
        <img
          className="Image"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
          alt="Landscape photograph by Tobias Tullius"
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