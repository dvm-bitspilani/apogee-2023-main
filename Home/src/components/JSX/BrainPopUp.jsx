import { Html } from "@react-three/drei";
import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../App";
import "../CSS/BrainPopup.css";
import { SpinContext } from "./Brain";

export default function BrainPopUp(props) {
  const modal = useContext(ModalContext);
  const spin = useContext(SpinContext);
  const elemRef = useRef();
  const elemInterval = useRef(
    document.getElementsByClassName("brainPopupCircle-cont")[props.idx]
  );

  const elemIntervalFn = () => {
    if (elemRef.current.style.zIndex >= 8383310) {
      const elem = elemRef.current.querySelector(".brainPopupCircle");
      const elemClass = elem.classList;
      if (elemClass.contains("noclick")) {
        elem.classList.remove("noclick");
      }
      const elemRect = elem.getBoundingClientRect();
      modal.updateModal(props.modal);
      modal.setLabels(props.modal.getValue().toLowerCase(), true);
      props.modal.setLoc(
        (elemRect.left + elemRect.right) / 2,
        (elemRect.top + elemRect.bottom) / 2
      );
    } else {
      modal.setLabels(props.modal.getValue().toLowerCase(), false);
      const elem = elemRef.current.querySelector(".brainPopupCircle");
      const elemClass = elem.classList;
      if (!elemClass.contains("noclick")) {
        elem.classList.add("noclick");
      }
    }
  };

  useEffect(() => {
    elemRef.current = document.getElementsByClassName("brainPopupCircle-cont")[
      props.idx
    ];
  }, []);

  useEffect(() => {
    if (modal.displayModal) {
      console.log("CLEAR");
      clearInterval(elemInterval.current);
    } else {
      console.log("SET");
      elemInterval.current = setInterval(elemIntervalFn, 50);
    }
  }, [modal.displayModal]);

  return (
    <Html
      occlude="blending"
      wrapperClass="brainPopupCircle-cont"
      position={props.position}
      transform
      distanceFactor={0.5}
      rotation-x={props.rotation[0]}
      rotation-y={props.rotation[1]}
      rotation-z={props.rotation[2]}
      onOcclude={() => {
        console.log("OCCLUDE");
      }}
    >
      <div
        className="brainPopupCircle ptr"
        onClick={() => {
          modal.updateModal(props.modal);
          modal.setLabels(props.modal.getValue().toLowerCase(), false);
          modal.setDisplayModal(true);
        }}
        onMouseEnter={() => {
          spin.stopSpin();
        }}
        onMouseLeave={() => {
          spin.startSpin();
        }}
      ></div>
    </Html>
  );
}
