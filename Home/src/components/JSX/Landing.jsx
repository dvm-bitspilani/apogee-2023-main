import React from "react";
import Brain from "./Brain";
import Button from "./Button";
import Countdown from "./Countdown";
import styles from "../CSS/landing.module.css";
import { Canvas } from "@react-three/fiber";

import fb from "../../assets/fb.svg";
import yt from "../../assets/youtube.svg";
import ig from "../../assets/igBlue.svg";
import apogeelogo from "../../assets/apogeelogo.png";

function Landing() {
  return (
    <div className={styles.wrapper}>
      <Canvas id="canvas-wrapper">
        <Brain />
      </Canvas>

      <div className={styles.navbar}>
        <img src={apogeelogo} className={styles.apogeeLogo} />
        <Button />
      </div>

      <div className={styles.countDown}>
        <Countdown />
      </div>

      <div className={styles.heroFoot}>
        <img src={fb} />
        <img src={ig} className={styles.blue} />
        <img src={yt} />
      </div>
    </div>
  );
}

export default Landing;
