import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ women, men }) => {
  const womenTime = women.minutes * 60 + women.seconds;
  const menTime = men.minutes * 60 + men.seconds;

  const data = {
    labels: [
      "  Men: total time speaking",
      "  Women: total time speaking",
      "  Men: number of times speaking",
      "  Women: number of times speaking",
    ],
    datasets: [
      {
        label: "Time speaking",
        data: [menTime, womenTime, 0, 0],
        backgroundColor: ["#aeb2c4", "#873b8d", "#b8c2c1", "#b789ba"],
        borderWidth: 1,
      },
      {
        label: "Amount of times speaking",
        data: [0, 0, men.count, women.count],
        backgroundColor: ["#aeb2c4", "#873b8d", "#b8c2c1", "#b789ba"],
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

  return (
    <div style={{ width: "250px", marginBottom: "30px" }}>
      <Pie
        options={options}
        data={data}
        legend={{ display: false }}
      />
    </div>
  );
};

export default Chart;
