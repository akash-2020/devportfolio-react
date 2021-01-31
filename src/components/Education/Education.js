import React, { useState, useEffect } from "react";
import "../Education/education.css";
import { education__Data } from "../addData";

function Education() {
  const [education, seteducation] = useState([]);
  useEffect(() => {
    seteducation(education__Data);
  }, []);
  return (
    <div id="education">
      <div class="education">
        <h1 class="education__heading">Education</h1>
        <div class="mainEducation__div">
          {education.map((val) => (
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

export default Education;
