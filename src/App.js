import Timer from "./components/Timer";
import Difference from "./components/Difference";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Chart from "./components/Chart";

function App() {
  const [men, setMen] = useState({ minutes: 0, seconds: 0, count: 0 });
  const [women, setWomen] = useState({ minutes: 0, seconds: 0, count: 0 });

  const setMenProp = (minutes, seconds, count) =>
    {setMen({ minutes: minutes, seconds: seconds, count: count })}

  const setWomenProp = (minutes, seconds, count) =>
    setWomen({  minutes: minutes, seconds: seconds, count: count });


  return (
      <div className="App">

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Timer
              gender="Women"
              difference={(minutes, seconds, count) =>
                setWomenProp(minutes, seconds, count)
              }
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Timer
              gender="Men"
              difference={(minutes, seconds, count) =>
                setMenProp(minutes, seconds, count)
              }
            />
          </Grid>
        </Grid>

        <Difference women={women} men={men} />
      </div>
  );
}

export default App;
