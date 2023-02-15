import { Canvas } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import LandingElements from "./LandingElements";


function Landing(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 450px)").matches
  );

  const [links, setLinks] = useState([]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 450px)")
      .addEventListener("change", e => setMatches(e.matches));

    setLinks(
      ICONS.map((e, i) => (
        <a
          key={i}
          href={e[1]}
          style={i == 2 ? { transform: "translateX(2px) scale(1.2)" } : {}}
          rel="noreferrer"
          target="_blank"
        >
          {e[0]}
        </a>
      ))
    );
  }, []);

  let contact = document.getElementById("contactUs");
  const scroll = () => contact.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      className={styles.wrapper}
      style={props.loaded ? { display: "block" } : { display: "none" }}
    >
      <Canvas onContextMenu={e => e.preventDefault()} id="canvas-wrapper">
        <Brain />
      </Canvas>

      <LandingElements scroll={props.scroll} allowScroll={props.allowScroll} />
    </div>
  );
}

export default Landing;
