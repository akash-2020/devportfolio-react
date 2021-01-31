import React from "react";
import "../ParticleBackground/particleContainer.css";
import Particles from "react-particles-js";
import { particleJsonProps } from "./particle";

function Name() {
  return (
    <div>
      <div className="div__1">
        {/* Content within this div__1 should have total height of 100vh */}
        <Particles
          className="particle__div"
          params={particleJsonProps}
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
      </div>
    </div>
  );
}

export default Name;
