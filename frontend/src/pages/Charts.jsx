import React from 'react';
import { Link } from 'react-router-dom';

export default function Charts() {
    return (
        <>
        <h1 style={{ textAlign: "center", color: "white" }}>Чарты</h1>
       <div className="group-charts">
{[...Array(30)].map((_, index) => (
  <Link to="/page" key={index}>
    <div className="box-charts" style={{maxWidth: 400, marginLeft: '610px'  }}>
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
    );
}


