import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import LandingElements from "./LandingElements";

function Landing(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  );

  const [links, setLinks] = useState([]);

  let contact = document.getElementById("contactUs");
  const scroll = () => contact.scrollIntoView({ behavior: "smooth" });
  const modalContext = useContext(ModalContext);

  return (
    <div
      className={styles.wrapper}
      style={props.loaded ? { display: "block" } : { display: "none" }}
    >
      <Canvas onContextMenu={e => e.preventDefault()} id="canvas-wrapper">
        <Brain />
      </Canvas>

      <LandingElements snap={scrollSnap} scroll={props.scroll} allowScroll={props.allowScroll} />
    </div>
  );
}

export default Landing;
