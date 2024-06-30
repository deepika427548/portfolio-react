import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};

    if (!formData.name.trim()) {
      validationError.name = "name is required";
    }
    if (!formData.email.trim()) {
      validationError.email = "email is required";
    } else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(formData.email)) {
      validationError.email = "invalid email";
    }
    if (!formData.message.trim()) {
      validationError.message = "message is required";
    } else if (!/^.{10,1000}$/.test(formData.message)) {
      validationError.message =
        "Message must be at least 10 characters long and can only contain letters, numbers, spaces, periods, and hyphens.";
    }
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      alert("form submitted successfully");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm excited to connect and discuss how we can bring your ideas to
            life!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>deepadinesh@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+999-666-456</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>kerala,india</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-right" action="">
          <label htmlFor="">Your name</label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            onChange={handleChange}
          />
          {error.name && <span>{error.name}</span>}
          <label htmlFor="">Your email</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter your email"
            name="email"
          />
          {error.email && <span>{error.email}</span>}
          <label htmlFor="">Write your message here</label>
          <textarea
            onChange={handleChange}
            name="message"
            rows="8"
            id=""
          ></textarea>
          {error.message && <span>{error.message}</span>}
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
