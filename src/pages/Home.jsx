import '../pages/Home.css';
import Nav from '../compennts/Nav';
import rocketImg from '../assets/giphy1.webp';

function Home() {
  return (
    <>
      <div className="contain-Home">
        <Nav />
        <div className="home-container">
          <div className="left">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go
              to outer space and not hover kind of on the edge of it. Well sit back, and
              relax because we’ll give you a truly out of this world experience!
            </p>
          </div>

          <div className="right">
            <a
              className="explore-btn"
              href="https://eyes.nasa.gov/apps/orrery"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                const rocket = document.querySelector('.rocket');
                if (rocket) {
                  rocket.classList.add('launch');
                }
              }}
            >
              EXPLORE
            </a>
          </div>
        </div>

        <div className="rocket-zone">
          <img src={rocketImg} alt="Rocket" className="rocket" />
        </div>
      </div>
    </>
  );
}

export default Home;
