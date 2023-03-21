import React, { useContext, useEffect, useState } from "react";
import styles from "../CSS/Navbar.module.css";
import { ModalContext } from "../../App";
import Modal from "../../enums/Modal";

function Navbar() {
  const mContext = useContext(ModalContext);
  const [bar, setBar] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setIndex(index => (index + 1) % 46), 400);
  }, [index]);

  useEffect(() => {
    setBar(Array.from(document.getElementById("bar").children));
  }, []);

  useEffect(() => {
    if (bar != null) {
      bar.forEach((e, i) => {
        if (i == index) e.classList.toggle("blue");
      });
    }
  }, [bar, index]);

  return (
    <div className={styles.container}>
      <div id="bar" className={styles.bar}>
        <div className={styles.big} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.big} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.big} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.mid} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.small} />
        <div className={styles.big} />
      </div>

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
