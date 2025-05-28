import mars from '../../assets/destination/image-mars.webp';

function Mars() {
  return (
    <div className="destination-content">
      <div className="destination-left">
        <img src={mars} alt="Mars" />
      </div>
      <div className="destination-right">
        <h1>MARS</h1>
        <p>
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
          the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </p>
        <div className="destination-data">
          <div>
            <h6>EST. TRAVEL TIME</h6>
            <h2>9 MONTHS</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mars;
