import React from "react";
import styles from "../CSS/EventsBox.module.css";
import boxL from '../../assets/events/eventsboxL.svg';
import boxR from '../../assets/events/eventsboxR.svg';

export default function EventsBox() {
  return (
    <div className={styles.box}>
      <div className={styles.boxLeft}>
      </div>
      <div className={styles.boxRight}>
        <div className={styles.bars}>
            {Array(5)
            .fill()
            .map(idx => (<div key={idx} className={styles.bar} style={{"--delay": `${Math.random()}s`, "--duration": `${Math.random()*2 + 5}s`}}></div>
            ))}
        </div>
      </div>
    </div>
  );
}
