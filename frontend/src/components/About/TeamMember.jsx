import './TeamMember.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
function TeamMember({ member }) {
  const {
    image,
    name,
    title,
    group,
    socialMedia,
  } = member
 
  return (
    <div className="col-sm-6 col-md-4 col-lg-12">
      <div className="team-item">
        <img src={image} className="team-img" alt="pic" />
        <h3>{name}</h3>
        <div className="team-info"><p>{title}</p></div>
        <div className="team-info"><p>{group}</p></div>
        <ul className="team-icon">
          {socialMedia.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
 
export default TeamMember;