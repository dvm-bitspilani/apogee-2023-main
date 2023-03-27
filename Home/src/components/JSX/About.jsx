import React, { useEffect, useState } from "react";
import styles from "../CSS/About.module.css";
import left from "../../assets/events/left.png";
import middle from "../../assets/events/middle.png";
import right from "../../assets/events/right.png";
import filled from "../../assets/events/filled.png";
import unfilled from "../../assets/events/unfilled.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import useScrollVis from "../../hooks/useScrollVis";

const VIDEOS = [
  {
    link: "https://www.youtube.com/embed/Mdhw5tI7HgE",
    title: "Curtain Raiser",
  },
  { link: "https://www.youtube.com/embed/JIhKL_G7SOk", title: "Theme Release" },
];

function About(props) {
  const { height, width } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [circles, setCircles] = useState([]);
  const [videos, setVideos] = useState([]);
  const visClass = useScrollVis(props.idx, props.pages, props.scrollDir);

  useEffect(() => {
    setCircles(
      Array(15)
        .fill(true)
        .map(e => e)
    );
  }, []);

  useEffect(() => {
    setCircles(
      Array(15)
        .fill()
        .map((e, i) => (i <= index ? true : false))
    );

    setTimeout(() => setIndex((index + 1) % 15), 600);
  }, [index]);

  useEffect(() => {
    setVideos(
      VIDEOS.map((e, i) => (
        <div key={i} className={styles.videoContainer}>
          <div className={styles.video}>
            <div className={styles.iframeContainer}>
              <iframe
                width="auto"
                height="auto"
                src={e.link}
                title={e.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.videoDesc}>{e.title}</div>
        </div>
      ))
    );
  }, []);

  return (
    <div className={`${styles.container} ${visClass}`}>
      <div className={styles.videos} onClick={evt => evt.stopPropagation()}>
        {width < 500 && (
          <div
            className={styles.heading}
            onClick={evt => evt.stopPropagation()}
          >
            <span>VIDEOS</span>
          </div>
        )}

        {videos}
      </div>

      <div className={styles.about} onClick={evt => evt.stopPropagation()}>
        <div className={styles.heading} onClick={evt => evt.stopPropagation()}>
          <span>ABOUT US</span>

          <div className={styles.topAsset}>
            <img src={left} alt="<<" />
            <img src={middle} alt="o" />
            <img src={right} alt=">>" />
          </div>
        </div>

        <div className={styles.text}>
          {width > 500
            ? "BITS Pilani, India is back with the 41st edition of APOGEE (A Professions Oriented Gathering over Educational Experiences) - the institute's annual technical extravaganza, from 31st March to 3rd April 2023, this time as A Hivemind Genesis! A melange of technology, innovation and inspiration across space and time of humankind, this technical conference will, as always, play host to the brightest minds and thinkers in the country and world. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college's own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience."
            : "BITS Pilani, India is back with the 41st edition of APOGEE (A Professions Oriented Gathering over Educational Experiences) - the institute's annual technical extravaganza, from 31st March to 3rd April 2023, this time as A Hivemind Genesis! From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college's own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience."}
        </div>

        <div className={styles.bottomAsset}>
          {circles.map((e, i) => (
            <img key={i} src={e ? filled : unfilled} alt="🔵" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
