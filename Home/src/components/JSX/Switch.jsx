import React, { useRef } from "react";
import "../CSS/Switch.css";

function Switch(props) {
  let switch1 = useRef(null);
  let switch2 = useRef(null);

  const toggleActive = () => {
    switch2.classList.toggle("active");
    switch1.classList.toggle("active");
  };

  return (
    <div className="switchContainer" onClick={props.scroll}>
      <div ref={el => (switch1 = el)} className="switch" onClick={toggleActive}>
        2D
      </div>

      <div
        ref={el => (switch2 = el)}
        className="switch active"
        onClick={toggleActive}
      >
        Explore 3D
      </div>
    </div>
  );
}

export default Switch;
