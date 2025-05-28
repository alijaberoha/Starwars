import titan from '../../assets/destination/image-titan.webp';

function Titan() {
  return (
    <div className="destination-content">
      <div className="destination-left">
        <img src={titan} alt="Titan" />
      </div>
      <div className="destination-right">
        <h1>TITAN</h1>
        <p>
          The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!).
          As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className="destination-data">
          <div>
            <h6>EST. TRAVEL TIME</h6>
            <h2>7 YEARS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Titan;
