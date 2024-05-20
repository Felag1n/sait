import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function BOs() {
    return (
        <>
       <div class="text-container">
       <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Музыка 80-х</h1>
  
            <p>
            Сюда относится вся музыка, выпущенная в период времени с 1 января 1980 по 31 декабря 1989.
            </p>
           
          </div>
          
            <div>
            <div className="group-bos">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box bos" style={{ maxWidth: 150 }}>
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
