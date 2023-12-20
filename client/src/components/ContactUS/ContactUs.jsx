// ContactUs.js

import React from 'react';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="title">Contact Us</h1>
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
