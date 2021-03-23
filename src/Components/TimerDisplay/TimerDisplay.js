import React from "react";
import "./TimerDisplay.css";
import { GiPauseButton } from "react-icons/gi";

export default function TimerDisplay() {
  return (
    <div className="timerdisplay">
      <div className="timerdisplay__bar">
        <div className="timerdisplay__load"></div>
      </div>
      <div className="timerdisplay__text">
        <div className="timerdisplay__textstart">Start 00:00</div>
        <GiPauseButton />
        <div className="timerdisplay__textend">Done 45:00</div>
      </div>
    </div>
  );
}
