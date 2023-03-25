import React, { useEffect, useState } from "react";
import styles from "../CSS/landing.module.css";
import Button from "./Button";
import Countdown from "./Countdown";
import Hamburger from "./Hamburger";
import FbIcon from "./FbIcon";
import InstaIcon from "./InstaIcon";
import YtIcon from "./YtIcon";
import useScrollVis from "../../hooks/useScrollVis";

const ICONS = [
  [<FbIcon />, "https://www.facebook.com/bitsapogee/"],
  [<InstaIcon />, "https://instagram.com/bitsapogee"],
  [<YtIcon />, "https://www.youtube.com/@OasisBITS"],
];

export default function LandingElements(props) {
  const [matchesTab, setMatchesTab] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );

  const [links, setLinks] = useState([]);
  const visClass = useScrollVis(props.idx, props.pages, props.scrollDir);

  useEffect(() => {
    window
      .matchMedia("(min-width: 800px)")
      .addEventListener("change", e => setMatchesTab(e.matchesTab));
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

  return (
    <div className={`${styles.landingElem} ${visClass}`}>
      <div className={styles.navbar} style={{ pointerEvents: "none" }}>
        <img src="/apogeeLogo.svg" className={styles.apogeeLogo} />
        {matchesTab && <Button link="https://bits-apogee.org/register/" />}
      </div>

      <Hamburger is2D={props.is2D} />
      <div className={styles.countDown}>
        <Countdown />
      </div>

      {!matchesTab && <Button link="https://bits-apogee.org/register/" />}
      <div className={styles.heroFoot}>{links}</div>
    </div>
  );
}
