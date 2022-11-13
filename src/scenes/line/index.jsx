import React from 'react'
import { Box } from "@mui/material";
import { Header, LineChart } from "../../components";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
