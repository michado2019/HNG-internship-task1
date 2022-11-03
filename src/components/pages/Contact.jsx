import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contactWrapper">
      <h1 className="contactTitle">Contact Me</h1>
      <p className="contactDetails">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="contactForm">
        <input
          type="text"
          placeholder="Enter your first name"
          className="contactInput"
          id="first_name"
        />
        <input
          type="text"
          placeholder="Enter your last name"
          className="contactInput"
          id="last_name"
        />
        <input
          type="text"
          placeholder="yourname@gmail.com"
          className="contactInput"
          id="email"
        />
      </form>
    </div>
  );
}
