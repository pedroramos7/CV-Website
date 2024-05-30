import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css';

function ProjectItem({ title, details, location, description }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='Project-item'>
      <div className='Project-header'>
        <h3 className='Project-title'>
          {title}
          <button onClick={() => setShowDetails(!showDetails)} className="toggle-button">
            {showDetails ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h3>
        {showDetails && (
          <div className="Project-details">
            <p>{details}</p>
            <p>{location}</p>
          </div>
        )}
      </div>
      <p className='Project-description'>{description}</p>
    </div>
  );
}

export default ProjectItem;
