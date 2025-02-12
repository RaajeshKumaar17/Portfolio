import React from "react";
import "../styles.css";

const projects = [
  {
    title: "React Login System",
    description:
      "A secure and responsive login system built with React.js and Firebase authentication.",
    link: "https://github.com/RaajeshKumaar17/React-Login.git",
  },
  {
    title: "Web-Based Quiz App with Gamification",
    description:
      "A quiz application developed with React.js (frontend) and Express.js (backend), featuring real-time API integration and gamification.",
    link: "https://quiz-app-frontend-n887.onrender.com",
  },
  {
    title: "BMI Calculator",
    description:
      "A BMI calculator that helps users determine their BMI category based on height and weight.",
      link: "https://bmicalculator1717.netlify.app/",
  },
  {
    title: "Weather Project",
    description:
      "A weather application that provides real-time weather data for any city, including temperature, humidity, wind speed, and forecasts, using the OpenWeather API.",
    link: "https://github.com/RaajeshKumaar17/NEM-Weather",  
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive and animated portfolio website built with React.js, showcasing projects and skills.",
      
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
