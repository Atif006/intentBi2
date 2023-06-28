import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          width: "700px",
          height: "600px",
          padding: "10px",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Pie data={data} />
      </Box>
    </>
  );
};

export default PieChart;
