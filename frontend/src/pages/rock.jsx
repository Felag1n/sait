import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Rock() {
    return (
        <>
        <div class="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Рок (англ. Rock) </h1>

        <p>
        Обобщающее название ряда направлений популярной музыки. 
        Слово rock (в переводе с англ. — «качать», «укачивать», «качаться») возникло как сокращение от названия рок-н-ролла, 
        хронологически первого жанра рок-музыки, и обозначает характерные для рок-н-ролла ритмические ощущения, связанные с определённой формой движения
        , по аналогии с roll, twist, swing, shake. 
        </p>

        <p>
        Чаще всего (но не обязательно) рок исполняется с использованием ударных установок,
         а также перегруженных электрогитар и бас-гитар. 
         Для рок-музыкантов характерно исполнение композиций собственного сочинения
        </p>

       
      </div>
      
        <div>
        <div className="group-rock">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box rock" style={{ maxWidth: 150 }}>
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

