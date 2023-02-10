import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import apogeelogo from "../../assets/apogeelogo.png";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import Button from "./Button";
import Countdown from "./Countdown";
import FbIcon from "./FbIcon";
import InstaIcon from "./InstaIcon";
import Switch from "./Switch";
import YtIcon from "./YtIcon";

function Landing() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 450px)")
      .addEventListener("change", e => setMatches(e.matches));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Canvas onContextMenu={e => e.preventDefault()} id="canvas-wrapper">
        <Brain />
      </Canvas>

      <div className={styles.navbar}>
        <img src={apogeelogo} className={styles.apogeeLogo} />
        {/* <Switch/> */}
        {matches && <Button />}
      </div>

      <div className={styles.countDown}>
        {!matches && <Button />}
        <Countdown />
      </div>

      <div className={styles.heroFoot}>
        <a
          href="https://www.facebook.com/bitsapogee/"
          rel="noreferrer"
          target="_blank"
        >
          <FbIcon />
        </a>

        <a
          href="https://instagram.com/bitsapogee"
          rel="noreferrer"
          target="_blank"
        >
          <InstaIcon />
        </a>

        <a
          href="https://www.youtube.com/@OasisBITS"
          rel="noreferrer"
          target="_blank"
        >
          <YtIcon />
        </a>
      </div>
    </div>
  );
}

export default Landing;
