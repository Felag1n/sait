import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function pop() {
    return (
        <> 
        <div class="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Поп-музыка (англ. pop music от popular music)</h1>
  
            <p>
            Область массовой культуры, охватывающая различные формы, жанры и стили развлекательной и прикладной музыки 2-й половины XX — начала XXI веков.
            </p>
  
            <p>
            Основные черты поп-музыки — простота инструментальной части, ритмичность, акцент на вокал. Основная и практически единственная форма композиции в поп-музыке — песня.
            </p>
  
           
          </div>
          
            <div>
            <div className="group-pop">
        {[...Array(15)].map((_, index) => (
          <Link to="/page" key={index}>
            <div className="box pop" style={{ maxWidth: 150 }}>
              <img
                className="Image"
                src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                alt="Landscape photograph by Tobias Tullius"
              />
              Lorem.
            </div>
          </Link>
        ))}
      </div>
            </div>
        </>
    )
}

{/* <MediaBox audioSrc="audio_source.mp3" imageSrc="image_source.jpg" />
<MediaBox audioSrc="audio_source.mp3" imageSrc="image_source.jpg" /> */}

