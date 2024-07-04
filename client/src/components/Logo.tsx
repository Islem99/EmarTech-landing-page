import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import logoImage from "../assets/icon_logo.png";

export const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src={logoImage} alt="logo" />
      </Link>
    </Box>
  );
};
