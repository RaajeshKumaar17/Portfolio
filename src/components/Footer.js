import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import "../styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Portfolio. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/raajesh_kumaar_17/" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://www.facebook.com/raajesh.kumaar.7/" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} />
        </a>
        <a href="https://x.com/RaajeshN" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/raajesh-kumaar-n-v-558b642a2/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="https://github.com/RaajeshKumaar17" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
