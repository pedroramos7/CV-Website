import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import font awesome chevron icons
import './ProfessionalExperience.css';

function ProfessionalExperience() {
  // State to manage the visibility of the date
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div id="Professional-Experience" className='ProfessionalExperience-section'>
      <h2 className='ProfessionalExperience-title'>Professional Experience</h2>
      <div className='ProfessionalExperience-content'>
        <div className='Job-title'>
          <h3>
            Junior Frontend Software Engineer
            {/* Toggle button */}
            <button onClick={() => setShowDetails(!showDetails)} className="toggle-button">
              {showDetails ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </h3>
          {/* Conditional rendering based on showDetails state */}
          {showDetails && (
            <h3 className="Job-details"> 
              10/2023 – 03/2024  <br/> Porto, Portugal 
            </h3>
          )}
        </div>
        <div className='Job-resume'>
          <p>
            I work in the development of a groundbreaking Flutter application designed to revolutionize the hospitality experience. 
            This app was conceived as a holistic solution, incorporating a suite of innovative features tailored to meet the evolving needs of both 
            hospitality providers and their guests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalExperience;
