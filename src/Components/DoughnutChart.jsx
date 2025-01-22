import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const DoughnutChart = () => {

  const data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["rgb(63 145 66)", "rgb(160 237 164)"],
      },
    ],
  };

  const charRef = useRef(null);
  useEffect(() => {
    const ctx = charRef.current.getContext("2d");
    const doughnutGraph = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        cutoutPercentage: 30,
        responsive: true,
      },
    });
    return () => {
      doughnutGraph.destroy();
    };
  });

  return (
    <div>
      <canvas ref={charRef} className="w-24 h-24" >
        {" "}
      </canvas>
    </div>
  );
};

export default DoughnutChart;
