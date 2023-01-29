import React from 'react'
import styles from '../CSS/Contact.module.css'
import ContactCard from './ContactCard'

export default function Contact() {
  const cards = [];

  const data = [
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
    {
      img: '/images/anshal.png',
      name: 'Anshal Shukla',
      dept: 'Department of Visual Media',
      phone: 'tel:+91',
      email: 'mailto:',
    },
  ]

  for(let i=0; i<9; i++) {
    cards[i] = (<ContactCard data={data[i]} key={i} />)
  }

  return (
    <div className={styles.contact}>
        <h1 className={styles.heading}>CONTACT US</h1>

        <div className={styles.cards}>
            {cards}
        </div>
    </div>
  )
}
