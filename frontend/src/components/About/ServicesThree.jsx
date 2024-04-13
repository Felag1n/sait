import  './Services.css';
import React from 'react';
import sonya from "/sonya.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons';

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
      image: sonya,
      name: 'Тюленева Соня',
      title: 'Developer 2',
      socialMedia: [
        { link: 'https://vk.com/mirror_period', icon: faVk },
        { link: 'https://t.me/ecoute_maman', icon: faTelegram },
        { link: 'https://github.com/SofiaT4', icon: faGithub},
      ],
    },
   
  ];
  return (
    <div className="centered-section">
   <section className="section-white">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="team-item">
                <img src={member.image} className="team-img" alt="pic" />
                <h3>{member.name}</h3>
                <div className="team-info"><p>{member.title}</p></div>
                <p>Студентка 3 курса., группы ИСП-212</p>
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
    </div>
  );
}

export default ServicesComponent;