import React, { useState } from "react";
import Modal from "react-modal";
import "./NavBar.css";
Modal.setAppElement("#root");

const ContactUs = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Contact Us Modal"
        className="contact-modal"
        overlayClassName="modal-overlay"
      >
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter Message you want to convey"
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <button className="close-button" onClick={onRequestClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default ContactUs;
