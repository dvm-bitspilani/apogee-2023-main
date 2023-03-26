import { ModalContext } from "../../App";
import "../CSS/BrainLabel.css";
import React, { useContext, useEffect, useRef, useState } from "react";

const text = "<Apogee>Click to view</Apogee>";
const LENGTH = text.length;

export default function BrainLabel({ modal }) {
  const mContext = useContext(ModalContext);
  const modalValue = modal.getValue().toUpperCase();

  const isMounted = useRef(false);
  const [textStates, setTextStates] = useState(Array(LENGTH).fill(0));

  useEffect(() => {
    if (isMounted.current) {
      if (textStates !== Array(LENGTH).fill(4)) {
        const newTextState = textStates.map(e => {
          if (e === 1) return Math.random() > 0.75 ? 2 : 1;
          else if (e > 1 && e < 4) return e + 1;
          else return e;
        });

        setTimeout(() => setTextStates(newTextState), Math.random() * 20 + 15);
      }
    } else {
      setTimeout(() => {
        isMounted.current = true;
        setTextStates(Array(LENGTH).fill(1));
      }, 750);
    }
  }, [textStates]);

  return (
    <div
      className="brainLabel"
      style={{
        left: isNaN(modal.loc[0]) ? 0 : modal.loc[0],
        top: isNaN(modal.loc[1]) ? 0 : modal.loc[1],
      }}
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
          <div className="labelCont">
            {textStates.map((elem, idx) => (
              <span className={`state-${elem}`} key={idx}>
                {text[idx]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
