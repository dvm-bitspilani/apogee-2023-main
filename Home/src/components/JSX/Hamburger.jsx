import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { ModalContext } from "../../App";
import styles from "../CSS/Ham.module.css";
import Directory from "./Directory";
import Modal from "../../enums/Modal";


function Hamburger({ is2D }) {
  const [isOpen, setIsOpen] = useState(false)
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", e => setMatches(e.matches));
  }, []);
  const mContext = useContext(ModalContext);
  let ham = useRef(null)

  useEffect(() => {
    if (is2D != undefined) {
      mContext.setDisplayModal(isOpen);
      mContext.updateModal(Modal.None);
    }
  }, [isOpen, is2D])

  useEffect(() => {
    document.addEventListener("keyup", evt => {
      evt.preventDefault();
      if (evt.key === "Escape") {
        setIsOpen(false)
      }
    });
  }, [])


  function changeHam() {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }


  useEffect(() => {
    const wrapper = document.getElementById('wrapper')
    const body = document.getElementsByTagName('body')[0]
    if (isOpen) {
      ham.style.position = "fixed";
      ham.style.top = "0";
      ham.style.bottom = "0";
      ham.style.left = "0";
      ham.style.right = "0";
      ham.style.height = "auto"
      ham.style.zIndex = "10000000000"
      wrapper.style.zIndex = "10000000000"
      if(matches){
        body.style.overflow = "hidden"
      }
    }
    else {
      ham.style.position = "relative";
      ham.style.zIndex = "100"
      ham.style.height = "2rem"
      wrapper.style.zIndex = "100"
      if (matches){
        body.style.overflow = "unset"
      }
    }
  })

  return (
    <div id="ham" ref={el => ham = el} className={styles.ham}>
      <div className={styles.hamIcon} onClick={changeHam}>
        <div className={styles.hamIcon1}></div>
        <div className={styles.hamIcon2}></div>
        <div className={styles.hamIcon3}></div>
      </div>
      {isOpen && <div className={styles.wrapper}>
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
            <div>C:\Users\dvm&gt;C_</div>
            <div className={styles.flexContainer}>
              <div className={styles.list}>
                <div> <a href="https://bits-apogee.org/campusambassador2023/" target={"_blank"}>Campus Ambassador</a></div>
                <div> <a href="https://bits-apogee.org/registrations/login/" target={"_blank"}>Login</a></div>
              </div>
              <div className={styles.socialContainer}>
                <div className={styles.heading}>SOCIALS</div>
                <div className={styles.socials}>
                  <div><a href="https://instagram.com/bitsapogee" target={"_blank"}> INSTAGRAM</a></div>
                  <div><a href="https://www.facebook.com/bitsapogee/" target={"_blank"}> FACEBOOK</a></div>
                  <div><a href="https://www.youtube.com/@OasisBITS" target={"_blank"}> YOUTUBE</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </div>
  );
}

export default Hamburger;
