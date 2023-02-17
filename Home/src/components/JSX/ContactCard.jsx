import React from "react";
import styles from "../CSS/ContactCard.module.css";
import PhoneIcon from "./PhoneIcon";
import MailIcon from "./MailIcon";

export default function ContactCard(props) {
  return (
    <div
      className={styles.contactCard}
      onClick={evt => {
        evt.stopPropagation();
      }}
    >
      <div className={styles.wrapper}>
        <img className={styles.img} src={props.data.img} alt="" />
        <div className={styles.name}>{props.data.name}</div>
        <div className={styles.dept}>{props.data.dept}</div>
        <div className={styles.icons}>
          <PhoneIcon phone={props.data.phone} />
          <MailIcon email={props.data.email} />
        </div>
      </div>
    </div>
  );
}
