import React from "react";
import "./Contact.css";

export default function Contact() {
  const name = "Adeshina Michael";
  return (
    <div className="contactWrapper">
      <h1 className="contactTitle">Contact Me</h1>
      <p className="contactDetails">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="contactForm">
        <label htmlFor="first_name">Form name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="contactInput"
          id="first_name"
        />
        <label htmlFor="Last_name">Last name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="contactInput"
          id="last_name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="yourname@gmail.com"
          className="contactInput"
          id="email"
        />
        <label htmlFor="message">Message</label>
        <textarea placeholder="Send me a message and I&#39;ll reply as soon as possible" className="contactInput" id='message' />
        <label htmlFor="checkbox">You agree to providing your data to <span id='name'>{name}</span> who may contact you.</label>
        <input type="checkbox" id="checkbox" name="" value="" />
        <button className="contactInput" id='btn__submit'>Send message</button>
      </form>
    </div>
  );
}
