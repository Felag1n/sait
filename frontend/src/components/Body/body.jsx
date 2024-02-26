import React from "react";
import"./body.css";
import alternative from "../../entities/photo/alternative.png"
import electronic from "../../entities/photo/electronic.png"
import jazz from "../../entities/photo/jazz.png"
import pop from "../../entities/photo/pop.png"
import rnb from "../../entities/photo/rnb.png"
import punk from "../../entities/photo/punk.png"
import rap from "../../entities/photo/rap.png"
import rock from "../../entities/photo/rock.png"
import hiphops from "../../entities/photo/hip-hop.png"
import BOs from "../../entities/photo/80s.png"
const Body=()=>{
    return(
        <>
            <div className="body-div grid">
                <a href="#" className="grid-box">
                    <img src={rap} alt="Image 5" />
                </a>
                <a href="#" className="grid-box">
                    <img src={punk} alt="Image 1" />
                </a>
                <a href="#" className="grid-box">
                    <img src={rock} alt="Image 2" />
                </a>
                <a href="#" className="grid-box">
                    <img src={jazz} alt="Image 3" />
                </a>
                <a href="#" className="grid-box">
                <img src={hiphops} alt="Image 4" />
                </a>
                <a href="#" className="grid-box">
                <img src={rnb} alt="Image 6" />
                </a>
                <a href="#" className="grid-box">
                <img src={alternative} alt="Image 7" />
                </a>
                <a href="#" className="grid-box">
                <img src={electronic} alt="Image 8" />
                </a>
                <a href="#" className="grid-box">
                <img src={pop} alt="Image 9" />
                </a>
                <a href="#" className="grid-box">
                <img src={BOs} alt="80's" />
                </a>
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
        </>
    )
}
export default Body;