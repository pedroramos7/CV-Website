import React from 'react';
import ProjectItem from './ProjectItem';
import './Projects.css';

const projectData = [
  {
    title: "Dissertation - Characterization and Identification of Industrial Objects from Image Data",
    details: "10/2023 – 03/2024",
    location: "Porto, Portugal",
    description: "Development and testing of deep learning algorithms in Python for object detection."
  },
  {
    title: "Software Project - Online Store",
    details: "2021 – 2022",
    location: "Porto, Portugal",
    description: "Project developed in Java with object-oriented programming, aimed at creating a website for a potential online store."
  },
  {
    title: "Production Line Automation",
    details: "2020 – 2021",
    location: "Porto, Portugal",
    description: "Production Line Control developed in Unity Pro software, following the IEC 61131-3 standard. Supervisory Control and Data Acquisition (SCADA) systems designed in Winlog software."
  },
  {
    title: "Arduino Project - Blind Control",
    details: "2020 – 2021",
    location: "Porto, Portugal",
    description: "Project developed using Arduino for the automatic control of a blind."
  }
];

function Projects() {
  return (
    <div id="Projects-section" className='Projects-section'>
      <h2 className='Projects-title'>Projects</h2>
      <div className='Projects-content'>
        {projectData.map((project, index) => (
          <ProjectItem 
            key={index}
            title={project.title}
            details={project.details}
            location={project.location}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
