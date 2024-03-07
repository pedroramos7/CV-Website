import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../images/CV-Pedro.jpg'; 
import './ProfileSection.css';

function ProfileSection() {
  return (
    <div className="profile-container">
      <img src={profileImage} alt="Profile" className="profile-image"/>
      <div className="profile-text">
        <h2>Pedro Miguel Ramos</h2>
        <p>Frontend Software Engineer</p>
        <a href="https://www.linkedin.com/in/pedroramos07" className="linkedin-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}

export default ProfileSection;
