import React, { useState, useEffect } from "react";
import "../Experience/experiences.css";
import { experiences__Data } from "../addData";

function Experiences() {
  const [experiences, setexperiences] = useState([]);
  useEffect(() => {
    setexperiences(experiences__Data);
  }, []);
  return (
    <div id="experiences">
      <div class="experiences">
        <h1 class="experiences__heading">Experiences</h1>
        <div class="mainExperiences__div">
          {experiences.map((val) => (
            <p>
              <i class="fa fa-bolt" aria-hidden="true"></i>
              {val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
