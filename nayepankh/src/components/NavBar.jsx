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
          <Link to="/Home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/certificate">Certificates</Link>
          <Link to="/news">News Recognition</Link>
          <div className='it' onClick={openContactModal}>Contact Us</div>
        </div>
      </div>
      <ContactUs isOpen={isContactModalOpen} onRequestClose={closeContactModal} />
    </div>
  );
};

export default NavBar;
