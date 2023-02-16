import React from "react";
import Slider from "react-slick";
import "../CSS/Speakers.css";
import SpeakerCard from "./SpeakerCard";

export default function Speakers() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
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
      <div className="arrow prev" onClick={onClick}>
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

  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="speakers">
      <div className="carouselWrapper">
        <Slider {...settings}>
          <SpeakerCard />
          <SpeakerCard />
          <SpeakerCard />
        </Slider>
      </div>
    </div>
  );
}
