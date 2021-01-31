import "./App.css";
import Projects from "./components/Project/Projects.js";
import ParticleContainer from "./components/ParticleBackground/ParticleContainer";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";
import AboutMe from "./components/About/AboutMe";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Experiences from "./components/Experience/Experiences";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { introData } from "../src/components/addData";

function App() {
  return (
    <div className="App">
      <ParticleContainer />
      <Navbar />
      <Introduction
        devFirstName={introData.fname}
        devLastName={introData.lname}
        devType={introData.devType}
      />
      <AboutMe />
      <WhatIDo />
      <Experiences />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
