import React from 'react';
import './ProfileFirstText.css'; // Make sure this path is correct

function ProfileFirstText() {
    const scrollToInterests = () => {
      document.getElementById("aboutme-section").scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div className="profile-first-text">
      <p>Welcome to my professional portfolio! This website serves as a gateway to my career journey, showcasing my skills, experiences, and achievements. Feel free to explore and learn more about me, my work, and what I can bring to your team. Thank you for visiting!</p>
      
      <button onClick={scrollToInterests} className="about-me-button">About me</button>

    </div>
  );
}

export default ProfileFirstText;
