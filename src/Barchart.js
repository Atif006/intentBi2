import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const Barchart = ({ data }) => {
  console.log(data.datasets);
  return (
    <>
      <Box sx={{ width: "950px", height: "500px" }}>
        <Bar data={data} />
      </Box>
    </>
  );
};

export default Barchart;
