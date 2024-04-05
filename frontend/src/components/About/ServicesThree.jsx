import  './Services.css';
import React from 'react';
import artem from "/artem.jpg";
// import sofa from "../sofa.jpg";
// import sonya from "../sonya.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faPinterest, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function TeamMember({ image, name, title, socialMedia }) {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="team-item">
        <img src={image} className="team-img" alt="pic" />
        <h3>{name}</h3>
        <div className="team-info"><p>{title}</p></div>
        <ul className="team-icon">
          {socialMedia.map((platform, index) => (
            <li key={index}>
              <a href={platform.link} className={platform.icon}>
                <FontAwesomeIcon icon={platform.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServicesComponent() {
  const teamMembers = [
    {
      image: artem,
      name: 'Черняев Артем',
      title: 'Developer 1',
      socialMedia: [
        { link: 'https://vk.com/felagin', icon: faVk },
        { link: 'https://ru.pinterest.com/pipipopo876890767/', icon: faPinterest },
        { link: 'https://www.instagram.com/', icon: faInstagram },
        { link: 'https://www.tiktok.com/@felagin', icon: faTiktok },
      ],
    },
   
  ];
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={member.image} className="team-img" alt="pic" />
                <h3>{member.name}</h3>
                <div className="team-info"><p>{member.title}</p></div>
                <p>Студент 3 курса., группы ИСП-211</p>
                <ul className="team-icon">
                  {member.socialMedia.map((social, index) => (
                    <li key={index}>
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={social.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent;



// import artem from "/artem.jpg"
// import sofa from "/sofa.jpg"
// import sonya from "/sonya.jpg"
// import pint from "/pinterest.svg"
// import vk from "/vk.svg"
// import inst from "/instagram.svg"
// import tiktok from "/tiktok.svg"
// import  './Services.css';
// function Services () {
//     let message = `EC - это место, где вы можете наслаждаться самыми свежими музыкальными хитами и открывать новых исполнителей.`;
//     return (
//       <section class="section-white">
 
//     <div class="container">
 
//         <div class="row">
       
//                     <div class="col-md-12 text-center">

//                           <h2 class="section-title">EC Team</h2>

//                           <p class="section-subtitle">{message}</p>
                          
//                     </div> 
             
//             <div class="col-sm-6 col-md-4">

//                   <div class="team-item">
                  
//                       <img src={artem} class="team-img" alt="pic" />                   
//                       <h3>Черняев Артем</h3>            
//                       <div class="team-info"><p>Developer 1</p></div>
//                       <p>Студент 3 курса., группы ИСП-211</p>
                  
//                       <ul class="team-icon">
                      
//                       <li><a href="https://vk.com/felagin" class="vk">
//                         <img src={vk}  alt="pic" />
//                         </a></li>
                          
//                         <li><a href="https://ru.pinterest.com/pipipopo876890767/" class="pinterest">
//                         <img src={pint}  alt="pic" />
//                         </a></li>
                          
//                         <li><a href="https://www.instagram.com/" class="instagram">
//                         <img src={inst}  alt="pic" />
//                         </a></li>
                          
//                         <li><a href="https://www.tiktok.com/@felagin" class="tiktok">
//                         <img src={tiktok}  alt="pic" />
//                         </a></li>
                          
//                       </ul>
                      
                  
//                 </div>
//             </div> 
              
//             <div class="col-sm-6 col-md-4">

//                   <div class="team-item">
                  
//                       <img src={sofa} class="team-img" alt="pic" />
                     
//                       <h3>Любухина Соня</h3>
                      
//                       <div class="team-info"><p>Design Developer</p></div>

//                       <p>Студентка 3 курса., группы ИСП-212</p>
                  
//                       <ul class="team-icon">
                      
//                           <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
//                           <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
//                           <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
//                           <li><a href="#" class="dribble"><i class="fa fa-dribbble"></i></a></li>
                          
//                       </ul>
                      
//                   </div>

//             </div> 
//             <div class="col-sm-6 col-md-4">

//                   <div class="team-item">
                  
//                       <img src={sonya} class="team-img" alt="pic" />
                     
//                       <h3>Тюленева Соня</h3>
                      
//                       <div class="team-info"><p>Developer 2</p></div>

//                       <p>Студентка 3 курса., группы ИСП-212</p>
                  
//                       <ul class="team-icon">
                      
//                           <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                          
//                           <li><a href="#" class="pinterest"><i class="fa fa-pinterest"></i></a></li>
                          
//                           <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                          
//                           <li><a href="#" class="dribble">
//                             <i class="fa fa-dribbble"></i>
//                         </a></li>
                          
//                       </ul>
                      
//                   </div>

//             </div> 
        
//         </div> 
    
//     </div> 

//     </section>
//     )
// }

