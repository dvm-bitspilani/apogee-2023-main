import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import LandingComp from "./LandingComp";


function Landing(props) {

  let contact = document.getElementById("contactUs");
  const scroll = () => contact.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={styles.wrapper} style={props.loaded ? {display: 'block'} : {display: 'none'}}>
      <Canvas onContextMenu={e => e.preventDefault()} id="canvas-wrapper">
        <Brain />
      </Canvas>

      <LandingComp scroll={props.scroll} allowScroll={props.allowScroll} />
    </div>
  );
}

export default Landing;
