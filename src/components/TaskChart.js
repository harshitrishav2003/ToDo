import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

function TaskChart() {
  const data = {
    labels: ["Pending", "Done"], 
    datasets: [
      {
        data: [7, 4], 
        backgroundColor: ["#4caf50", "#e0e0e0"],
        hoverBackgroundColor: ["#388e3c", "#bdbdbd"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <Doughnut data={data} />
    </div>
  );
}

export default TaskChart;
