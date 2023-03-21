import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../../App";
import styles from "../CSS/landing.module.css";
import Brain from "./Brain";
import LandingElements from "./LandingElements";
import Switch from "./Switch";
import PhoneBg from "../../assets/brain.mp4"
import FbIcon from "./FbIcon";
import InstaIcon from "./InstaIcon";
import YtIcon from "./YtIcon";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";

const ICONS = [
  [<FbIcon />, "https://www.facebook.com/bitsapogee/"],
  [<InstaIcon />, "https://instagram.com/bitsapogee"],
  [<YtIcon />, "https://www.youtube.com/@OasisBITS"],
];

function Landing(props) {
  const [matchesPhone, setMatchesPhone] = useState(
    window.matchMedia("(min-width: 500px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 500px)")
      .addEventListener("change", e => setMatchesPhone(e.matchesPhone));
  });

  let contact = document.getElementById("contactUs");
  const scroll = () => contact.scrollIntoView({ behavior: "smooth" });
  const modalContext = useContext(ModalContext);

  return (
    <div className={styles.wrapper} id="wrapper">
      {/* <Hamburger/> */}
      {matchesPhone && <Canvas id="canvas-wrapper">
        <Brain />
      </Canvas>}
      {!matchesPhone && <div className={styles.phoneBg}>
        <video className={styles.video} autoPlay loop muted playbackRate={0.3} >
        <source src={PhoneBg} type='video/mp4'/>
        </video>
      </div>}
      {/* <Canvas id="canvas-wrapper">
        <Brain />
      </Canvas> */}


      {matchesPhone && <Switch scroll={props.scroll} />}
      {!modalContext.is2D && <Navbar />}

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
