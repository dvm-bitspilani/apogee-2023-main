import React, { useEffect, useRef, useState } from "react";
import dummy from "../../assets/dummy.png";
import styles from "../CSS/Events.module.css";
import EventCard from "./EventCard";

function Events() {
  const [eventsArr, setEventsArr] = useState([]);
  const [dispEvent, setDispEvent] = useState(0);
  const [mainEvent, setMainEvent] = useState([]);

  let info = useRef(null);
  let list = useRef(null);
  let container = useRef(null);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", e => setMatches(e.matches));
  });

  useEffect(() => {
    getEvents();
  }, []);

  const EVENT_URL = "https://bits-apogee.org/registrations/events/";

  const getEvents = async () => {
    try {
      let res = await fetch(EVENT_URL, { method: "GET" });
      let events = await res.json();
      let eventData = events.data[0];
      let evtArr = eventData.events.map(event => {
        return {
          img: event.img_url,
          name: event.name,
          desc: event.details,
          guidelines: event.rules,
          contact: event.contact,
        };
      });
      setEventsArr(evtArr);
      setMainEvent(evtArr[0]);
    } catch (e) {
      console.log(e);
      alert("NETWORK ERROR!");
    }
  };

  function changeEvent(e) {
    setDispEvent(e.target.innerText[0] - 1);

    if (matches) {
      list.style.display = "none";
      info.style.display = "block";
      container.style.height = "auto";
    }
  }

  function showList() {
    if (matches) {
      list.style.display = "block";
      info.style.display = "none";
      container.style.height = "100vh";
    }
  }

  useEffect(() => {
    setMainEvent(eventsArr[dispEvent]);
  }, [dispEvent]);

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
      <div ref={el => (container = el)} className={styles.container}>
        <div
          ref={el => (info = el)}
          className={styles.info}
          onClick={evt => {
            evt.stopPropagation();
            showList();
          }}
        >
          <div className={styles.content}>
            <div className={styles.image}>
              <img className={styles.eventImage} src={dummy} />
            </div>
            <div className={styles.eventDetails}>
              <div className={styles.eventName}>
                {mainEvent === undefined ? "DEFAULT" : mainEvent.name}
              </div>
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
        <div
          ref={el => (list = el)}
          className={styles.list}
          onClick={evt => {
            evt.stopPropagation();
          }}
        >
          <div className={styles.carousel}>
            {eventsArr.map((e, i) => (
              <EventCard
                key={i + 1}
                event={changeEvent}
                index={i + 1}
                img={e.img}
                name={e.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
