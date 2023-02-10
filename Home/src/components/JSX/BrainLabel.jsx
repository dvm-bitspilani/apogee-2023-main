import React, { useContext } from "react";
import { ModalContext } from "../../App";
import "../CSS/BrainLabel.css";

export default function BrainLabel({ modal }) {
  const mContext = useContext(ModalContext);
  const modalValue = modal.getValue().toUpperCase();
  return (
    <div
      className="brainLabel"
      style={{ left: modal.loc[0], top: modal.loc[1] }}
    >
      <div className="labelLine1" />
      <div className="labelLine2" />
      <div className="labelBox-cont">
        <div
          className="labelBox"
          onClick={() => {
            mContext.updateModal(modal);
            mContext.setDisplayModal(true);
            mContext.setLabels(modalValue.toLowerCase(), false);
          }}
        >
          <div className="labelHeader">{modalValue}</div>
          <h2>{modalValue}</h2>
          <h3>Click the dot to view</h3>
        </div>
      </div>
    </div>
  );
}
