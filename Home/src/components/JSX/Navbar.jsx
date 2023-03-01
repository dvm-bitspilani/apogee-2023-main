import React, { useContext } from "react";
import styles from "../CSS/Navbar.module.css";
import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";
import dummy from "../../assets/navbarDummy.png";

function Navbar() {
  const mContext = useContext(ModalContext);
  return (
    <div className={styles.container}>
      <div className={styles.bar}>{/* <img src={dummy}/> */}</div>
      <div className={styles.names}>
        <div
          onClick={() => {
            mContext.updateModal(Modal.About);
            mContext.setLabels(Modal.About.getValue().toLowerCase(), false);
            mContext.setDisplayModal(true);
          }}
        >
          ABOUT US
        </div>
        <div
          onClick={() => {
            mContext.updateModal(Modal.Event);
            mContext.setLabels(Modal.Event.getValue().toLowerCase(), false);
            mContext.setDisplayModal(true);
          }}
        >
          EVENTS
        </div>
        <div
          onClick={() => {
            mContext.updateModal(Modal.Speaker);
            mContext.setLabels(Modal.Speaker.getValue().toLowerCase(), false);
            mContext.setDisplayModal(true);
          }}
        >
          SPEAKERS
        </div>
        <div
          onClick={() => {
            mContext.updateModal(Modal.Contact);
            mContext.setLabels(Modal.Contact.getValue().toLowerCase(), false);
            mContext.setDisplayModal(true);
          }}
        >
          CONTACT US
        </div>
      </div>
    </div>
  );
}

export default Navbar;
