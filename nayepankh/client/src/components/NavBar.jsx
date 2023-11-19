import React, { useState } from "react";
import "./NavBar.css";
import logo from "../Assets/bird-colorful-gradient-design-vector_343694-2506_1_-removebg-preview.png";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs"; // Import your ContactModal component

const NavBar = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="parent">
      <div className="navbar">
        <div className="logo"><img src={logo} className="logo_img" alt="Logo" /></div>
        <div className="links">
          <Link to="/Home" className="nn">Home</Link>
          <Link to="/about" className="nn">About Us</Link>
          <Link to="/certificate" className="nn">Certificates</Link>
          <Link to="/news" className="nn">News Recognition</Link>
          <Link to="/review" className="nn">Reviews</Link>

          <div className='it nn' onClick={openContactModal}>Contact Us</div>
<Link to="/login"  className="nn">Login</Link>
        </div>
      </div>
      <ContactUs isOpen={isContactModalOpen} onRequestClose={closeContactModal} />
    </div>
  );
};

export default NavBar;
