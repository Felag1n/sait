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

function HomePage() {
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
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
                <div className="flex-box">
                <img src="path/to/image1.jpg" alt="Image 1" />
                </div>
            </div>

        </div>
        { <div className='group'>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
        </div> }
        <h1 style={{ textAlign: "center", color: "white" }}>Последниие релизы</h1>
        
        { <div className='group'>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'><Link to="/page">Contact</Link></div>
          <div className='box'>Lorem. <Link to="/page">Contact</Link></div>
        </div>}
    </>
    
  );
  
}

export default HomePage