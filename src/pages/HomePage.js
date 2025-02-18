// src/pages/HomePage.js
import React from 'react';
import MenuBar from '../components/Menubar';
import './HomePage.css';
import { NavLink } from 'react-router-dom'; 
import image2 from '../assets/image2.jpg';
import install from '../assets/install.jpg';
import geyser from '../assets/geyser.jpg';
import inverter from '../assets/inverter.jpg'
import Footer from '../components/footer';

function HomePage() {
  return (
    <div>
      <MenuBar />
      <div className='top'>
        <div className='slogan'>
            <h1><span>Empowering Sustainable <br></br></span><span>Future</span></h1>
            <div className='top-button'>
                <NavLink to="/Contact" ><button>Requeest a Callback</button></NavLink>
            </div>
        </div>
      </div>

      <div className='home-about'>
        <div className='home-about-image'>
            <img src={image2}/>
        </div>
        <div className='home-about-text'>
            <h3>Who Are we?</h3>
            <h1>A Team of Full-service Reliable renewable energy Professionals for Home or Work Needs.</h1>
            <p>Established in 2020 after seeing the need
                for solutions to the energy crisis in S.A, as Pedipedi we intend to serve and be
                among the best in providing renewable energy solutions to both residential and commercial clients.</p>
            <div className='home-about-button'> 
            <NavLink to="/About" ><button>Know More About Us</button></NavLink>
            </div>
            
        </div>
        
      </div>

      <div className='home-services'>
        <div className='home-services-text'>
            <h3>How can we help you?</h3>
            <p>Established in 2020 after seeing the need<br></br>
                for solutions to the energy crisis in S.A, as Pedipedi we intend to serve and be</p>
        </div>
        <div className='home-services-content'>
            <div>
                <img src={install}/>
                <h3>Solar PV installations</h3>
                <p>Whether it is solar backup, grid-tie or off grid,
                    our team knows what’s right and will offer you the best possible solution.</p>
            </div>
            <div>
                <img src={geyser}/>
                <h3>Solar Geyser /Solar geyser retrofit</h3>
                <p>Whether you need an emergency repair or you are upgrading your home or just looking for new solar geyser installations or want to convert your existing one, we have the best options for you to choose from.</p>
            </div>
            <div>
                <img src={inverter}/>
                <h3>UPS/Inverter backup systems</h3>
                <p>From hotels to schools, Hospitals to Clinics, Mobile Vans to Mobile Kitchens, home or office, we have the necessary equipment and training to provide top-quality services wherever you need them.</p>
            </div>

        </div>
        <div className='home-services-button'>
            <button>Veiw All Services</button>
        </div>
        
      </div>
      <div className='bridge'>
        <div>
            <h2>The Best Service</h2>
            <p>We are committed to revolutionizing the ay energy is sourced and utilized. 
              Specializing in reneable energy solutions, our comprehensive services encompass
               system design, solar installation, sales, maitanance, and cleaning
            </p>
            <button></button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;