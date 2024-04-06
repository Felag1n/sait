import  './Services.css';
import React from 'react';
import artem from "/artem.jpg";
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
                      <a href={social.link} target="_blank">
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