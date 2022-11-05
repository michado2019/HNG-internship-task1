import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  //Set inputs state
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    textarea: "",
  });

  const [style, setStyle] = useState(false);

  //Handle Focus
  const handleFocus = () => {
    document.getElementById("email").style.borderColor = "#84CAFF";
  };

  //Handle change
  function handleChange(e) {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    if (inputs === {}) setStyle((prev) => !prev);
  }

  const name = "Adeshina Michael";
  return (
    <div className="contactWrapper">
      <h1 className="contactTitle">Contact Me</h1>
      <p className="contactDetails">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <form className="contactForm">
        <label htmlFor="first_name" className="contactForm-labels">
          First name
        </label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="contactInput"
          id="first_name"
          name="firstName"
          onChange={handleChange}
          value={inputs.firstName}
          style={{ borderColor: style ? "#11111" : "#d0d5dd" }}
        />
        <sub>Please, enter your first name</sub>
        <label htmlFor="Last_name" className="contactForm-labels">
          Last name
        </label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="contactInput"
          id="last_name"
          name="lastName"
          onChange={handleChange}
          value={inputs.lastName}
          style={{ color: style ? "#111111" : "#111111" }}
        />
        <sub>Please, enter your last name</sub>
        <label htmlFor="email" className="contactForm-labels">
          Email
        </label>
        <input
          type="text"
          placeholder="yourname@gmail.com"
          className="contactInput"
          id="email"
          name="email"
          onChange={handleChange}
          value={inputs.email}
          onFocus={handleFocus}
        />
        <sub>Please, enter your first email</sub>
        <label htmlFor="message" className="contactForm-labels">
          Message
        </label>
        <textarea
          placeholder="Send me a message and I&#39;ll reply as soon as possible"
          className="contactInput"
          id="message"
          name="textarea"
          onChange={handleChange}
          value={inputs.textarea}
          style={{ borderColor: inputs ? "#F83F23" : "#555555" }}
        />
        <sub style={{ color: inputs ? "red" : "" }}>
          Please, enter a message
        </sub>
        <input type="checkbox" id="checkbox" name="" value="" />
        <label htmlFor="checkbox" className="contactForm-labels" id="text_area">
          You agree to providing your data to <span id="name">{name}</span> who
          may contact you.
        </label>
        <button className="contactInput" id="btn__submit">
          Send message
        </button>
      </form>
    </div>
  );
}