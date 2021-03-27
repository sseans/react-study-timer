import React, { useState } from "react";
import "./TimerNavbar.css";
import { MdHourglassEmpty } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import TimerDisplay from "../TimerDisplay/TimerDisplay";

export default function TimerNavBar() {
  const [timerStatus, setTimerStatus] = useState(false);

  const timerTime = 5;

  function startTimer() {
    setTimerStatus(!timerStatus);
    console.log("poop ive been clicked");
  }

  return (
    <div className="timernav">
      <div className="timernav__wrapper">
        <div className="timernav__upperbar">
          <div className="timernav__title" onClick={startTimer}>
            <MdHourglassEmpty />
            Task<span>Timer</span>
          </div>
          <div className="timernav__menubutton">
            <CgMenuRight />
          </div>
        </div>
        <div className="timernav__lowerbar">
          <TimerDisplay timerTime={timerTime} timerStatus={timerStatus} />
        </div>
      </div>
    </div>
  );
}
