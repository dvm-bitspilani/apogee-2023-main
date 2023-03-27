import React from "react";
import styles from "../CSS/EventCard.module.css";
import dummy from "../../assets/dummySide.png";

function EventCard({ event, index, img, name }) {
  return (
    <div className={styles.card} onClick={event} data-key={index}>
      <img
        className={styles.eventImage}
        src={img && img !== "NA" ? `https://bits-apogee.org/${img}` : dummy}
      />
      <div className={styles.info}>{`${index}. ${name}`}</div>
    </div>
  );
}

export default EventCard;
