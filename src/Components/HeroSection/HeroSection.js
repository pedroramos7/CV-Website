import React from 'react';
import backgroundImage from '../../images/background.jpg'; // Update the path to your image
import './HeroSection.css'; 
import ProfileSection from '../ProfileSection/ProfileSection';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="background-image-part" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ProfileSection />
      </div>
      <div className="white-background-part">
      </div>
    </div>
  );
}

export default HeroSection;
