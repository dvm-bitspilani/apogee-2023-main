import React, { useEffect, useState } from "react";
import "../CSS/Timer.css";

function Countdown() {
  const [bosm, setBosm] = useState(new Date("March 30, 2023 23:59:59").getTime());
  const [prevDay, setPrevDay] = useState(null);
  const [prevHr, setPrevHr] = useState(null);
  const [prevMin, setPrevMin] = useState(null);
  const [days, setDays] = useState(null);
  const [mins, setMins] = useState(null);
  const [hrs, setHrs] = useState(null);
  const [current_time, setCurrentTime] = useState(new Date().getTime())

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);
  });
  useEffect(() => {
    setInterval(() => {
      // updating number of days left
      setDays(Math.floor((bosm - current_time) / (1000 * 60 * 60 * 24)));
      // days = days < 10 ? `0${days}` : days;
      // updating number of hours left (in that day)

      // hrs = hrs < 10 ? `0${hrs}` : hrs;
      console.log(current_time);

      // updating number of minutes left (in that hour)
      // setMins(Math.floor((bosm - current_time) / (1000 * 60)) - days * 24 * 60 - hrs * 60);
      // min = min < 10 ? `0${min}` : min;

      // // updating number of seconds left (in that min)
      // sec =
      //   Math.floor((bosm - current_time) / 1000) -
      //   days * 24 * 60 * 60 -
      //   hrs * 60 * 60 -
      //   min * 60;
      // sec = sec < 10 ? `0${sec}` : sec;

      // when timer is completed (BOSM arrives)
      if (days < 0) {
        setDays("00");
        setHrs("00");
        setMin("00");
        // sec = "00";
      }

      // adding animation to timer cards


      // updating the temporary variables


      // updating the divs
    }, 1000);
  }, [])
  useEffect(() => {
    setHrs(Math.floor((bosm - current_time) / (1000 * 60 * 60)) - days * 24);
  })

  useEffect(() => {
    setMins(Math.floor((bosm - current_time) / (1000 * 60)) - days * 24 * 60 - hrs * 60);
    document.getElementById("days").style.animation =
      prevDay != days ? "card-flip 0.6s" : "none";
    document.getElementById("hours").style.animation =
      prevHr != hrs ? "card-flip 0.6s" : "none";
    document.getElementById("min").style.animation =
      prevMin != mins ? "card-flip 0.6s" : "none";
    setPrevDay(days);
    setPrevHr(hrs);
    setPrevMin(mins);
  })

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
