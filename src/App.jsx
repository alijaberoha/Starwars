import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Moon from './pages/destination/Moon';
import Mars from './pages/destination/Mars';
import Europa from './pages/destination/Europa';
import Titan from './pages/destination/Titan';
import { Navigate } from 'react-router-dom';
import r2 from "./assets/giphy2.webp"

function App() {

  return (

    <div>
          <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technology" element={<Tech />} />
      <Route path="/crew" element={<Crew />} />

      <Route path="/destination" element={<Destination />}>
        <Route index element={<Navigate to="moon" />} />
        
        <Route path="moon" element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
      </Route>
    </Routes>
      <img
  src={r2}
  alt="R2-D2"
  className="r2d2"
/>
    </div>
  );
}

export default App;
