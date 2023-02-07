import React from 'react'
import styles from '../CSS/EventCard.module.css'
import dummy from '../../assets/dummySide.png'

function EventCard() {
  return (
    <div className={styles.card}>
        <img className={styles.eventImage} src={dummy}/>
        <div className={styles.info}>1. Murder Mystery</div>
    </div>
  )
}

export default EventCard