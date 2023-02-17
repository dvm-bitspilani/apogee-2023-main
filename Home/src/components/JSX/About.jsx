import React, { useEffect, useState } from "react";
import styles from "../CSS/About.module.css";

const VIDEOS = [
  { link: "https://www.youtube.com/embed/VGvwFZaREM0", title: "Theme Reveal" },
  { link: "https://www.youtube.com/embed/VGvwFZaREM0", title: "Theme Reveal" },
];

function About(props) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    setVideos(
      VIDEOS.map((e, i) => (
        <div key={i} className={styles.videoContainer}>
          <div className={styles.video}>
            <iframe
              width="auto"
              height="auto"
              src={e.link}
              title={e.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className={styles.videoDesc}>{e.title}</div>
        </div>
      ))
    );
  }, []);

  return (
    <div
      className={styles.container}
      style={props.loaded ? { display: "flex" } : { display: "none" }}
    >
      <div className={styles.videos} onClick={evt => evt.stopPropagation()}>
        {videos}
      </div>

      <div className={styles.about} onClick={evt => evt.stopPropagation()}>
        <div className={styles.heading} onClick={evt => evt.stopPropagation()}>
          ABOUT US
        </div>

        <div className={styles.text}>
          BITS Pilani, India is back with the 40th edition of APOGEE(A
          Professions Oriented Gathering over Educational Experiences)- the
          institute's annual technical extravaganza, from 7th to 10th April
          2022, this time as The Encrypted Dimension! A melange of technology,
          innovation and inspiration across space and time of humankind, this
          technical conference will, as always, play host to the brightest minds
          and thinkers in the country and world. From presenting papers and
          projects at the oldest-of-its-kind events in the country, developing
          amazing solutions to real-life cases and problems, exhibitions of the
          best contraptions that man has made, guest lectures that tell stories
          never heard before, to the college's own literature festival, APOGEE
          challenges the intellect of the participants and piques the minds of
          the audience.
        </div>
      </div>
    </div>
  );
}

export default About;
