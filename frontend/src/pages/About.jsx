import TeamMember from "../components/About/TeamMember"
import sofa from "/sofa.jpg";
import sonya from "/sonya.jpg";
import artem from "/artem.jpg";
import { faGithub, faInstagram, faPinterest, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
 
export default function About() {
  const teamMembers = [
    {
      image: artem,
      name: 'Черняев Артем',
      title: 'Developer 1',
      group: 'Студент 3 курса, группы ИСП-211',
      socialMedia: [
        { link: 'https://vk.com/felagin', icon: faVk },
        { link: 'https://ru.pinterest.com/pipipopo876890767/', icon: faPinterest },
        { link: 'https://www.instagram.com/feelagin_/', icon: faInstagram },
        { link: 'https://github.com/Felag1n', icon: faGithub},
      ],
    },
    {
      image: sofa,
      name: 'Любухина Соня',
      title: 'Design-Developer',
      group: 'Студентка 3 курса, группы ИСП-212',
      socialMedia: [
        { link: 'https://vk.com/mmee00ww', icon: faVk },
        { link: 'https://t.me/sofalyub', icon: faTelegram },
        { link: 'https://www.instagram.com/sofialyubuhina?igsh=MWRiYjlyb3J6YmZsYg==', icon: faInstagram },
        { link: 'https://github.com/sofalyub', icon: faGithub},
      ],
    },
    {
      image: sonya,
      name: 'Тюленева Соня',
      title: 'Developer 2',
      group: 'Студентка 3 курса, группы ИСП-212',
      socialMedia: [
        { link: 'https://vk.com/mirror_period', icon: faVk },
        { link: 'https://t.me/ecoute_maman', icon: faTelegram },
        { link: 'https://github.com/SofiaT4', icon: faGithub},
      ],
    },
  ]
 
  return (
    <div>
      {teamMembers.map((member, index) => (
        <div key={index} className="centered-section">
          <div className="container">
            <TeamMember member={member} />
          </div>
        </div>
      ))}
    </div>
  )
}