import React from "react";
import { useEffect } from "react";
import "../CSS/SpeakerCard.css";
import Watch from "./Watch";

export default function SpeakerCard(props) {
  const Dots = () => {
    return (
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    );
  };

  return (
    <div className="speakerCard">
      <div className="speakerCont">
        <div className="speakerName">{props.data.name}</div>
        <div className="speakerPos">{props.data.pos}</div>
        <Dots />
      </div>
      <div className="speakerImg">
        <img src={props.data.img} alt="" />
      </div>
      <div className="speakerLink">
        <Watch link={props.data.link} />
      </div>
    </div>
  );
}
