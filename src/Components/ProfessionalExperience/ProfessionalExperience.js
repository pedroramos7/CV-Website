import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ProfessionalExperience.css';

const jobData = [
  {
    title: "Junior Frontend Software Engineer",
    company: "Nonius",
    details: "10/2023 – 05/2024",
    location: "Porto, Portugal",
    description: "I work in the development of a groundbreaking Flutter application designed to revolutionize the hospitality experience. This app was conceived as a holistic solution, incorporating a suite of innovative features tailored to meet the evolving needs of both hospitality providers and their guests."
  },
  {
    title: "Rockstar Developer",
    company: "Critical Techworks",
    details: "05/2024 – ",
    location: "Porto, Portugal",
    description: "Working BMW app, need to add more details here!"
  }
];

function ProfessionalExperience() {
  const [expandedJobIndex, setExpandedJobIndex] = useState(null);

  const toggleDetails = (index) => {
    if (expandedJobIndex === index) {
      setExpandedJobIndex(null);
    } else {
      setExpandedJobIndex(index);
    }
  };

  return (
    <div id="Professional-Experience" className="ProfessionalExperience-section">
      <h2 className="ProfessionalExperience-title">Professional Experience</h2>
      <div className="ProfessionalExperience-content">
        {jobData.map((job, index) => (
          <div key={index} className="Job-entry">
            <div className="Job-header">
              <h3 className="Company-name">{job.company}</h3>
              <div className="Job-role-container">
                <h3 className="Job-role">{job.title}</h3>
                <button onClick={() => toggleDetails(index)} className="toggle-button">
                  {expandedJobIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>
              {expandedJobIndex === index && (
                <div className="Job-details">
                  <span>{job.details}</span> <br />
                  <span>{job.location}</span>
                </div>
              )}
            </div>
            <div className="Job-resume">
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalExperience;
