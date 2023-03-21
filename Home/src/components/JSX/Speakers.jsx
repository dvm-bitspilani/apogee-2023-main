import React, { useState, useEffect } from "react";
import { useContext } from "react";
import Slider from "react-slick";
import { ModalContext } from "../../App";
import useScrollVis from "../../hooks/useScrollVis";
import "../CSS/Speakers.css";
import SpeakerCard from "./SpeakerCard";

const DATA = [
  {
    img: "speakers/sainath.png",
    name: "P Sainath",
    pos: "Indian Social Journalist. Rural Affairs Editor of the Hindu. Recipient of the prestigious Ramon Magsaysay Award.",
    link: "",
  },
  {
    img: "speakers/vijayraghavan.png",
    name: "K Vijayraghavan",
    pos: "Former Director of the National Centre for Biological Sciences. Member of the Scientific Advisory Council of the Prime Minister of India.",
    link: "",
  },
  {
    img: "speakers/ramesh.png",
    name: "RB Ramesh",
    pos: "Indian Chess Grandmaster. Won the 2002 British Championship and the 2007 Commonwealth Championship. Taught over 8 grand masters.",
    link: "",
  },
  {
    img: "speakers/dibakar.png",
    name: "Dibakar Banerjee",
    pos: "Indian film director, screenwriter, producer. Won National Film Awards for Khosla Ka Ghosla (2006) Oye Lucky! Lucky Oye! (2008) Shanghai (2012), Bombay Talkies (2013), Detective Byomkesh Bakshy!",
    link: "",
  },
  {
    img: "speakers/azhar.png",
    name: "Azahar Iqubal",
    pos: "This Entrepreneurship Conclave meet the Co-founder and CEO of Inshorts. Awarded Entreprenuer of the Year 2022.",
    link: "",
  },
];

export default function Speakers(props) {
  const mContext = useContext(ModalContext);
  const [cards, setCards] = useState([]);

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 800px)").matches
  );

  const visClass = useScrollVis(props.idx, props.pages, props.scrollDir);

  useEffect(() => {
    setCards(DATA);
    // setSpeakers();
    // async function setSpeakers() {
    //   window
    //     .matchMedia("(min-width: 800px)")
    //     .addEventListener("change", e => setMatches(e.matchesPhone));

    //   const SPEAKERS_URL = "https://bits-apogee.org/registrations/events/";

    //   try {
    //     const res = await fetch(SPEAKERS_URL, { method: "GET" });
    //     const speakers = await res.json();
    //     const speakerData = speakers.data[2];

    //     setCards(
    //       speakerData.events.map(event => ({
    //         img: event.image_url,
    //         name: event.name,
    //         pos: event.details,
    //         link: "",
    //       }))
    //     );
    //   } catch (e) {
    //     alert("NETWORK ERROR!");
    //   }
    // }
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={`speakers ${visClass}`}>
      <div
        className="heading"
        style={{
          display: `${
            mContext !== undefined && mContext.is2D === false ? "none" : "block"
          }`,
        }}
      >
        SPEAKERS
      </div>
      {matches && (
        <div className="carouselWrapper">
          <Slider {...settings}>
            {cards.map((e, i) => (
              <SpeakerCard data={e} key={i} />
            ))}
          </Slider>
        </div>
      )}

      {!matches && (
        <div className="flexWrapper">
          {cards.map((e, i) => (
            <SpeakerCard data={e} key={i} />
          ))}
        </div>
      )}
    </div>
  );
}
