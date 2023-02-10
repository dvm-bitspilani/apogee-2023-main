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
      <div className="labelLine1"></div>
      <div className="labelLine2"></div>
      <div className="labelBox-cont">
        <div
          className="labelBox"
          onClick={() => {
            mContext.updateModal(modal);
            mContext.setLabels(modalValue.toLowerCase(), false);
            mContext.setDisplayModal(true);
          }}
        >
          <div className="labelHeader">{modalValue}</div>
          <div className="labelCont">
            <h2>{modalValue}</h2>
          </div>
          <div className="labelCont">
            <h3>Click to view</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
