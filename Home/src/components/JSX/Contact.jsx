import React, { useEffect, useState } from "react";
import useScrollVis from "../../hooks/useScrollVis";
import styles from "../CSS/Contact.module.css";
import ContactCard from "./ContactCard";

const DATA = [
  {
    name: "Adarsh Bhardwaj ",
    dept: "Website and Payments",
    phone: "tel:+91 9140650723",
    email: "mailto:webmaster@bits-apogee.org",
    img: "/contacts/adarsh.svg",
  },
  {
    name: "Mayan Agrawal",
    dept: "Registrations and Correspondence",
    phone: "tel:+91 9423527868",
    email: "mailto:pcr@bits-apogee.org",
    img: "/contacts/mayan.png",
  },
  {
    name: "Lalit Adithya",
    dept: "Reception and Accomodation",
    phone: "tel:+91 7358092952",
    email: "mailto:recnacc@bits-apogee.org",
    img: "/contacts/lalit.svg",
  },
  {
    name: "Sahil Shah",
    dept: "Sponsorship and Marketing",
    phone: "tel:+91 9321943954",
    email: "mailto:sponsorship@bits-apogee.org",
    img: "/contacts/sahil.svg",
  },
  {
    name: "Poorvansh Kavta ",
    dept: "Publicity and Partnerships ",
    phone: "tel:+91 9602731678",
    email: "mailto:collaborations@bits-apogee.org",
    img: "/contacts/poorvansh.svg",
  },
  {
    name: "Nishit Gupta",
    dept: "Events, Projects and Logistics",
    phone: "tel:+91 8107194690",
    email: "mailto:controls@bits-apogee.org",
    img: "/contacts/nishit.svg",
  },
  {
    name: "Ishpreet Singh Sood",
    dept: "Guest Lectures and Paper Presentations",
    phone: "tel:+91 9407095716",
    email: "mailto:pep@bits-apogee.org",
    img: "/contacts/ishpreet.svg",
  },
  {
    name: "Ashirwad Karande",
    dept: "President, Students' Union ",
    phone: "tel:+91 8793009454",
    email: "mailto:president@pilani.bits-pilani.ac.in",
    img: "/contacts/ashirwad.png",
  },
  {
    name: "Naman Jalan",
    dept: "General Secretary, Students' Union",
    phone: "tel:+91 8617395921",
    email: "mailto:gensec@pilani.bits-pilani.ac.in",
    img: "/contacts/naman.svg",
  },
];

export default function Contact(props) {
  const [cards, setCards] = useState([]);
  const visClass = useScrollVis(props.idx, props.pages, props.scrollDir);

  useEffect(() => {
    setCards(DATA.map((e, i) => <ContactCard data={e} key={i} />));
  }, []);

  return (
    <div
      id="contactUs"
      className={`${styles.contact} ${visClass}`}
      style={{ paddingBottom: "10px" }}
    >
      <h1 className={styles.heading}>CONTACT US</h1>
      <div className={styles.cards}>{cards}</div>
    </div>
  );
}
