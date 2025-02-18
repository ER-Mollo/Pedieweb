// src/pages/ServicesPage.js
import React from 'react';
import MenuBar from '../components/Menubar';
import './ServicesPage.css'


function ServicesPage() {
  return (
    <div>
      <MenuBar />
      <div className='top-service'>
        <div>
          <h1>Our Services</h1>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
