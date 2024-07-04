import { FC } from "react";
import { Toolbar, Button, Box, MenuItem, Select, styled } from "@mui/material";

const MenuToolbar = styled(Toolbar) ({
  display: "flex", 
  justifyContent: "space-between",
  "&.menu-container": {
    padding: "0",
    "@media(min-width: 768px)": {
      margin: "0 10px",
    },
    "@media(min-width: 900px)": {
      margin: "0 20px",
    },
    "@media(min-width: 1080px)": {
      margin: "0 70px",
    },
  },
});

const MenuButton = styled(Button) ({
  width: "auto",
  border: "none",
  margin: "2px",
});

const MenuSelect = styled(Select) ({
  "&.language-select-input": {
    margin: "0",
    ".MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    ".MuiSvgIcon-root,#language-select": {
      color: "#fff",
    },
  },
});

export const Header: FC = () => {
  return (
    <Box className="d-mobile-none">
      <MenuToolbar className="menu-container">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={"../../../src/assets/emartech-logo-white.svg"}
            alt="logo" style={{ marginRight: "30px" }} />
          <MenuButton className="para-text white-color">Home</MenuButton>
          <MenuButton className="para-text white-color">About</MenuButton>
          <MenuButton className="para-text white-color">Services</MenuButton>
          <MenuButton className="para-text white-color">Contact</MenuButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MenuSelect
            labelId="language-select-label"
            id="language-select"
            value={"en"}
            className="language-select-input para-text"
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"en"}>Arabic</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
          </MenuSelect>
          <MenuButton className="para-text white-color auth-btn" sx={{ padding: "10px 60px", border: "none", borderRadius: "0" }}>Login</MenuButton>
        </Box>
      </MenuToolbar>
    </Box>
  );
}
