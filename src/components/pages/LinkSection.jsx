import React from "react";
import "./LinkSection.css";
import { Link } from "react-router-dom";

export default function LinkSection() {
  return (
    <div className="linkSection-wrapper">
      <a
        href="https://twitter.com/Mike_Adeshina"
        id="btn__twitter"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Twitter Link
      </a>
      <a
        href="https://training.zuri.team/"
        id="btn__zuri"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Team
      </a>
      <a
        href="http://books.zuri.team"
        id="books"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Zuri Books
      </a>
      <a
        href="https://books.zuri.team/python-for-beginners?ref_id=michado21"
        id="book_python"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Python Book
      </a>
      <a
        href="https://backgroundcheck.zuri.team"
        id="pitch"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Background Check for Coders
      </a>
      <a
        href="https://books.zuri.team/design-rules"
        id="book_design"
        className="ZuriLinks"
        target="_blank"
        rel="noreferrer"
      >
        Design Books
      </a>
      <Link
        href="/contact"
        id="contact"
        className="ZuriLinks"
      to='contact'>
        Contact Me
      </Link>
    </div>
  );
}
