import { useState } from 'react'
import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
import Home from '../src/pages/Home'
import Tech from './pages/Tech';
import Crew from './pages/Crew';

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/technology" element={<Tech />} />
  <Route path="/Crew" element={<Crew />} />
  
</Routes>
    </>
  )
}

export default App
