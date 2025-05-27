import Nav from '../compennts/Nav';
import './Crew.css';
import { useState } from 'react';

import anou from '../assets/crew/image-anousheh-ansari.webp'; 
import mark from '../assets/crew/image-mark-Shuttleworth.webp'; 
import vic from '../assets/crew/image-victor-Glover.webp'; 

function Crew() {
    const crewData = [
        {
      role: 'COMMANDER',
      name: 'DOUGLAS HURLEY',
      description:
        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: <img src="/Exo Router Template/img/image-douglas-hurley.webp" alt="Douglas" />
,
    },
    {
      role: 'MISSION SPECIALIST',
      name: 'MARK SHUTTLEWORTH',
      description:
        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      image: mark,
    },
    {
      role: 'PILOT',
      name: 'VICTOR GLOVER',
      description:
        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
      image: vic,
    },
    {
      role: 'FLIGHT ENGINEER',
      name: 'ANOUSHEH ANSARI',
      description:
        ' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
      image: anou,
    },
    ];
    const [index,setIndex] = useState(0)

    const member = crewData[index];
  return (
    <div className="contain-Crew">
      <Nav />
      <div className="crew-content">
        <div className="crew-left">
          <h5><span>02</span> MEET YOUR CREW</h5>
          <h6>{member.role}</h6>
          <h1>{member.name}</h1>
          <p>
            {member.description}
          </p>

          <div className="crew-dots">
            {crewData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={i === index ? 'active' : ''}
              ></button>
            ))}
          </div>
        </div>

        <div className="crew-image">
          <img src={member.image} alt={member.name} />
        </div>
      </div>
    </div>
  );
}

export default Crew;
