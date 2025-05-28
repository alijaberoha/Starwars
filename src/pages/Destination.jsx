import { Outlet, NavLink } from "react-router-dom";
import Nav from "../compennts/Nav";
import './Destination.css';

function Destination() {
  return (
    <div className="contain-Destination">
      <Nav />
      <div className="destination-container">
        <h5><span>01</span> PICK YOUR DESTINATION</h5>
        
        <div className="destination-links">
          <NavLink to="moon" className={({ isActive }) => (isActive ? 'active' : '')}>MOON</NavLink>
          <NavLink to="mars" className={({ isActive }) => (isActive ? 'active' : '')}>MARS</NavLink>
          <NavLink to="europa" className={({ isActive }) => (isActive ? 'active' : '')}>EUROPA</NavLink>
          <NavLink to="titan" className={({ isActive }) => (isActive ? 'active' : '')}>TITAN</NavLink>
        </div>
        <Outlet />
        
      </div>
      
    </div>
  );
}

export default Destination;
