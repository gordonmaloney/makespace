import Timer from "./components/Timer";
import Difference from "./components/Difference";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import logo from './images/logo.png'

function App() {
  const [men, setMen] = useState({ minutes: 0, seconds: 0, count: 0 });
  const [women, setWomen] = useState({ minutes: 0, seconds: 0, count: 0 });

  const setMenProp = (minutes, seconds, count) =>
    {setMen({ minutes: minutes, seconds: seconds, count: count })}

  const setWomenProp = (minutes, seconds, count) =>
    setWomen({  minutes: minutes, seconds: seconds, count: count });


  const [stopMenTimer, setStopMenTimer] = useState(false)
  const [stopWomenTimer, setStopWomenTimer] = useState(false)

  return (
      <div className="App">


        <Grid container spacing={1}   justifyContent="space-around"
>
          <Grid item xs={6} sm={6} md={5}>
            <Timer
              gender="Women"
              difference={(minutes, seconds, count) =>
                setWomenProp(minutes, seconds, count)
              }
              stopTimer={stopWomenTimer}
              stopSame={() => setStopWomenTimer(false)}
              stopOther={() => setStopMenTimer(true)}
            />
          
          </Grid>

          <Grid item xs={6} sm={6} md={5}>
            <Timer
              gender="Men"
              difference={(minutes, seconds, count) =>
                setMenProp(minutes, seconds, count)
              }
              stopTimer={stopMenTimer}
              stopSame={() => setStopMenTimer(false)}
              stopOther={() => setStopWomenTimer(true)}
            />
          </Grid>
        </Grid>


        <Difference women={women} men={men} />
      </div>
  );
}

export default App;
