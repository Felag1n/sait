import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Alternative() {
  const [selectedImage, setSelectedImage] = useState(null);

  const [alternatives, setAlternatives] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/alternatives?populate=*')
      .then((r) => {
        const _alternatives = r.data.data.map((alternative) => ({
            id: alternative.id,
            image: "http://localhost:1337" + alternative.attributes.Image.data.attributes.url,
        }))

        setAlternatives(_alternatives)
      })
  }, [])
    return (
        <>
        <div class="text-container">
        <h1 style={{ fontFamily: 'Yeseva-One, sans-serif',color:"black" }}>Альтернатива (англ. Alternative) </h1>
  
            <p>
            Музыкальное направление, имеющие общие черты с indie, britpop, shoegaze, post-grunge, garage и punk. 
            Изначально альтернатива задумывалась как альтернатива (отсюда и название) всем существующим стилям, 
            но за время своего существования образовались свои особенности.
            </p>
  
            <p>
            Флагманами стиля были английские группы. Альтернатива достигла расцвета популярности на рубеже XX и XXI веков.
            </p>
  
           
          </div>
          
            <div>
            <div className="group-alternative">
            {alternatives.map((alternative) => (
  <Link to="/page" key={index}>
    <div className="box alternative" key={alternative.id} style={{ maxWidth: 150 }}>
      <img className="Image" src={alternative.image}/>
      Lorem.
    </div>
  </Link>
))}
</div>
            </div>
        </>
    )
}
