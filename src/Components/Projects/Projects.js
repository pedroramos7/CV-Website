import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Projects.css'

function ProjectItem({ title, dateLocation, description }) {
    const [showDate, setShowDate] = useState(false);

  return (
    <div className='Project-item'>
      <h3 className='Job-title'>{title}
        <button onClick={() => setShowDate(!showDate)} className="toggle-button">
            {showDate ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </h3>
      {showDate && (
        <div className="Job-details">
          {dateLocation}
        </div>
      )}
      <p className='Job-resume'>{description}</p>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects-section" className='Projects-section'>
      <h2 className='Projects-title'>Projects</h2>
      <div className='Projects-content'>
        <ProjectItem 
          title="Dissertation - Characterization and Identification of Industrial Objects from Image Data"
          dateLocation={<><span>10/2023 – 03/2024</span><br/><span>Porto, Portugal</span></>}
          description="Development and testing of deep learning algorithms in Python for object detection."
        />
        <ProjectItem 
        title="Software Project - Online Store"
        dateLocation={<><span>2021 – 2022</span><br/><span>Porto, Portugal</span></>}
        description="Project developed in Java with object-oriented programming, aimed at
        creating a website for a potential online store."
      />
      <ProjectItem 
        title="Production Line Automation"
        dateLocation={<><span>2020 – 2021</span><br/><span>Porto, Portugal</span></>}
        description="Production Line Control developed in Unity Pro software, following the
        IEC 61131-3 standard. Supervisory Control and Data Acquisition
        (SCADA) systems designed in Winlog software."
      />
      <ProjectItem 
        title="Arduino Project - Blind Control"
        dateLocation={<><span>2020 – 2021</span><br/><span>Porto, Portugal</span></>}
        description="Project developed using Arduino for the automatic control of a blind."
      />
      </div>
    </div>
  );
}

export default Projects;
