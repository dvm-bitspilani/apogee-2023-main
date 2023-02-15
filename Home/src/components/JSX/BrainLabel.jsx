import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";
import "../CSS/BrainLabel.css";

export default function BrainLabel({ modal }) {
  const mContext = useContext(ModalContext);
  const modalValue = modal.getValue().toUpperCase();

  const isMounted = useRef(false);
  const [textStates, setTextStates] = useState(Array(12).fill(0));

  useEffect(() => {
    if (isMounted.current) {
      if (textStates !== Array(13).fill(4)) {
        const newTextState = textStates.map(val => {
          if (val === 1) {
            return Math.random() > 0.75 ? 2 : 1;
          } else if (val > 1 && val < 4) {
            return val + 1;
          }
          return val;
        });
        setTimeout(() => {
          setTextStates(newTextState);
        }, Math.random() * 50 + 50);
      }
    } else {
      setTimeout(() => {
        isMounted.current = true;
        setTextStates(Array(13).fill(1));
      }, 900);
    }
  }, [textStates]);

  return (
    <div
      className="brainLabel"
      style={{ left: modal.loc[0], top: modal.loc[1] }}
    >
      <div className="labelLine1" />
      <div className="labelLine2" />
      <div className="labelBox-cont ptr">
        <div
          className="labelBox"
          onClick={() => {
            mContext.updateModal(modal);
            mContext.setDisplayModal(true);
            mContext.setLabels(modalValue.toLowerCase(), false);
          }}
        >
          <div className="labelHeader">{modalValue}</div>
          {/* <div className="labelCont">{`<h2>${modalValue}</h2>`}</div>
          <div className="labelCont">{`<div>Click to view</div>`}</div> */}
          <div className="labelCont">
            {textStates.map((elem, idx) => (
              <span className={`state-${elem}`} key={idx}>
                {"Click to view"[idx]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
