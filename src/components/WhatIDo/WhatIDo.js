import React, { useState, useEffect } from "react";
import "../WhatIDo/whatIDo.css";
import WhatIDoData, { whatIDo__Data } from "../WhatIDoData/WhatIDoData";

function WhatIDo() {
  const [whatido, setWhatido] = useState([]);
  useEffect(() => {
    setWhatido(whatIDo__Data);
  }, []);
  return (
    <div id="whatIDo">
      <div className="whatIDo">
        <h1 className="whatIDo__heading">What I Do</h1>
        <div className="mainWhatIDo__div">
          {whatido.map((val) => (
            <p>
              <i class="fa fa-bolt" aria-hidden="true"></i>
              {val}
            </p>
          ))}
        </div>
        <div className="whatIDo__icons">
          <WhatIDoData />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
