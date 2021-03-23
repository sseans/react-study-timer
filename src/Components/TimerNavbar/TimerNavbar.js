import React from "react";
import "./TimerNavbar.css";
import { IoTimerSharp } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import TimerDisplay from "../TimerDisplay/TimerDisplay";

export default function TimerNavBar() {
  return (
    <div className="timernav">
      <div className="timernav__wrapper">
        <div className="timernav__upperbar">
          <div className="timernav__title">
            <IoTimerSharp />
            Task<span>Timer</span>
          </div>
          <div className="timernav__menubutton">
            <CgMenuRight />
          </div>
        </div>
        <div className="timernav__lowerbar">
          <TimerDisplay />
        </div>
      </div>
    </div>
  );
}
