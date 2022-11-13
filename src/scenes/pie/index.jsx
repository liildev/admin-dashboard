import React from 'react'
import { Box } from "@mui/material";
import { Header, PieChart } from "../../components";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
