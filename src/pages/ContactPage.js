import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Footer from "../components/footer";
import MenuBar from "../components/Menubar";
import { NavLink } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
console.log("here");

    emailjs
      .send(
        "service_2pqf4re", // Replace with your EmailJS Service ID
        "template_oelkf7t", // Replace with your EmailJS Template ID
        formData,
        "3o8VT4QTju8SngZkn" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div>
      <MenuBar />
      <div className="top-contact">
        <div>
          <h1>Connect With Us</h1>
        </div>
      </div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have any questions or inquiries? Feel free to reach out to us.</p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={sendEmail}>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <FaPhone className="icon" /> +27 79 842 0219
            </p>
            <p>
              <FaEnvelope className="icon" /> info@pedipedienergy.co.za
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> 586, Benin Street Kempton Park
            </p>
          </div>
        </div>
      </div>
      <div className="bridge">
        <div>
          <h2>Have an Emergency?</h2>
          <p>
            Frustrated by unplanned blackouts in your area? Give us a call and
            we can arrange a backup system designed for your house or workplace.
          </p>
          <NavLink to="/Contact" ><button >Contact Us</button></NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
