import React, { useState } from "react";
import { useEffect } from "react";
import "../CSS/SpeakerCard.css";
import Watch from "./Watch";

export default function SpeakerCard(props) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => setIndex((index + 1) % 8), 300);
  }, [index]);

  const Dots = () => {
    return (
      <div className="dots">
        {Array(8)
          .fill()
          .map((e, i) =>
            i == index ? (
              <div className="filledDot dot" />
            ) : (
              <div className="dot" />
            )
          )}
      </div>
    );
  };

  const SpeakerBars = props => {
    return (
      <div className="spBars" id={props.id}>
        <div className="spBar" id="spBar-1" style={{ "--delay": ".1s" }} />
        <div className="spBar" id="spBar-2" style={{ "--delay": ".2s" }} />
        <div className="spBar" id="spBar-3" style={{ "--delay": ".3s" }} />
        <div className="spBar" id="spBar-4" style={{ "--delay": ".4s" }} />
        <div className="spBar" id="spBar-5" style={{ "--delay": ".5s" }} />
        <div className="spBar" id="spBar-6" style={{ "--delay": ".4s" }} />
        <div className="spBar" id="spBar-7" style={{ "--delay": ".3s" }} />
        <div className="spBar" id="spBar-8" style={{ "--delay": ".2s" }} />
        <div className="spBar" id="spBar-9" style={{ "--delay": ".1s" }} />
      </div>
    );
  };

  return (
    <div className="speakerCard">
      <div className="speakerBars">
        <SpeakerBars id="spBars1" />
        <SpeakerBars id="spBars2" />
      </div>

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
