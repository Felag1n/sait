import  './Services.css';
import React from 'react';
import sofa from "/sofa.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faTelegram, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';

function TeamMember({ image, name, title, socialMedia }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-12">
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
      image: sofa,
      name: 'Любухина Соня',
      title: 'Design-Developer',
      socialMedia: [
        { link: 'https://vk.com/mmee00ww', icon: faVk },
        { link: 'https://t.me/sofalyub', icon: faTelegram },
        { link: 'https://www.instagram.com/sofialyubuhina?igsh=MWRiYjlyb3J6YmZsYg==', icon: faInstagram },
        { link: 'https://github.com/sofalyub', icon: faGithub},
      ],
    },
   
  ];
  return (
    <div className="centered-section">
    <section className="section-white">
      <div className="container">
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-12">
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