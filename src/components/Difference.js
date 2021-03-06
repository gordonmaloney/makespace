import React, { useState } from "react";
import Chart from "./Chart";
import { Grid } from "@material-ui/core";
import logo from "../images/logo.png";

export default function Difference({ men, women, resetGender }) {
  let more = "neither";
  let differenceMin =
    men.minutes > women.minutes
      ? men.minutes - women.minutes
      : women.minutes - men.minutes;
  let differenceSec =
    (men.seconds > women.seconds
      ? men.seconds - women.seconds
      : women.seconds - men.seconds) + 1;

  men.minutes === women.minutes && men.seconds === women.seconds
    ? (more = "neither")
    : men.minutes > women.minutes
    ? (more = "less")
    : men.minutes < women.minutes
    ? (more = "more")
    : men.seconds > women.seconds
    ? (more = "less")
    : (more = "more");

  const Times = () => {
    if (more === "neither") {
      return (
        <>Women and men have been speaking for the same amount of time, </>
      );
    } else {
      return (
        <>
          Women have been speaking for{" "}
          <u>
            {differenceMin !== 0 ? (
              <>
                {differenceMin} {differenceMin === 1 ? "minute" : "minutes"} and{" "}
              </>
            ) : (
              <></>
            )}
            {differenceSec} {differenceSec === 1 ? "second" : "seconds"} {more}
          </u>{" "}
          than men,{" "}
        </>
      );
    }
  };

  const Count = () => {
    if (women.count === men.count) {
      return "the same amount of women and men have spoken.";
    }
    return (
      <>
        <u>
          {women.count > men.count
            ? women.count - men.count
            : men.count - women.count}{" "}
          {women.count > men.count ? "more" : "fewer"}
        </u>{" "}
        women than men have spoken.
      </>
    );
  };
  return (
    <>
    <Grid container spacing={1}>
      <Grid xs={12}>
        <center>
          <h4 style={{paddingTop: "10px", marginTop: "0px", marginBottom: "5px"}}>
            <Times />
            <br />
            and <Count />
          </h4>
        </center>
      </Grid>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        <h4>
          <center>
            <Chart women={women} men={men} />
          </center>
        </h4>
      </Grid>

</Grid>

    <Grid container spacing={1} direction="row-reverse">

      <Grid item xs={2} sm={4}>
        <img src={logo} alt="Logo" className="logo" />
      </Grid>
    </Grid>
    </>
  );
}
