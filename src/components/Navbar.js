import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Pedipedi Energy" className="nav-logo" />
        <h1 className="logo">Pedipedi Energy</h1>
      </div>

      <div className="nav-links desktop">
        <a href="#" className="active">Home</a>
        <a href="#about" >About Us</a>
        <a href="#services" >Services</a>
        <a href="#how">How It Works</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="mobile-menu">
          <a href="#" className="active">Home</a>
          <a href="#about" >About Us</a>
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="contact-btn">Contact Us</a>
        </div>
      )}
    </nav>
  );
}