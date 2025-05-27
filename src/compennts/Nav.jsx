// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';
import './Nav.css';

function Nav() {
  const location = useLocation();

  return (
    <nav>
      <img src={logo} alt="logo" />
      <div className="ligne"></div>
      <div className="navig">
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">00 HOME</Link>
          </li>
          <li className={location.pathname === '/destination' ? 'active' : ''}>
            <Link to="/destination">01 DESTINATION</Link>
          </li>
          <li className={location.pathname === '/crew' ? 'active' : ''}>
            <Link to="/crew">02 CREW</Link>
          </li>
          <li className={location.pathname === '/technology' ? 'active' : ''}>
            <Link to="/technology">03 TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
