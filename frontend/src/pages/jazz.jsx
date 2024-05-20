import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function jazz() {
    return (
        <>
         <div class="text-container">
         <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Джаз (англ. Jazz)</h1>
  
            <p>
            Это направление в музыке, которое возникло в США в самом начале XX века. 
            </p>
  
            <p>
            В нем тесно переплетаются ритмы, обрядовые песнопения и рабочие песни афроамериканцев, 
            а также гармоническая составляющая, присущая музыке белых переселенцев. Другими словами, 
            это импровизационный жанр, появившийся в результате смешивания западноевропейской и западноафриканской музыки.
            </p>
  
           
          </div>
          
            <div>
            <div className="group-jazz">
        {[...Array(15)].map((_, index) => (
          <Link to="/page" key={index}>
            <div className="box jazz" style={{ maxWidth: 150 }}>
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