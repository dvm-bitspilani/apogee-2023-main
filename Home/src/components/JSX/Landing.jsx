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

const ICONS = [
  [<FbIcon />, "https://www.facebook.com/bitsapogee/"],
  [<InstaIcon />, "https://instagram.com/bitsapogee"],
  [<YtIcon />, "https://www.youtube.com/@OasisBITS"],
];

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
        <a key={i} href={e[1]} rel="noreferrer" target="_blank">
          {e[0]}
        </a>
      ))
    );
  }, []);

  let contact = document.getElementById('contactUs')
  function scroll() {
    contact.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={styles.wrapper}>
      <Canvas onContextMenu={e => e.preventDefault()} id="canvas-wrapper">
        <Brain />
      </Canvas>

      <div className={styles.navbar}>
        <img src={apogeelogo} className={styles.apogeeLogo} />
        {matches && <Switch scroll={props.scroll} />}
        {matches && <Button />}
      </div>

      <div className={styles.countDown}>
        {!matches && <Button />}
        <Countdown />
      </div>

      <div className={styles.heroFoot}>{links}</div>
      {props.allowScroll && <div className="footer scroll" onClick={scroll}>
        <i className="fa fa-arrow-down" />
      </div>}
    </div>
  );
}

export default Landing;
