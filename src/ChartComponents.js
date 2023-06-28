import { Box, Typography } from "@mui/material";
import PieChart from "./PieChart";
import Barchart from "./Barchart";
import { runData, bowlerData } from "./Datas";
const ChartComponents = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PieChart data={runData} />
      <Typography
        variant="h4"
        sx={{ fontWeight: 500, marginTop: "10px", marginBottom: "100px" }}
      >
        Pie Chart Of Highest Run of Batsman
      </Typography>
      <hr />
      <Barchart data={bowlerData} />
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        Pie Chart Of Highest Wickets of Bowlers in 2008 - 2023
      </Typography>
    </Box>
  );
};

export default ChartComponents;
