import React, { useEffect, useState } from "react";
import "../CSS/Timer.css";

function Countdown() {
  const [current_time, setCurrentTime] = useState(new Date().getTime()),
    APOGEE = new Date("March 30, 2023 23:59:59").getTime();

  const [prevDay, setPrevDay] = useState(),
    [prevHr, setPrevHr] = useState(),
    [prevMin, setPrevMin] = useState(),
    [days, setDays] = useState(),
    [mins, setMins] = useState(),
    [hrs, setHrs] = useState();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      // updating number of days left
      setDays(Math.floor((APOGEE - current_time) / (1000 * 60 * 60 * 24)));

      // when timer is completed (APOGEE arrives)
      if (days < 0) {
        setDays("00");
        setHrs("00");
        setMins("00");
      }
    }, 1000);
  }, []);

  useEffect(() => {
    setHrs(Math.floor((APOGEE - current_time) / (1000 * 60 * 60)) - days * 24);
  }, [current_time]);

  useEffect(() => {
    setMins(
      Math.floor((APOGEE - current_time) / (1000 * 60)) -
        days * 24 * 60 -
        hrs * 60
    );
    if (hrs < 10) {
      setHrs(prevHrs => "0" + prevHrs);
    }
    if (mins < 10) {
      setMins(prevMins => "0" + prevMins);
    }
    if (days < 10) {
      setDays(prevDays => "0" + prevDays);
    }

    document.getElementById("days").style.animation =
      prevDay != days ? "card-flip 0.6s" : "none";
    document.getElementById("hours").style.animation =
      prevHr != hrs ? "card-flip 0.6s" : "none";
    document.getElementById("min").style.animation =
      prevMin != mins ? "card-flip 0.6s" : "none";

    setPrevDay(days);
    setPrevHr(hrs);
    setPrevMin(mins);
  }, [current_time]);

  return (
    <div>
      <div className="time">
        <div className="numbers">
          <div id="days">{days}</div>
          <span>:</span>
          <div id="hours">{hrs}</div>
          <span>:</span>
          <div id="min">{mins}</div>
        </div>

        <div className="labels">
          <div className="label-1">DAYS</div>
          <div className="label-2">HOURS</div>
          <div className="label-3">MINUTES</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
