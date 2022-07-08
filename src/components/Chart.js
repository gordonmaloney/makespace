import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ women, men }) => {
  const womenTime = women.minutes * 60 + women.seconds;
  const menTime = men.minutes * 60 + men.seconds;

  const data = {
    labels: [
      "",
      "",
      "  Men - time",
      "  Women - time",
      "  Men - number",
      "  Women - number",
    ],
    datasets: [
      {
        label: "Time speaking",
        data: [0.0001, 0.0001, menTime, womenTime, 0, 0],
        backgroundColor: ["#aeb2c4","#873b8d", "#aeb2c4", "#873b8d", "#b8c2c1", "#b789ba"],
        borderWidth: 1,
      },
      {
        label: "Amount of times speaking",
        data: [0.0001, 0.0001, 0, 0, men.count, women.count],
        backgroundColor: ["#aeb2c4", "#b789ba", "#b789ba", "#873b8d", "#b8c2c1", "#b789ba"],
        borderColor: ["white", "white"],
      },
    ],
  };

  const options = {
    animations: false,
    plugins: {
        legend: {
          display: false,
        },
      }
  };

  let heightVar = 0 
  womenTime === 0 && menTime === 0 && women.count === 0 && men.count === 0 ? heightVar = 0 : heightVar = "auto"

  return (
    <div className="chart" style={{ width: "150px", height: "auto", marginBottom: "-20px", marginTop: "-10px" }}>
      <Pie
        options={options}
        data={data}
        legend={{ display: false }}
      />
    </div>
  );
};

export default Chart;
