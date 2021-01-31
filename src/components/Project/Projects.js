import React, { useState, useEffect } from "react";
import "../Project/projects.css";
import { projectData } from "../addData";

function Card() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(projectData);
  }, []);

  return (
    <div id="projects">
      <div className="projects">
        <h1 className="projects__heading">Projects</h1>
        <div className="mainProject__div">
          {project.map((val) => (
            <div
              className="project__div"
              onClick={() => {
                val.url ? window.open(val.url, "_blank") : void 0;
              }}
            >
              <h3 className="projectName">
                <i class="fab fa-github"></i> {val.name}
              </h3>
              <h3 className="projectDescription">
                description: {val.description}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Card;
