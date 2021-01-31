import React from "react";
import "../Introduction/introduction.css";

function Introduction({ devFirstName, devLastName, devType }) {
  return (
    <div className="introduction__main">
      <div className="introduction">
        <h1 className="devName devFirstName">{devFirstName}</h1>
        <h1 className="devName devLastName">{devLastName}</h1>
        <h3 className="devType">{devType}</h3>
        <a href="#" class="btnResume">
          Download Resume
        </a>
      </div>
      <div id="lead-down">
        <span>
          <a href="#about-me">
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </span>
      </div>
    </div>
  );
}

export default Introduction;
