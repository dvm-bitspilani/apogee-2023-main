import React from "react";
import { useEffect } from "react";
import "../CSS/Watch.css";
import Play from "./Play";

export default function Watch(props) {

  return (
    <div className="watchComp">
      <div className="hexagon">
        <div className="circle"></div>
      </div>
      <div className="line"></div>
      <a href={props.link} target="_blank" className="watchWrapper">
        <div className="watch">
            <div className="watchCont">
                <Play />
                Watch
            </div>
        </div>
      </a>
    </div>
  );
}
