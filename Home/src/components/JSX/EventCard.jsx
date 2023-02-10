import React from "react";
import styles from "../CSS/EventCard.module.css";

function EventCard({ event, index, img, name }) {
  return (
    <div className={styles.card} onClick={event} data-key={index}>
      <img className={styles.eventImage} src={img} />
      <div className={styles.info}>{`${index}. ${name}`}</div>
    </div>
  );
}

export default EventCard;
