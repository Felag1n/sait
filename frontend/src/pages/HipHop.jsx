import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function HipHop() {
    return (
        <>
         <div class="text-container">
         <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Хип-хоп-музыка (англ. hip hop)</h1>
  
            <p>
            Музыкальный жанр популярной музыки, развитый в США в 1970-х годах афроамериканцами, 
            латиноамериканцами и американцами стран Карибского бассейна, живущими в бедных районах Бронкса 
            в Нью-Йорке. Хип-хоп-музыка состоит из стилизованной ритмичной музыки, которая обычно
            сопровождается рэпом, ритмичной и рифмованной речью, которую произносят нараспев.
            </p>
  
            <p>
            Хип-хоп-музыка развивалась как часть хип-хоп-культуры, субкультуры, определяемой четырьмя
            ключевымистилистическими элементами: эмсиинг/исполнение рэпа, диджеинг/скретчинг с помощью
            виниловых проигрывателей, брейк-данс и рисование граффити. Другие элементы включают семплирование
            битов или басовых линий из записей (или синтезированных битов и звуков) и ритмичный битбокс.
            </p>
  
           
          </div>
          
            <div>
            <div className="group-hiphop">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box hiphop" style={{ maxWidth: 150 }}>
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

