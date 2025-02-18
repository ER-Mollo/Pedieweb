// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <nav className="footer">
        <div className='footer-top'>
            <div className='footer-top-left'>
                <div className='footer-logo'>
                    <img src={logo}/>
                </div>
                <div className='footer-mid'>
                     <div>
                        <h3>Physical Address</h3>
                        <p>586, Benin Street, Kempton Park</p>
                     </div>
                     <div>
                        <h3>Phone Number</h3>
                        <p>+27 79 842 0219</p>
                     </div>
                </div>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={25} color='#0000ff'/>
                    </a>
                    <a href="mailto:info@yourdomain.com">
                        <FaEnvelope size={25}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={25}/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={25}/>
                    </a>
                </div>
            </div>
            <div className='footer-top-mid'>
                <h3>MENU</h3>
                <ul>
                    <li><NavLink to="/" exact >Home</NavLink></li>
                    <li><NavLink to="/About" >About</NavLink></li>
                    <li><NavLink to="/Service" >Services</NavLink></li>
                    <li><NavLink to="/Contact" >Contact</NavLink></li>
                </ul>
            </div>
            <div className='footer-top-right'>
                <h2>We're here to help<br></br> Call us today!</h2>
                <button>Contact Us</button>
            </div>
        </div>
        <hr ></hr>
        <div className='footer-bottom'>
            <p>Copyright © 2025 Pedipedi energy |  Designed by Kreative Black_SA</p>
        </div>
    </nav>
  );
}

export default Footer;
