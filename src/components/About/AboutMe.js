import React from "react";
import "../About/aboutMe.css";
import { aboutMeData } from "../addData";

function AboutMe() {
  return (
    <div id="about-me">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              Hi all, I'm {aboutMeData.name}
              <span className="wave-emoji">
                <img
                  alt="👋"
                  draggable="false"
                  src="https://twemoji.maxcdn.com/2/72x72/1f44b.png"
                />
              </span>
            </h1>
            <p className="greeting-text-p subTitle">
              {aboutMeData.description}
            </p>
            <div className="social-media-div">
              <a
                href={aboutMeData.githubUrl}
                className="icon-button github"
                target="_blank"
              >
                <i className="fab fa-github"></i>
                <span></span>
              </a>
              <a
                href={aboutMeData.linkedinUrl}
                className="icon-button linkedin"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
                <span></span>
              </a>
              <a
                href={aboutMeData.gmail}
                className="icon-button google"
                target="_blank"
              >
                <i className="fab fa-google"></i>
                <span></span>
              </a>
              <a
                href={aboutMeData.instagramUrl}
                className="icon-button instagram"
                target="_blank"
              >
                <i class="fab fa-instagram insta-icon"></i>
                <span></span>
              </a>
            </div>
            {/* <div className="button-greeting-div">
              <div>
                <a
                  class="main-button"
                  href="mailto:aakashbrahmbhatt31@gmail.com"
                >
                  Contact me
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
