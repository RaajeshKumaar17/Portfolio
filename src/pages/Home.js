import React from "react";
import { Link } from "react-router-dom"; 
import "../styles.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay">
        <div className="hero-content">
          <img src={profileImage} alt="Raajesh Kumaar" className="profile-img" />
          <h1>Raajesh Kumaar N V</h1>
          <h2>MERN Stack Developer</h2>
          <p>
            Passionate about building scalable web applications with React, Node.js, Express, and MongoDB.
          </p>
        
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
