import React from "react";
import dummy from "../../assets/dummy.png";
import styles from "../CSS/Events.module.css";
import EventCard from "./EventCard";

function Events() {
  return (
    <div>
      <div
        className={styles.heading}
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        EVENTS
      </div>
      <div
        className={styles.container}
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        <div className={styles.info}>
          <div className={styles.content}>
            <div className={styles.image}>
              <img className={styles.eventImage} src={dummy} />
            </div>
            <div className={styles.eventDetails}>
              <div className={styles.eventName}>Tarang</div>
              <div className={styles.details}>DETAILS</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi
              </div>
              <div className={styles.details}>GUIDELINES</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className={styles.details}>CONTACT US</div>
              <div className={styles.text}>Sejal Agarwal - 93580XXXXX</div>
            </div>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.carousel}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
