import React, { useEffect, useState } from "react";
import styles from "../CSS/About.module.css";
// import InstagramEmbed from 'react-instagram-embed';

const VIDEOS = [
  {
    link: "https://www.youtube.com/embed/Mdhw5tI7HgE",
    title: "Curtain Raiser",
  },
  { link: "https://www.youtube.com/embed/JIhKL_G7SOk", title: "Theme Release" },
];

function About(props) {
  const [index, setIndex] = useState(0);
  const [circles, setCircles] = useState([]);

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

  const [videos, setVideos] = useState([]);
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
    <div className={styles.container}>
      <div className={styles.videos} onClick={evt => evt.stopPropagation()}>
        {videos}
        {/* <InstagramEmbed
          url='https://www.instagram.com/reel/CowweEEjDp2/?igshid=MDJmNzVkMjY='
          clientAccessToken='572780784817908|f1feab82a841be1b4aaf80b0b37d4e48'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => { }}
          onSuccess={() => { }}
          onAfterRender={() => { }}
          onFailure={() => { }}
        /> */}
        </div>

      <div className={styles.about} onClick={evt => evt.stopPropagation()}>
        <div className={styles.heading} onClick={evt => evt.stopPropagation()}>
          <span>ABOUT US</span>

          <div className={styles.topAsset}>
            <img src="/events/left.png" />
            <img src="/events/middle.png" />
            <img src="/events/right.png" />
          </div>
        </div>

        <div className={styles.text}>
          BITS Pilani, India is back with the 41st edition of APOGEE(A
          Professions Oriented Gathering over Educational Experiences)- the
          institute's annual technical extravaganza, from 31st March to 3rd April
          2023, this time as A Hivemind Genesis! A melange of technology,
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

        <div className={styles.bottomAsset}>
          {circles.map((e, i) => (
            <img key={i} src={`/events/${e ? "" : "un"}filled.png`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
