import React from "react";
import "./LowerNavigation.css";
import { BiAlarmAdd } from "react-icons/bi";
import { BsChevronDoubleDown } from "react-icons/bs";

export default function LowerNavigation() {
  return (
    <div className="lowernav">
      <div className="lowernav__wrapper">
        <div className="lowernav__menu">
          NEW TIMER
          <BsChevronDoubleDown />
        </div>
      </div>
    </div>
  );
}
