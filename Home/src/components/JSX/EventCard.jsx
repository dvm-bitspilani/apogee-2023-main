import React from 'react'
import styles from '../CSS/EventCard.module.css'
import dummy from '../../assets/dummySide.png'

function EventCard(props) {
  let key = props.index;
  return (
    <div className={styles.card} onClick={props.changeEvent} data-key={key}>
        <img className={styles.eventImage} src={props.eventImg}/>
        <div className={styles.info}>{key+1}. {props.eventName}</div>
    </div>
  )
}

export default EventCard