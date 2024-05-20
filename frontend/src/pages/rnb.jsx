import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Rnb() {
    return (
        <>
       <div class="text-container">
       <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>R&B  (англ. Rhythm and blues) </h1>
  
            <p>Сокращенный вариант написания Rhythm and blues
            Ритм-энд-блюз, — жанр популярной музыки, первоначально исполняемой негритянскими музыкантами, интегрировавший в себя сочетания блюза, джаза и госпела.
            </p>
  
           
  
           
          </div>
          
            <div>
            <div className="group-rnb">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box rnb" style={{ maxWidth: 150 }}>
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
