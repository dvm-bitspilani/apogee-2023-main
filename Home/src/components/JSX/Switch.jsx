import React, { useContext, useRef } from "react";
import { ModalContext } from "../../App";
import "../CSS/Switch.css";

const Switch = props => {
  const switch1 = useRef(null);
  const switch2 = useRef(null);
  const modalContext = useContext(ModalContext);

  const toggleActive1 = () => {
    switch2.current.classList.remove("active");
    switch1.current.classList.add("active");
  };

  const toggleActive2 = () => {
    switch1.current.classList.remove("active");
    switch2.current.classList.add("active");
  };

  return (
    <div className="switchContainer" onClick={props.scroll}>
      <div
        ref={switch1}
        className={`switch ${modalContext.is2D && "active"}`}
        onClick={() => {
          toggleActive1();
          modalContext.set2D(true);
        }}
      >
        2D
      </div>

      <div
        ref={switch2}
        className={`switch ${!modalContext.is2D && "active"}`}
        onClick={() => {
          toggleActive2();
          modalContext.set2D(false);
        }}
      >
        Explore 3D
      </div>
    </div>
  );
};

export default Switch;
