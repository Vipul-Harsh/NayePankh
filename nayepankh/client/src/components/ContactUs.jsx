import React, { useState } from "react";
import Modal from "react-modal";
import "./NavBar.css";
import axios from "axios"
Modal.setAppElement("#root");

const ContactUs = ({ isOpen, onRequestClose }) => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
const {name,email,message}=formData;

   if(name&&email&&message){
    axios.post("http://localhost:8080/send", formData).then((res) => {
      console.log("Contact form submitted successfully");
    }).catch((error) => {
      alert("Contact form submission failed. Please try again.");
    });
  } else {
    alert("Invalid contact form data. Please fill in all fields.");
  }
   
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        <div className="partition-1">
          <h2>Contact Us</h2>
          <form className="fff" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group">
              <input
              name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
              name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message you want to convey"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
        <div className="partition-2">
          <h1 className="hover-text">
            WITH GOOD TEAM WE WORK TOWARDS EXELLENCE..
          </h1>
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;
