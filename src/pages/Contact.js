import React from "react";
import "../styles.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Feel free to get in touch with me through the following channels:</p>


      <div className="contact-info">
        <ul>
          <li>Email: <a href="mailto:raajeshvelusamy@gmail.com">raajeshvelusamy@gmail.com</a></li>
          <li>Phone: <a href="tel:+919788160277">+91-9788160277</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/raajesh-kumaar-n-v-558b642a2/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          <li>GitHub: <a href="https://github.com/RaajeshKumaar17" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
