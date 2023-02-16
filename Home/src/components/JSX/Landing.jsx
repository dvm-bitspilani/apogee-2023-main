import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../App";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import LandingElements from "./LandingElements";
import Switch from "./Switch";

import FbIcon from "./FbIcon";
import InstaIcon from "./InstaIcon";
import YtIcon from "./YtIcon";

const ICONS = [
  [<FbIcon />, "https://www.facebook.com/bitsapogee/"],
  [<InstaIcon />, "https://instagram.com/bitsapogee"],
  [<YtIcon />, "https://www.youtube.com/@OasisBITS"],
];

function Landing(props) {
  const [matchesPhone, setMatchesPhone] = useState(
    window.matchMedia("(min-width: 500px)").matches
  );

  let contact = document.getElementById("contactUs");
  const scroll = () => contact.scrollIntoView({ behavior: "smooth" });
  const modalContext = useContext(ModalContext);

  useEffect(() => {
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", e => setMatchesPhone(e.matchesPhone));
  });

  return (
    <div
      className={styles.wrapper}
      style={props.loaded ? { display: "block" } : { display: "none" }}
    >
      <Canvas id="canvas-wrapper">
        <Brain />
      </Canvas>

      {matchesPhone && <Switch scroll={props.scroll} />}
      {!modalContext.is2D ? (
        <div className={styles.landingWrapper}>
          <LandingElements
            scroll={props.scroll}
            allowScroll={props.allowScroll}
            is2D={modalContext.is2D}
            set2D={modalContext.set2D}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Landing;
