import React from "react";
import "../styles.css"; // Ensure this file has necessary styles
import profileImg from "../assets/profile.jpg"; // Add your image in assets folder

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile Image */}
        <img src={profileImg} alt="Raajesh Kumaar N V" className="profile-img" />

        {/* Personal Details */}
        <h1>Raajesh Kumaar N V</h1>
        <h2>MERN Stack Developer | IoT & Embedded Systems Enthusiast</h2>
        <p>
          I am currently pursuing an Engineering degree and specialize in Web Development, IoT, 
          and Image Processing. Passionate about building interactive applications and solving real-world 
          problems using technology.
        </p>

        <h3>Skills & Technologies</h3>
        <ul className="skills-list">
          <li>⚡ MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
          <li>⚡ IoT & Embedded Systems (Arduino, Raspberry Pi, ESP32)</li>
          <li>⚡ Image Processing (OpenCV, Python, MATLAB)</li>
          <li>⚡ API Development & Database Management</li>
          <li>⚡ Git, GitHub</li>
        </ul>

      
        <h3>Achievements & Certifications</h3>
        <ul className="achievements-list">
          <li>🏆 Inplant training at Codebind Technologies (Embedded Systems)</li>
          <li>🏆 NPTEL IoT Exam – 86% (Elite Silver Certification)</li>
          <li>🏆 Presented paper at Bannari Amman Institute of Technology</li>
          <li>🏆 Completed Internship at NSIC Chennai</li>
        </ul>

       
        <h3>Highlighted Projects</h3>
        <ul className="projects-list">
          <li>
            <strong>Portfolio Website:</strong> A personal portfolio to showcase my skills & projects.  
            <span className="tech-stack"> [React.js, CSS, GitHub Pages] </span>
          </li>
          <li>
            <strong>Web-based Quiz Application:</strong> A gamified quiz platform fetching questions from an API.  
            <span className="tech-stack"> [React.js, Express.js] </span>
          </li>
          <li>
            <strong>BMI Calculator:</strong> A user-friendly Body Mass Index calculator.  
            <span className="tech-stack"> [JavaScript, React.js] </span>
          </li>
          <li>
            <strong>Imaging-based Water Quality Assessment:</strong> A system to analyze water quality using image processing techniques.  
            <span className="tech-stack"> [Python, OpenCV, AI] </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
