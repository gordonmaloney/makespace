import React, { useState, useEffect } from "react";
import { Button } from '@material-ui/core';
import Difference from "./Difference";

const CombinedTimers = () => {

    //men
  const [menseconds, mensetSeconds] = useState(0);
  const [menminutes, mensetMinutes] = useState(0);
  const [menisActive, mensetIsActive] = useState(false);
  const [menSpeakerCount, mensetSpeakerCount] = useState(0)

  function mentoggle() {
    mensetIsActive(!menisActive);
  }

  function menreset() {
    mensetSeconds(0);
    mensetMinutes(0);
    mensetIsActive(false);
  }

  if (menseconds === 60) {
    mensetSeconds(0);
    mensetMinutes(menminutes + 1);
  }

  useEffect(() => {
    let interval = null;
    if (menisActive) {
      interval = setInterval(() => {
        mensetSeconds((menseconds) => menseconds + 1);
      }, 1000);
    } else if (!menisActive && menseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [menisActive, menseconds]);


  //women
  const [womenseconds, womensetSeconds] = useState(0);
  const [womenminutes, womensetMinutes] = useState(0);
  const [womenisActive, womensetIsActive] = useState(false);
  const [womenSpeakerCount, setwomenSpeakerCount] = useState(0)

  function womentoggle() {
    womensetIsActive(!womenisActive);
  }

  function womenreset() {
    womensetSeconds(0);
    womensetMinutes(0);
    womensetIsActive(false);
  }

  if (womenseconds === 60) {
    womensetSeconds(0);
    womensetMinutes(womenminutes + 1);
  }

  useEffect(() => {
    let interval = null;
    if (womenisActive) {
      interval = setInterval(() => {
        womensetSeconds((womenseconds) => womenseconds + 1);
      }, 1000);
    } else if (!womenisActive && womenseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [womenisActive, womenseconds]);


  return (
      <>
    <div>
      <center>
        <div className={"timerContainer"}>
          <div>
            <b>Women</b> have been speaking for:
            <br />
            {womenminutes} {womenminutes === 1 ? "minute" : "minutes"}  and {womenseconds} {womenseconds === 1 ? "second" : "seconds" }
          </div>
          <div>
            <Button
              className={`button button-primary button-primary-${
                womenisActive ? "active" : "inactive"
              }`}
              variant="contained"
              color="primary"
              onClick={womentoggle}
            >
              {womenisActive ? "Pause" : "Start"}
            </Button>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={womenreset}
            >
              Reset
            </Button>


            <br /><br />
           <b>{womenSpeakerCount === 0 ? "No" : womenSpeakerCount}
            {" "}
            {womenSpeakerCount !== 1 ? "women" : "woman" }
            </b>
            {" "}
            {womenSpeakerCount !== 1 ? "have" : "has"}
            {" "}
            spoken.
            <br />
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={() => setwomenSpeakerCount(womenSpeakerCount+1)}
            >
              + 1
            </Button>
          </div>
        </div>
      </center>
    </div>

    <div>
      <center>
        <div className={"timerContainer"}>
          <div>
            <b>Men</b> have been speaking for:
            <br />
            {menminutes} {menminutes === 1 ? "minute" : "minutes"}  and {menseconds} {menseconds === 1 ? "second" : "seconds" }
          </div>
          <div>
            <Button
              className={`button button-primary button-primary-${
                menisActive ? "active" : "inactive"
              }`}
              variant="contained"
              color="primary"
              onClick={mentoggle}
            >
              {menisActive ? "Pause" : "Start"}
            </Button>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={menreset}
            >
              Reset
            </Button>


            <br /><br />
           <b>{menSpeakerCount === 0 ? "No" : menSpeakerCount}
            {" "}
            {menSpeakerCount !== 1 ? "men" : "woman" }
            </b>
            {" "}
            {menSpeakerCount !== 1 ? "have" : "has"}
            {" "}
            spoken.
            <br />
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={() => mensetSpeakerCount(menSpeakerCount+1)}
            >
              + 1
            </Button>
          </div>
        </div>
      </center>
    </div>
    </>
  );
};

export default CombinedTimers;
