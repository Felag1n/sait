import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function electronic() {
    return (
        <>
        <div class="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Электро́нная музыка (от англ. Electronic music) </h1>
  
            <p>
            Широкий жанр, обозначающий музыку, созданную с использованием электронных музыкальных инструментов 
            и электронного оборудования. Хотя первые электронные инструменты появились ещё в начале XX вв., 
            электронная музыка как жанр развилась во второй половине XX в., и на начало XXI в. включает десятки разновидностей.
            </p>
           
          </div>
          <div className="group-electronic">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box electronic" style={{ maxWidth: 150 }}>
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
          
          
        </>
    )
}

