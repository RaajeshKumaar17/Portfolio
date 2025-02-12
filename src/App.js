import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <AutoRedirect /> {/* Place AutoRedirect here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Separate AutoRedirect component inside Router
function AutoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/Portfolio") {
      navigate("/"); // Redirect to home page
    }
  }, [navigate]);

  return null;
}

export default App;
