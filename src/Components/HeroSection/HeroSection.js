import React from 'react';
import backgroundImage from '../../images/background.jpg'; // Update the path to your image
import './HeroSection.css'; 
import ProfileSection from '../ProfileSection/ProfileSection';
import ProfileFirstText from '../ProfileFirstText/ProfileFirstText';
import Aboutme from '../Aboutme/Aboutme';
import ProfessionalExperience from '../ProfessionalExperience/ProfessionalExperience';
import Projects from '../Projects/Projects';

function HeroSection() {
  return (
  <>
    <div className="hero-section">
      <div className="background-image-part" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ProfileSection />
      </div>
    </div>
    <div className='white-background-part'>
      <ProfileFirstText />
    </div>
    <div className='About-me'>
      <Aboutme />
    </div>
    <div className='Professional-Experience'>
      <ProfessionalExperience />
    </div>
    <div className='Projects'>
      <Projects />
    </div>

  </>
  );
}

export default HeroSection;
