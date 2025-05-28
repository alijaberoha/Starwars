import europa from '../../assets/destination/image-europa.webp';

function Europa() {
  return (
    <div className="destination-content">
      <div className="destination-left">
        <img src={europa} alt="Europa" />
      </div>
      <div className="destination-right">
        <h1>EUROPA</h1>
        <p>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream.
          With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation
          in your snug wintery cabin.
        </p>
        <div className="destination-data">
          <div>
            <h6>EST. TRAVEL TIME</h6>
            <h2>3 YEARS</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Europa;
