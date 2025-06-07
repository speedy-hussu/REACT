import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div className="parent-contact">
      <section className="contact-container">
        <h1 className="contact-heading">Contact Me</h1>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            required
          />
          <button type="submit" className="contact-button">
            Send Message ✉️
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
