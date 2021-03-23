import React from "react";
import "./TimerNavbar.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function TimerNavBar() {
  return (
    <div className="timernav">
      <div className="timernav__wrapper">
        <div className="timernav__upperbar">
          <div className="timernav__title">
            Task<span>Timer</span>
          </div>
          <div className="timernav__menubutton">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}
