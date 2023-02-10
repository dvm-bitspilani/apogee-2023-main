import { Html } from "@react-three/drei";
import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../../App";
import "../CSS/BrainPopup.css";
import { SpinContext } from "./Brain";

export default function BrainPopUp({ modal, position, rotation, index }) {
  const sContext = useContext(SpinContext),
    mContext = useContext(ModalContext);

  const circleRef = useRef(),
    intervalRef = useRef(null);

  const elementIntervalFxn = () => {
    if (circleRef.current.style.zIndex >= 8383310) {
      const circle = circleRef.current.querySelector(".brainPopupCircle");

      circle?.classList.contains("noclick") &&
        circle?.classList.remove("noclick");

      mContext.updateModal(modal);
      mContext.setLabels(modal.getValue().toLowerCase(), true);

      const circleGBCR = circle?.getBoundingClientRect();
      modal.setLoc(
        (circleGBCR.left + circleGBCR.right) / 2,
        (circleGBCR.top + circleGBCR.bottom) / 2
      );
    } else {
      mContext.setLabels(modal.getValue().toLowerCase(), false);

      const circle = circleRef.current.querySelector(".brainPopupCircle");
      !circle?.classList.contains("noclick") &&
        circle?.classList.add("noclick");
    }
  };

  useEffect(() => {
    circleRef.current = document.getElementsByClassName(
      "brainPopupCircle-cont"
    )[index];
  }, []);

  useEffect(() => {
    mContext.displayModal
      ? clearInterval(intervalRef.current)
      : (intervalRef.current = setInterval(elementIntervalFxn, 50));
  }, [mContext.displayModal]);

  return (
    <Html
      transform
      occlude="blending"
      wrapperClass="brainPopupCircle-cont"
      position={position}
      distanceFactor={0.5}
      rotation-x={rotation[0]}
      rotation-y={rotation[1]}
      rotation-z={rotation[2]}
      onOcclude={() => console.log("OCCLUDE")}
    >
      <div
        className="brainPopupCircle ptr"
        onMouseEnter={() => sContext.stopSpin()}
        onMouseLeave={() => sContext.startSpin()}
        onClick={() => {
          mContext.updateModal(modal);
          mContext.setDisplayModal(true);
          mContext.setLabels(modal.getValue().toLowerCase(), false);
        }}
      />
    </Html>
  );
}
