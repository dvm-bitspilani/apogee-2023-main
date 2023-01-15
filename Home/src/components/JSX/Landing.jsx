import React from "react";
import Brain from "./Brain";
import Button from "./Button";
import Countdown from "./Countdown";
import styles from "../CSS/landing.module.css";
import apogeelogo from "../../assets/apogeelogo.png"
import fb from "../../assets/fb.svg"
import yt from "../../assets/youtube.svg"
import ig from "../../assets/igBlue.svg"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Landing() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src={apogeelogo} className={styles.apogeeLogo} />
        <Button />
      </div>
      <div className={styles.countDown}>
        <Countdown/>
      </div>
      <Canvas id="canvas-wrapper">
        <Suspense fallback={null}>
          <Brain />
        </Suspense>
      </Canvas>
      <div className={styles.heroFoot}>
        <img src={fb}/>
        <img src={ig} className={styles.blue}/>
        <img src={yt}/>
      </div>
    </div>
  )
}

export default Landing
