import React, { useState, useEffect } from "react";
import "../Contact/contact.css";
// import { contact__Data } from "../components/contactData";
import { aboutMeData, contact__Data } from "../addData";

function Contact() {
  const [contact, setcontact] = useState([]);
  useEffect(() => {
    setcontact(contact__Data);
  }, []);
  return (
    <div id="contact">
      <div class="contact">
        <h1 class="contact__heading">Reach Out To Me</h1>
        <div class="mainContact__div">
          {contact.map((val) => [
            <p>{val.message}</p>,
            <p>{val.identity}</p>,
            <p>
              <svg
                viewBox="0 0 12 16"
                version="1.1"
                width="20"
                height="18"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                />
              </svg>
              {val.location}
            </p>,
            <p>{val.status}</p>,
          ])}
        </div>
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
      </div>
    </div>
  );
}

export default Contact;
