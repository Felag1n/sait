import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function rap() {
    return (
        <>
        <div class="text-container">
            <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Рэп  (англ. rap, rapping)</h1>
  
            <p>
            Также известное как рифмование (rhyming), фристайл (freestyling, или в просторечии spitting), эмсиинг (emceeing) или MC’инг (MCing, M.C.’ing) — музыкальная форма вокальной подачи, 
            включающая в себя «рифму, ритмичную речь и уличный жаргон», которая исполняется или произносится нараспевразличными способами, как правило, под фоновый бит или музыкальный аккомпанемент.
            </p>
  
            <p>
            Компоненты рэпа включают в себя «содержание» (то, что говорится), «флоу» (ритм, рифма) и «подачу» (каденция, тон). 
            Рэп отличается от устной поэзии тем, что обычно исполняется под музыкальноесопровождение. Рэп — основной элемент хип-хоп-музыки, обычно ассоциируется именно с этим жанром и даже служит его метонимией; 
            однако истоки рэпа на много лет предшествовали появлению хип-хоп-культуры.
            </p>
  
           
          </div>
          
            <div>
            <div className="group-rap">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box rap" style={{ maxWidth: 150 }}>
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

