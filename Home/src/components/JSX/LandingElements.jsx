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

export default function LandingElements(props) {
  const [matchesTab, setMatchesTab] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );

  const [matchesPhone, setMatchesPhone] = useState(
    window.matchMedia("(min-width: 500px)").matches
  );

  const [links, setLinks] = useState([]);

  useEffect(() => {
    window
      .matchMedia("(min-width: 800px)")
      .addEventListener("change", e => setMatchesTab(e.matchesTab));
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", e => setMatchesPhone(e.matchesPhone));

    setLinks(
      ICONS.map((e, i) => (
        <a key={i} href={e[1]} style={i == 2 ? { transform: "translateX(2px) scale(1.2)" } : {}} rel="noreferrer" target="_blank">
          {e[0]}
        </a>
      ))
    );
  }, []);

  return (
    <div className={styles.landingWrapper}>
      <div className={styles.landingElem}>
        <div className={styles.navbar}>
          <img src={apogeelogo} className={styles.apogeeLogo} />
          {matchesPhone && <Switch scroll={props.scroll} />}
          {matchesTab && <Button />}
        </div>

        <div className={styles.countDown}>
          <Countdown />
        </div>

        {!matchesTab && <Button />}

        <div className={styles.heroFoot}>{links}</div>
        {props.allowScroll && (
          <div className="footer scroll" onClick={scroll}>
            <i className="fa fa-arrow-down" />
          </div>
        )}
      </div>
    </div>
  );
}
