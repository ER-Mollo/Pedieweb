// src/pages/AboutPage.js
import React from 'react';
import MenuBar from '../components/Menubar';
import './AboutPage.css';
import logo from '../assets/light.jpg';
import image4 from '../assets/image5.jpg';
import pv from '../assets/pv.jpg'
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/footer';



function AboutPage() {
  return (
    <div className='about'>
      <MenuBar />
      <div className='top-about'>
        <div>
          <h1>Learn About Us</h1>
        </div>
      </div>
      <div className='story' >
        <div className='story-left' style={{padding:'30px'}}> 
          <h5>Our Story</h5>
          <h3>stablished in 2020 after seeing the need for <br></br>solutions to the power crisis in S.A, 
            as Pedipedi<br></br> we intend to serve and be among the best.</h3>
          <p>Our  reason  for  existing  is  to  use  our  skills &experience we already have to develop projects  
            with  strong  value propositions  for  our  clients  that  utilize  sustainable  renewable-energy  
            that  is  accessible, cleaner &more efficient-in  order  to  conserve  our  natural  resources  </p>
        </div>
        <div className='story-right'>
          <img src={logo} className='logo'/>
        </div>
      </div>
      <div className='story'>
      <div className='story-right'>
          <img src={image4} className='plug'/>
        </div>
        <div className='story-left bottom'> 
          <h3 className='white'>We provide alternative solutions to your energy problems</h3>
          <p className='white'>Our  reason  for  existing  is  to  use  our  skills &experience 
             to develop projects  with  strong  value propositions  for  our  clients  
             that  utilize  sustainable  renewable-energy  that  is  accessible, cleaner &more efficient-in  order  to  conserve  our  natural  resources  and  preserve  the  environment
               while  promoting socio-economic development </p>
        </div>
        
      </div>

      <div className='mission'>
        <div className='mission-left'>
          <h1>Our Mission</h1>
          <p>We would like to make energy crisis a thing of the
             past and renewable energy, a normal way for everyday living to both the rich and poor.</p>
          <p>
          Africa has access to the sun and we intend to harness its energy to power our infrastructure,
           agriculture and productions and Pedipedi will be among the front runners.
          </p>
        </div>
        <div className='mission-right'>
            <div>
              <h1>Core Values</h1>
              <div className='mission-values'>
                <div>
                  <FaCheckCircle/>
                </div>
                <nav>Consider honesty as the key to a business’ trustworthiness and integrity.</nav>
              </div>
              <div className='mission-values'>
              <div>
                  <FaCheckCircle/>
                </div>
                <nav>Always do the right thing to solve the customer’s problem.</nav>
              </div>
              <div className='mission-values'>
              <div>
                  <FaCheckCircle/>
                </div>
                <nav>Perform all work with the highest level of excellence in mind.</nav>
              </div>

            </div>
        </div>
      </div>
      <div className='story'>
        <div className='story-left bottom'> 
        <h1 style={{color:"white"}}>Core Values</h1>
            <p style={{color:"white"}}>We show you our appreciation by going above and beyond, ensuring 
              a flawless experience. We can be your top choice toda</p>
        <div className='mission-values'>
            <div>
                <FaCheckCircle color='white'/>
            </div>
            <nav style={{color:"white"}}>APVIA and Green Card accredited technicians</nav>
        </div>
        <div className='mission-values'>
          <div>
              <FaCheckCircle color='white'/>
          </div>
          <nav style={{color:"white"}}>Honest and flat-rate pricing</nav>
          </div>
          <div className='mission-values'>
            <div>
              <FaCheckCircle color='white'/>
            </div>
            <nav style={{color:"white"}}>100% satisfaction guaranteed</nav>
          </div>
          <div className='mission-values'>
            <div>
              <FaCheckCircle color='white'/>
            </div>
            <nav style={{color:"white"}}>Wide service area</nav>
          </div>
          <div className='mission-values'>
            <div>
              <FaCheckCircle color='white'/>
            </div>
            <nav style={{color:"white"}}>tailor-made systems for each client's needs</nav>
          </div>
   
        </div>
        <div className='story-right'>
          <img src={pv} className='plug'/>
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

export default AboutPage;
