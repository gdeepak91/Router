import React from 'react'
import './Link.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'

import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

const Llink = () => {
  return (
    <>
      <Router>
        <ul className='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Llink