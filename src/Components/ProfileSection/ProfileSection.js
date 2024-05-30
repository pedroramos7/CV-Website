import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../../images/CV-Pedro.jpg'; 
import backgroundImage from '../../images/background.jpg'; 
import './ProfileSection.css';

function ProfileSection() {

  const scrollToInterests = () => {
    document.getElementById("aboutme-section").scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section" style={{ 
      backgroundImage: `url(${backgroundImage})` 
    }}>
      <img src={profileImage} alt="Pedro Ramos" className="profile-image"/>
      <div className="profile-text">
        <h2>Pedro Miguel Ramos</h2>
        <p>Frontend Software Engineer</p>
        <div>
          <a href="https://www.linkedin.com/in/pedroramos07" className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/pedroramos7" className="social-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <p className="welcome-paragraph">
        Welcome to my professional portfolio! This website serves as a gateway to my career journey, showcasing my skills, experiences, and achievements. Feel free to explore and learn more about me, my work, and what I can bring to your team. Thank you for visiting!
      </p>
      <button onClick={scrollToInterests} className="about-me-button">About me</button>
    </div>
  );
}

export default ProfileSection;
