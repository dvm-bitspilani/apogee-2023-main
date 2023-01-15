import React from 'react'
import "../CSS/Timer.css"

function Countdown() {

  const bosm = new Date("March 30, 2023 23:59:59").getTime();
  let prev_day, prev_hr, prev_min, prev_sec;
  let days, hrs, min, sec;

  setInterval(() => {
    const current_time = new Date().getTime();

    // updating number of days left
    days = Math.floor((bosm - current_time) / (1000 * 60 * 60 * 24));
    days = days < 10 ? `0${days}` : days;

    // updating number of hours left (in that day)
    hrs = Math.floor((bosm - current_time) / (1000 * 60 * 60)) - days * 24;
    hrs = hrs < 10 ? `0${hrs}` : hrs;

    // updating number of minutes left (in that hour)
    min =
      Math.floor((bosm - current_time) / (1000 * 60)) - days * 24 * 60 - hrs * 60;
    min = min < 10 ? `0${min}` : min;

    // // updating number of seconds left (in that min)
    // sec =
    //   Math.floor((bosm - current_time) / 1000) -
    //   days * 24 * 60 * 60 -
    //   hrs * 60 * 60 -
    //   min * 60;
    // sec = sec < 10 ? `0${sec}` : sec;

    // when timer is completed (BOSM arrives)
    if (days < 0) {
      days = "00";
      hrs = "00";
      min = "00";
      // sec = "00";
    }

    // adding animation to timer cards
    document.getElementById("days").style.animation =
      prev_day != days ? "card-flip 0.6s" : "none";
    document.getElementById("hours").style.animation =
      prev_hr != hrs ? "card-flip 0.6s" : "none";
    document.getElementById("min").style.animation =
      prev_min != min ? "card-flip 0.6s" : "none";

    // updating the temporary variables
    prev_day = days;
    prev_hr = hrs;
    prev_min = min;
    // prev_sec = sec;

    // updating the divs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hrs;
    document.getElementById("min").innerText = min;
    // document.getElementById("sec").innerText = sec;
  }, 1000);


  return (
    <div>
      <div class="time">
        <div class="numbers">
          <div id="days">00</div>
          <span>:</span>
          <div id="hours">00</div>
          <span>:</span>
          <div id="min">00</div>
        </div>

        <div class="labels">
          <div class="label-1">DAYS</div>
          <div class="label-2">HOURS</div>
          <div class="label-3">MINUTES</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown