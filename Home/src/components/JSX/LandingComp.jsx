import React, { useEffect, useState } from "react";
import apogeelogo from "../../assets/apogeelogo.svg";
import styles from "../CSS/landing.module.css";
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

export default function LandingComp(props) {
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

  return (
    <div>
      <div className={styles.navbar}>
        <img src={apogeelogo} className={styles.apogeeLogo} />
        {matches && <Switch scroll={props.scroll} />}
        {/* {matches && <Button />} */}
        <Button />
      </div>

      <div className={styles.countDown}>
        {/* {!matches && <Button />} */}
        <Countdown />
      </div>

      <div className={styles.heroFoot}>{links}</div>
      {props.allowScroll && (
        <div className="footer scroll" onClick={scroll}>
          <i className="fa fa-arrow-down" />
        </div>
      )}
    </div>
  );
}
