import { useState } from 'react';
import Nav from '../compennts/Nav';
import './Tech.css';

function Tech() {
  const data = [
    {
      id: 1,
      name: 'LAUNCH VEHICLE',
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: <img src="/Exo Router Template/img/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" />
,
    },
    {
      id: 2,
      name: 'SPACEPORT',
      description:
        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      image: <img src="/Exo Router Template/img/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" />
,
    },
    {
      id: 3,
      name: 'LAUNCH VEHICULE ',
      description:
        " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: <img src="/Exo Router Template/img/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" />
,
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
    <div className='contain-Tech'>
         <Nav />
      <div className="tech-container">
        <h5><span>03</span> SPACE LAUNCH 101</h5>

        <div className="tech-content">
          <div className="tech-buttons">
            {data.map((item, i) => (
              <button
                key={item.id}
                className={i === index ? 'active' : ''}
                onClick={() => setIndex(i)}
              >
                {item.id}
              </button>
            ))}
          </div>

          <div className="tech-text">
            <h6>THE TERMINOLOGY...</h6>
            <h1>{data[index].name}</h1>
            <p>{data[index].description}</p>
          </div>

          <div className="tech-image">
            <img src={data[index].image} alt={data[index].name} />
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}

export default Tech;
