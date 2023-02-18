import React from "react";
import { useEffect } from "react";
import "../CSS/SpeakerCard.css";
import Watch from "./Watch";

export default function SpeakerCard(props) {

  return (
    <div className="speakerCard">
      <div className="speakerCont">
        <div className="speakerName">{props.data.name}</div>
        <div className="speakerPos">{props.data.pos}</div>
      </div>
      <div className="speakerImg">
        <img src={props.data.img} alt="" />
      </div>
      <div className="speakerLink"><Watch link={props.data.link} /></div>
    </div>
  );
}
