import React from "react";
import styles from "../CSS/Armageddon.module.css";
import Slider from "react-slick";
import ArmageddonCard from "./ArmageddonCard";
import { useState, useEffect } from "react";
import BackBtn from "./BackBtn";


const DATA = [
  {
    title: "Fifa",
    img: "armag/fifa.png",
    link: "https://forms.gle/ct94X4cKQpWhSwHr5",
  },
  {
    title: "CS Go",
    img: "armag/csgo.png",
    link: "https://forms.gle/69TVE1yhhv29CzrU6",
  },
  {
    title: "Valorant",
    img: "armag/valorant.png",
    link: "https://forms.gle/dMuUHSQZg6dQd4LZ8",
  },
  {
    title: "Tekken",
    img: "armag/tekken.png",
    link: "https://forms.gle/eWgWk558sJPq31p5A",
  },
  {
    title: "WWE",
    img: "armag/wwe.png",
    link: "https://forms.gle/BvsaLJjfskGwj3LY8",
  },
];

export default function Armageddon() {
  const [cards, setCards] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );
  const [matchesPhone, setMatchesPhone] = useState(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    setCards(DATA);
    window
      .matchMedia("(max-width: 800px)")
      .addEventListener("change", e => setMatches(e.matches));
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", e => setMatchesPhone(e.matches));
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next"
        onClick={evt => {
          evt.stopPropagation();
          onClick();
        }}
      >
        <svg
          width="15"
          height="30"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.72535 0.793765C7.3604 0.402078 6.77202 0.402078 6.40707 0.793765L0.217852 7.43645C-0.0726172 7.7482 -0.0726172 8.2518 0.217852 8.56355L6.40707 15.2062C6.77202 15.5979 7.3604 15.5979 7.72535 15.2062C8.0903 14.8145 8.0903 14.1831 7.72535 13.7914L2.33306 7.996L7.7328 2.20064C8.0903 1.81695 8.0903 1.17746 7.72535 0.793765Z"
            fill="#B2DBFF"
          />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev"
        onClick={evt => {
          evt.stopPropagation();
          onClick();
        }}
      >
        <svg
          width="15"
          height="30"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.72535 0.793765C7.3604 0.402078 6.77202 0.402078 6.40707 0.793765L0.217852 7.43645C-0.0726172 7.7482 -0.0726172 8.2518 0.217852 8.56355L6.40707 15.2062C6.77202 15.5979 7.3604 15.5979 7.72535 15.2062C8.0903 14.8145 8.0903 14.1831 7.72535 13.7914L2.33306 7.996L7.7328 2.20064C8.0903 1.81695 8.0903 1.17746 7.72535 0.793765Z"
            fill="#B2DBFF"
          />
        </svg>
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: matchesPhone ? 1 : matches ? 2 : 3,
    slidesToScroll: 1,
    // centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.armageddonWrapper}>
      <div className={styles.armageddon}>
        <div className={styles.header}>
          <div className={styles.back}>
            <BackBtn />
          </div>
          <h1 className={styles.heading}>ARMAGEDDON</h1>
          <div className={styles.back}></div>
        </div>

        <div className={styles.carousel}>
          <Slider {...settings}>
            {cards.map((e, i) => (
              <ArmageddonCard data={e} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
