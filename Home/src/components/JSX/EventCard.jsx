import React, { useEffect, useState } from "react";
import styles from "../CSS/EventCard.module.css";
import dummy from "../../assets/dummySide.png";

function EventCard({ event, index, img, name }) {
  const [image,setImage] = useState(img)
  useEffect(()=>{
    if(img==undefined){
      setImage(dummy)
    }
  }, [img])
  return (
    <div className={styles.card} onClick={event} data-key={index}>
      <img className={styles.eventImage} src={image} />
      <div className={styles.info}>{`${index}. ${name}`}</div>
    </div>
  );
}

export default EventCard;
