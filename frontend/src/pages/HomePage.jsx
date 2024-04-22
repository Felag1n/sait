import"../components/Body/body.css";
import alternative from "../entities/photo/alternative.png"
import electronic from "../entities/photo/electronic.png"
import jazz from "../entities/photo/jazz.png"
import pop from "../entities/photo/pop.png"
import rnb from "../entities/photo/rnb.png"
import punk from "../entities/photo/punk.png"
import rap from "../entities/photo/rap.png"
import rock from "../entities/photo/rock.png"
import hiphops from "../entities/photo/hip-hop.png"
import BOs from "../entities/photo/80s.png"
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  return(
    <>
        <h1 style={{ textAlign: "center", color: "white" }}>Музыка</h1>
        <h2 style={{ textAlign: "center", color: "white", paddingLeft: "20px" }}>Обзор</h2>
        <h3 style={{ textAlign: "center", color: "white" }}>Интересные теги</h3>
        <div>

        <div className="body-div grid">
                <Link to="/rap" className="grid-box">
                    <img src={rap} alt="Image 5" />
                </Link>
                <Link to="/punk" className="grid-box">
                    <img src={punk} alt="Image 1" />
                </Link>
                <Link to="/rock" className="grid-box">
                    <img src={rock} alt="Image 2" />
                </Link>
                <Link to="/jazz" className="grid-box">
                    <img src={jazz} alt="Image 3" />
                </Link>
                <Link to="/hiphop" className="grid-box">
                <img src={hiphops} alt="Image 4" />
                </Link>
                <Link to="/rnb" className="grid-box">
                <img src={rnb} alt="Image 6" />
                </Link>
                <Link to="/alternative" className="grid-box">
                <img src={alternative} alt="Image 7" />
                </Link>
                <Link to="/electronic" className="grid-box">
                <img src={electronic} alt="Image 8" />
                </Link>
                <Link to="/pop" className="grid-box">
                <img src={pop} alt="pop" />
                </Link>
                <Link to="/BOs" className="grid-box">
                <img src={BOs} alt="80's" />
                </Link>
            </div>
            <div className="flex-container">
                {Array(7).fill().map((_, i) => (
                    <div className="flex-box" onMouseOver={() => setSelectedImage(i)} onMouseOut={() => setSelectedImage(null)}>
                        <img src={`path/to/image${i+1}.jpg`} alt={`Image ${i+1}`} />
                        {selectedImage === i && (
                            <div className="modal">
                                <p>Не следует, однако, забывать, что консультация с широким активом выявляет срочную потребность стандартных подходов. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: убеждённость некоторых оппонентов выявляет срочную потребность соответствующих условий активизации. Как уже неоднократно упомянуто, акционеры крупнейших компаний неоднозначны и будут в равной степени предоставлены сами себе. Наше дело не так однозначно, как может показаться: выбранный нами инновационный путь не даёт нам иного выбора, кроме определения вывода текущих активов. Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса описаны максимально подробно. Внезапно, стремящиеся вытеснить традиционное производство, нанотехнологии неоднозначны и будут описаны максимально подробно. Принимая во внимание показатели успешности, высокотехнологичная концепция общественного уклада играет важную роль в формировании экспериментов, поражающих по своей масштабности и грандиозности. Разнообразный и богатый опыт говорит нам, что синтетическое тестирование создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
        { <div className='group'>
        <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
        </div> }
        <h1 style={{ textAlign: "center", color: "white" }}>Последниие релизы</h1>
        
        { <div className='group'>
        <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
          <Link to="/page"><div className='box'>
          <img
        className="Image"
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      />
          </div>
          </Link>
        </div>}
    </>
    
  );
  
}

export default HomePage