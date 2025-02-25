// src/pages/ServicesPage.js
import React from 'react';
import MenuBar from '../components/Menubar';
import './ServicesPage.css';
import geyser from '../assets/geyser.jpg';
import inverter from '../assets/inverter.jpg';
import install from '../assets/install.jpg';
import installation from '../assets/installation.jpeg';
import { FaCheckCircle, FaTools, FaCogs, FaSolarPanel, FaShoppingCart, FaWrench, FaBroom } from 'react-icons/fa';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';

function ServicesPage() {
  return (
    <div>
      <MenuBar />
      <div className='top-service'>
        <div>
          <h1>Our Services</h1>
        </div>
      </div>
      <div>
        <div className='story'>
          <div className='story-left bottom'> 
          <h1 style={{color:"white"}}>Services We Offer</h1>
          <div className='mission-values'>
              <div>
                  <FaCheckCircle color='white'/>
              </div>
              <nav style={{color:"white"}}>Services We Offer</nav>
          </div>
          <div className='mission-values'>
            <div>
                <FaCheckCircle color='white'/>
            </div>
            <nav style={{color:"white"}}>Turnkey Renewable Energy solutions, such as Rooftop Solar PV, Tailor made back  up systems and UPS </nav>
            </div>
            <div className='mission-values'>
              <div>
                <FaCheckCircle color='white'/>
              </div>
              <nav style={{color:"white"}}>Tailor made Energy storage Systems</nav>
            </div>  
          </div>
          <div className='story-right'>
            <img src={installation} className='plug'/>
          </div>
        </div>
        <div style={{textAlign:'center', padding:'20px'}}>
          <h1>The Best Service</h1>
          <p>We are committed to revolutionizing the way energy is sourced and utilized. Specializing in reneable energy solutions,
             our comprehensive services encompass system design, solar installation, sales, maitanance, and cleaning</p>
        </div>
        <div>
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

        </div>
        <div>
          <div style={{textAlign:'center', padding:'5px', backgroundColor:'#0000ff', color:'white', marginTop:'20px'}}>
            <h3>Our Installations<br></br>
              All our installations are complaint and CoC and green
              card will be issued once the system is commissioned
            </h3>
          </div>
          <div style={{textAlign:'center', padding:'10px'}}>
            <h1>More of Our Services</h1>
          </div>
          <div className='more-services'>
            <div className='services-icons'>
              <FaCogs className="service-icon"/>
              <h3>System Design</h3>
              <p>
                Our expert team crafts tailor-made energy systems to meet your specific needs and maximize efficiency.
              </p>
            </div>
            <div className='services-icons'>
              <FaSolarPanel className="service-icon"/>
              <h3>Solar Installations</h3>
              <p>
                Transforming sunlight into savings, we deliver top-notch solar panel installations for homes, businesses, and community projects.
              </p>
            </div>
            <div className='services-icons'>
              <FaShoppingCart className="service-icon"/>
              <h3>Sales</h3>
              <p>
                Offering a range of renewable energy products, we provide high-energy solutions for sustainable living.
              </p>
            </div>
            <div className='services-icons'>
              <FaWrench className="service-icon"/>
              <h3>Maintenance</h3>
              <p>
                Ensuring your renewable energy systems operate at peak performance, our maintenance services keep your investment secure.
              </p>
            </div>
            <div className='services-icons'>
              <FaBroom className="service-icon"/>
              <h3>Panel Cleaning</h3>
              <p>
                Enhancing the longevity and effectiveness of your solar panels, our cleaning services guarantee optimal energy output.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='bridge'>
        <div>
            <h2>Have an Emergency?</h2>
            <p>Frustrated by unplanned blackouts in 
              your area? Give us a call and we can arrange backup system 
              designed for your house or workplace.
            </p>
            <NavLink to="/Contact" ><button >Contact Us</button></NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ServicesPage;
