import moon from '../../assets/destination/image-moon.webp';

function Moon() {
  return (
    <div className="destination-content">
      <div className="destination-left">
        <img src={moon} alt="Moon" />
      </div>
      <div className="destination-right">
        <h1>MOON</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.
          While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div className="destination-data">
          <div>
            <h6>EST. TRAVEL TIME</h6>
            <h2>3 DAYS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
