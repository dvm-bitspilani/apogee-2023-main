import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ModalContext } from "../../App";
import styles from "../CSS/Ham.module.css";
import Directory from "./Directory";
import Modal from "../../enums/Modal";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Hamburger({ is2D }) {
  const [isOpen, setIsOpen] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  let hamIcon = useRef(null);
  const mContext = useContext(ModalContext);
  const { height, width } = useWindowDimensions();

  const [blink, setBlink] = useState(true);
  const [animDone, setAnimDone] = useState(false);
  const [cmdLen, setCmdLen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setBlink(prevBlink => !prevBlink), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (is2D != undefined) {
      mContext.setDisplayModal(isOpen);
      mContext.updateModal(Modal.None);
    }
  }, [isOpen, is2D]);

  useEffect(() => {
    document.addEventListener("keyup", evt => {
      evt.preventDefault();
      if (evt.key === "Escape") setIsOpen(false);
    });
  }, []);

  useEffect(() => {
    setAnimDone(false);
    setCmdLen(0);

    setTimeout(() => setAnimDone(true), 1400);
    for (let i = 1; i <= 2; i++) setTimeout(() => setCmdLen(i), 500 * i);
  }, [isOpen]);

  function changeHam() {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }

  useEffect(() => {
    const ham = document.querySelector("#ham");
    const wrapper = document.querySelector("#wrapper");
    const switchContainer = document.querySelector(".switchContainer");

    if (isOpen) {
      ham.style.position = "fixed";
      ham.style.top = 0;
      ham.style.bottom = 0;
      ham.style.left = 0;
      ham.style.right = 0;
      ham.style.height = "auto";
      ham.style.zIndex = 10000000000;

      width > 800 && (switchContainer.style.zIndex = 10000);
      wrapper.style.zIndex = 10000000000;
    } else {
      ham.style.position = "relative";
      ham.style.height = "2rem";
      ham.style.zIndex = 100;

      width > 800 && (switchContainer.style.zIndex = 10000000000);
      wrapper.style.zIndex = 100;
    }
  }, [isOpen]);

  useEffect(() => {
    if (is2D == false) {
      hamIcon.style.right = "70px";
    } else {
      hamIcon.style.right = "-30px";
    }
  });

  return (
    <div id="ham" className={styles.ham}>
      <div
        ref={el => (hamIcon = el)}
        className={styles.hamIcon}
        onClick={changeHam}
      >
        <div className={styles.hamIcon1}></div>
        <div className={styles.hamIcon2}></div>
        <div className={styles.hamIcon3}></div>
      </div>

      {isOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.navBar}>
              <Directory />

              <div className={styles.cross} onClick={changeHam}>
                <div className={styles.crossLeft}></div>
                <div className={styles.crossRight}></div>
              </div>
            </div>

            <div className={styles.content}>
              <div>Bits Apogee [Version 2023]</div>
              <div>(c) BITS Pilani. All rights reserved. </div>
              <div style={{ display: "flex" }}>
                <div>
                  C:\Users\dvm&gt;{" "}
                  <span className={styles.cmd}>{"ls".slice(0, cmdLen)}</span>
                </div>
                {!animDone && blink && <div>_</div>}
              </div>

              <div className={styles.flexContainer}>
                <div className={styles.list}>
                  <div>
                    {" "}
                    <a
                      href="https://bits-apogee.org/campusambassador2023/"
                      target={"_blank"}
                    >
                      Campus Ambassador
                    </a>
                  </div>
                  <div>
                    {" "}
                    <a
                      href="https://bits-apogee.org/registrations/login/"
                      target={"_blank"}
                    >
                      Login
                    </a>
                  </div>
                  <div>
                    {" "}
                    <a
                      href="https://docs.google.com/document/d/1oIcxEiQFrEwEmvVvSGN5GWKgeIcy7lClFFljpNxRC-g/edit"
                      target={"_blank"}
                    >
                      Events Rulebook
                    </a>
                  </div>
                  <div>
                     {is2D == undefined ? (
                      <Link to="/armageddon">Armageddon (For Bitsians) </Link>
                    ) : (
                      <a href="/armageddon">Armageddon (For Bitsians)</a>
                    )}
                  </div>
                  <div>
                     {is2D == undefined ? (
                      <Link to="/sponsors">Sponsors</Link>
                    ) : (
                      <a href="/sponsors">Sponsors</a>
                    )}
                  </div>
                </div>
                <div className={styles.socialContainer}>
                  <div className={styles.heading}>SOCIALS</div>

                  <div className={styles.socials}>
                    <div>
                      <a
                        href="https://instagram.com/bitsapogee"
                        target={"_blank"}
                      >
                        {" "}
                        INSTAGRAM
                      </a>
                    </div>

                    <div>
                      <a
                        href="https://www.facebook.com/bitsapogee/"
                        target={"_blank"}
                      >
                        {" "}
                        FACEBOOK
                      </a>
                    </div>

                    <div>
                      <a
                        href="https://www.youtube.com/@OasisBITS"
                        target={"_blank"}
                      >
                        {" "}
                        YOUTUBE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex" }} className={styles.promptFinal}>
                <div>C:\Users\dvm&gt;</div> {blink && <div>_</div>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hamburger;
