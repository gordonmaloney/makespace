import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

const Timer = ({ gender, difference, stopTimer, stopSame, stopOther }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [speakerCount, setSpeakerCount] = useState(0);

  let speakerCountUpdated = speakerCount

  function toggle() {
    setIsActive(!isActive);
    stopOther()
  }

  useEffect(() => {
    stopTimer == true && setIsActive(false)
  }, [stopTimer])

  isActive && stopSame() 

  function reset() {
    difference(0, 0, 0);
    setSeconds(0);
    setMinutes(0);
    setSpeakerCount(0);
    setIsActive(false);
  }

  if (seconds === 60) {
    setSeconds(0);
    setMinutes(minutes + 1);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        difference(minutes, seconds, speakerCount)
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, speakerCount]);


  const incrementSpeakerCount = () => {
    difference(minutes, seconds, speakerCount + 1);
    setSpeakerCount(speakerCount + 1);

  };

  return (
    <div>
      <center>
        <div className={"timerContainer"}>
          <div>

            <b>{gender}</b> have been speaking for:
            <br />
            {minutes} {minutes === 1 ? "minute" : "minutes"} and {seconds}{" "}
            {seconds === 1 ? "second" : "seconds"}

          </div>
          <div>
            <Button
              className={`button buttonpurp button-primary button-primary-${
                isActive ? "active" : "inactive"
              }`}
              variant="contained"
              color="primary"
              size="small"
              onClick={toggle}
            >
              {isActive ? "Pause" : "Start"}
            </Button>
            <br />
            <br />
            <b>
              {speakerCount === 0 ? "No" : speakerCount}{" "}
              {speakerCount !== 1
                ? gender.toLowerCase()
                : gender === "Men"
                ? "man"
                : "woman"}
            </b>{" "}
            {speakerCount !== 1 ? "have" : "has"} spoken.
            <br />
            <Button
              className="button buttonpurp"
              variant="contained"
              color="primary"
              size="small"
              onClick={incrementSpeakerCount}
            >
              + 1
            </Button>
            <br />
            <br />
            <Button
              className="button"
              variant="contained"
              size="small"
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Timer;
