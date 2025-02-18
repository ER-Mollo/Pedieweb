import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import './Menubar.css';
import logo from '../assets/logo.png';

function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`menu-bar ${scrolled ? "scrolled" : ""}`}>
      <div className="image">
        <img src={logo} className="logo" alt="Logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/" exact activeClassName="active" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/About" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/Service" activeClassName="active" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/Contact" activeClassName="active" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
        <div className="button">
          <NavLink to="/Contact"><button>Get Quote</button></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
