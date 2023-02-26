import React from "react";
import styles from "../CSS/EventsBox.module.css";

export default function EventsBox() {
  return (
    <div className={styles.box}>
      <div className={styles.boxLeft}></div>
      <div className={styles.boxRight}>
        <div className={styles.bars}>
          {Array(5)
            .fill()
            .map((e, idx) => (
              <div
                key={idx}
                className={styles.bar}
                style={{
                  "--delay": `${Math.random()}s`,
                  "--duration": `${Math.random() * 2 + 5}s`,
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
