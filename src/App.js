import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience'
import Astro from './Components/Astro'
import Cca from './Components/Cca'
import Cas from './Components/Cas'
import Others from './Components/Others';
import Research from './Components/Research'
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AnimatePresence>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="About" element={<About />} exact/>
          <Route path="Experience" element={<Experience />} exact/>
          <Route path="Research" element={<Research />} exact/>
          <Route path="Astro" element={<Astro />} exact/>
          <Route path="Cca" element={<Cca />} exact/>
          <Route path="Cas" element={<Cas />} exact/>
          <Route path="Others" element={<Others />} exact/>
        </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
