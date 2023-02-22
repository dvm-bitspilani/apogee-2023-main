import React, { useEffect, useRef, useState } from "react";
import "../CSS/Timer.css";

function Countdown() {
  let count = useRef(null);

  const APOGEE = new Date("March 30, 2023 23:59:59").getTime(),
    [curr, setCurr] = useState(new Date().getTime());

  const [prevDay, setPrevDay] = useState(0),
    [days, setDays] = useState(0);

  const [hrs, setHrs] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24
    ),
    [prevHr, setPrevHr] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24
    );

  const [prevMin, setPrevMin] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
    ),
    [mins, setMins] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
    );

  useEffect(() => {
    setInterval(() => {
      if (days < 0) {
        setDays("00");
        setHrs("00");
        setMins("00");
      } else {
        setCurr(new Date().getTime());
        setDays(Math.floor((APOGEE - curr) / (1000 * 60 * 60 * 24)));
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (days > 37 || mins > 65 || hrs > 30 || mins < 0) {
      count.style.display = "none";
    } else {
      count.style.display = "flex";
    }
  }, [days, hrs, mins]);

  useEffect(() => {
    setHrs(Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24);

    setMins(
      Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
    );

    hrs < 10 && setHrs(prevHrs => "0" + prevHrs);
    mins < 10 && setMins(prevMins => "0" + prevMins);
    days < 10 && setDays(prevDays => "0" + prevDays);
    document.getElementById("days").style.animation =
      prevDay != days ? "card-flip 0.6s" : "none";
    document.getElementById("hours").style.animation =
      prevHr != hrs ? "card-flip 0.6s" : "none";
    document.getElementById("min").style.animation =
      prevMin != mins ? "card-flip 0.6s" : "none";

    setPrevDay(days);
    setPrevHr(hrs);
    setPrevMin(mins);
  }, [curr]);

  return (
    <div ref={el => (count = el)} className="countdown">
      <div className="label" id="days">
        <div className="numbers">{days}</div>
        <div className="labels">DAYS</div>
      </div>

      <span>:</span>

      <div className="label" id="hours">
        <div className="numbers">{hrs}</div>
        <div className="labels">HOURS</div>
      </div>

      <span>:</span>

      <div className="label" id="min">
        <div className="numbers">{mins}</div>
        <div className="labels">MINUTES</div>
      </div>
    </div>
  );
}

export default Countdown;
