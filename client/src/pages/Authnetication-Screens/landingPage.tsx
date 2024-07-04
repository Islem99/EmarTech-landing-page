import { FC } from "react";
import { Dashboard, AboutUs } from "./index";
import { Box } from "@mui/material";

export const LandingPage: FC = () => {
  return (
    <Box>
      <Dashboard/>
      <AboutUs/>
    </Box>
  );
};
