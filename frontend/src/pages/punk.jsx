import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Punk() {
    return (
        <>
          <div class="text-container">
            <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Панк (англ. Punk) — субкультура</h1>
  
            <p>
              Возникшая в конце 1960-х - начале 1970-х годов в Великобритании, США, Канаде и Австралии.</p>
             <p>  На данный момент делится на стрит-панк, краст-панк, анархо-панк и просто панк, объединяющий в себе элементы всех подвидов движения.
            </p>
  
            <p>
              Панк берёт своё начало в 1960-х годах, когда под влиянием The Beatles и The Rolling Stones стало появляться много молодёжных команд,</p>
              <p>исполняющих рок-н-ролл. </p>
            <p>  Родителями панка такого, каков он есть, была нью-йоркская группа The Ramones.</p>  
             <p> Они первые начали классифицировать себя как панков, создали внешний стиль и стиль игры.</p>
      
  
           
          </div>
          
            <div>
            <div className="group-punk">
{[...Array(15)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box punk" style={{ maxWidth: 150 }}>
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
  
 