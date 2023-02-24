import React, { useEffect, useRef, useState } from "react";
import dummy from "../../assets/dummy.png";
import styles from "../CSS/Events.module.css";
import EventCard from "./EventCard";

function Events(props) {
  const [mainEvent, setMainEvent] = useState([]);
  const [categories, setCategories] = useState([]);

  let info = useRef(null);
  let list = useRef(null);
  let container = useRef(null);

  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 650px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 650px)")
      .addEventListener("change", e => setMatches(e.matches));

    setEvents();
    async function setEvents() {
      const EVENT_URL = "https://bits-apogee.org/registrations/events/";

      try {
        const res = await fetch(EVENT_URL, { method: "GET" });
        const events = await res.json();

        setMainEvent(events.data[0].events[0]);

        setCategories(
          events.data
            .filter(c => c.category_name != "Speakers")
            .map(c => ({
              name: c?.category_name,
              show: false,
              events: c?.events.map((e, i) => (
                <EventCard
                  key={i + 1}
                  event={() => {
                    setMainEvent(e);

                    if (matches) {
                      list.style.display = "none";
                      info.style.display = "block";
                      container.style.height = "auto";
                    }
                  }}
                  index={i + 1}
                  img={e.image_url}
                  name={e.name}
                />
              )),
            }))
        );
      } catch (e) {}
    }
  }, []);

  function toggle(index) {
    setCategories(
      categories.map((c, i) => ({
        ...c,
        show: i === index ? !c?.show : c?.show,
      }))
    );
  }

  function showList() {
    if (matches) {
      list.style.display = "block";
      info.style.display = "none";
      container.style.height = "100vh";
    }
  }

  function removeTags(str) {
    if (str === null || str === "") return null;
    else str = str?.toString();
    return str?.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <div>
      {/* <div
        className={styles.heading}
        onClick={evt => {
          evt.stopPropagation();
        }}
      >
        EVENTS
      </div> */}
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
              <img
                className={styles.eventImage}
                src={
                  mainEvent?.image_url !== "NA"
                    ? `https://bits-apogee.org${mainEvent?.image_url}`
                    : dummy
                }
              />
            </div>

            <div className={styles.eventDetails}>
              <div className={styles.eventName}>
                {removeTags(mainEvent?.name) ?? "Not Yet Announced"}
              </div>

              <div className={styles.details}>DETAILS</div>
              <div className={styles.text}>
                {removeTags(mainEvent?.about) ?? "N/A"}
              </div>

              <div className={styles.details}>GUIDELINES</div>
              <div className={styles.text}>
                {removeTags(mainEvent?.rules) ?? "N/A"}
              </div>

              <div className={styles.details}>CONTACT US</div>
              <div className={styles.text}>
                {"Mayan Agrawal - +91 9423527868"}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={el => (list = el)}
          className={styles.list}
          onClick={evt => evt.stopPropagation()}
        >
          <div className={styles.carousel}>
            <div className={styles.dropdown}>
              {categories.map((c, i) => (
                <div
                  key={i}
                  onClick={() => toggle(i)}
                  className={styles.dropdownItem}
                >
                  <img src="/events/dropdown.png" />
                  <span>{c?.name + " >"}</span>
                  {c?.show ? (
                    <div className={styles.dropdownEvents}>{c?.events}</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
