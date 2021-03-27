import React, { useEffect } from "react";
import "./TimerDisplay.css";
import { GiPauseButton } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";

export default function TimerDisplay({ timerStatus, timerTime }) {
  const variants = {
    inactive: {},
    active: {
      scaleX: 1,
      transition: {
        duration: timerTime,
      },
    },
  };

  const controls = useAnimation();
  controls.start(timerStatus === true ? "active" : "inactive");

  useEffect(() => {
    startAnimation();
  }, [timerStatus]);

  function startAnimation() {}

  return (
    <div className="timerdisplay">
      <div className="timerdisplay__bar">
        <motion.div
          animate={controls}
          variants={variants}
          initial={{ scaleX: 0, originX: 0 }}
          className="timerdisplay__load"
        ></motion.div>
      </div>
      <div className="timerdisplay__text">
        <div className="timerdisplay__textstart">Start 00:00</div>
        <GiPauseButton />
        <div className="timerdisplay__textend">Done 45:00</div>
      </div>
    </div>
  );
}
