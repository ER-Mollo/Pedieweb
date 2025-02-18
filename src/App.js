// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage.js';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Service" element={<ServicesPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
