import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerSection-one">
        <a href="https://github.com/michado2019" target="_blank" rel="noreferrer">
          <img src='images/slackLogo.png' alt="logo" id="slackLogo" />
        </a>
        <a href="https://github.com/michado2019" target="_blank" rel="noreferrer">
          <img src='images/Icongithub.png' alt="logo" id="githubLogo" />
        </a>
      </div>
      <div className="footerSection-two">
        <h2 className="footerSection-two_title">Zuri<span className="dot">.</span>Internship</h2>
        <p className="footerSection-two_details">
          HNG Internship 9 Frontend Task
        </p>
        <img src='images/I4G.png' alt="logo" id="footerZuri-logo" />
      </div>
    </div>
  );
}
