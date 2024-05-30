import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [rotate, setRotate] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    setRotate(!rotate);
  };

  // Function to handle smooth scrolling and menu toggle
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsNavVisible(false); // Close the menu after clicking
    setRotate(false); // Reset the rotation of the hamburger icon
  };

  return (
    <div className="header">
      <h1 className="name-title">Pedro Ramos</h1>
      <div className="header-right-content">
        <button className={`nav-toggle ${rotate ? 'rotated' : ''}`} onClick={toggleNav}>
          ☰
        </button>
        <div className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
          <a onClick={() => handleNavigation('aboutme-section')} href="#about">About</a>
          <a onClick={() => handleNavigation('Professional-Experience')} href="#experience">Experience</a>
          <a onClick={() => handleNavigation('Projects-section')} href="#projects">Projects</a>
          <a onClick={() => handleNavigation('contact-section')} href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
