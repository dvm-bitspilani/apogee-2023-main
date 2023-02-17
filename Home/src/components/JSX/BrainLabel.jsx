import { ModalContext } from "../../App";
import "../CSS/BrainLabel.css";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function BrainLabel({ modal }) {
  const mContext = useContext(ModalContext);
  const modalValue = modal.getValue().toUpperCase();
  const text = `<print> Click to view </print>`;

  const isMounted = useRef(false);
  const [textStates, setTextStates] = useState(Array(text.length).fill(0));

  useEffect(() => {
    if (isMounted.current) {
      if (textStates !== Array(text.length).fill(4)) {
        const newTextState = textStates.map(e => {
          if (e === 1) return Math.random() > 0.75 ? 2 : 1;
          else if (e > 1 && e < 4) return e + 1;
          else return e;
        });

        setTimeout(() => setTextStates(newTextState), Math.random() * 20 + 15);
      }
    } else
      setTimeout(() => {
        isMounted.current = true;
        setTextStates(Array(text.length).fill(1));
      }, 750);
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
          <div className="labelCont">
            {textStates.map((e, i) => (
              <span className={`state-${e}`} key={i}>
                {text[i]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
