import React from 'react'
import styles from "../CSS/Ham.module.css";
import Directory from "./Directory"

function Hamburger() {
    return (
        <div id="ham" className={styles.ham}>
            <div className={styles.container}>
                <div className={styles.navBar}>
                    <Directory />
                    <div>
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
                            <div>HOME</div>
                            <div>AIC</div>
                            <div>Sponsors</div>
                            <div>All Events</div>
                            <div>Winners</div>
                            <div>Developers</div>
                        </div>
                        <div className={styles.socialContainer}>
                            <div className={styles.heading}>SOCIALS</div>
                            <div className={styles.socials}>
                            <div>INSTAGRAM</div>
                            <div>FACEBOOK</div>
                            <div>TWITTER</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hamburger