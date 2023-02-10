import React from "react";
import styles from "../CSS/Contact.module.css";
import ContactCard from "./ContactCard";

const DATA = [
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
  {
    img: "/images/anshal.png",
    name: "Anshal Shukla",
    dept: "Department of Visual Media",
    phone: "tel:+91",
    email: "mailto:",
  },
];

export default function Contact() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(DATA.map((e, i) => <ContactCard data={e} key={i} />));
  }, []);

  return (
    <div className={styles.contact}>
      <h1 className={styles.heading}>CONTACT US</h1>
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}
