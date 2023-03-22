import React from "react";
import Button from "../JSX/Button";
import styles from "../CSS/ArmageddonCard.module.css";

export default function ArmageddonCard(props) {
  return (
    <div className={styles.armageddonCard}>
      <div className={styles.cardHeading}>{props.data.title}</div>
      <div className={styles.cardImage}>
        <img src={props.data.img} alt="" />
        <div className={styles.btn}>
          <Button link={props.data.link} />
        </div>
      </div>
    </div>
  );
}
