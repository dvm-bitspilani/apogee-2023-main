import React from "react";
import styles from "../CSS/EventsBox.module.css";
import boxL from '../../assets/events/eventsboxL.svg';
import boxR from '../../assets/events/eventsboxR.svg';

export default function EventsBox() {
  return (
    <div className={styles.box}>
      <div className={styles.boxLeft}>
        {/* <img className={styles.boxLImg} src={boxL} alt="" /> */}
      </div>
      <div className={styles.boxRight}>
        {/* <img className={styles.boxRImg} src={boxR} alt="" /> */}
        <div className={styles.bars}>
            <div className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
            <div className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
            <div className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
            <div className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
            <div className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
        </div>
      </div>
    </div>
  );
}
