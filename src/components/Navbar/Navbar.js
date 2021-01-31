import React from "react";
import "../Navbar/navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <ul>
        <li>
          <a href="#about-me">About</a>
        </li>
        <li>
          <a href="#whatIDo">Skills</a>
        </li>
        <li>
          <a href="#experiences">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
