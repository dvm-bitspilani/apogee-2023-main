import React, { useContext, useRef } from "react";
import { ModalContext } from "../../App";
import "../CSS/Switch.css";

function Switch(props) {
  const switch1 = useRef(null);
  const switch2 = useRef(null);
  const modalContext = useContext(ModalContext);

  const toggleActive = () => {
    switch2.current.classList.toggle("active");
    switch1.current.classList.toggle("active");
  };

  return (
    <div className="switchContainer" onClick={props.scroll}>
      <div
        ref={switch1}
        className="switch"
        onClick={() => {
          toggleActive();
          modalContext.set2D(true);
        }}
      >
        2D
      </div>

      <div
        ref={switch2}
        className="switch active"
        onClick={() => {
          toggleActive();
          modalContext.set2D(false);
        }}
      >
        Explore 3D
      </div>
    </div>
  );
}

export default Switch;
