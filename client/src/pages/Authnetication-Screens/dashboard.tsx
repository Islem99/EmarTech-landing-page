import { FC } from "react";
import { Box, Button, styled } from "@mui/material";
import { Header } from "./index";

const StyledBackgroundBoxImage = styled(Box) ({
  backgroundImage: "url('landing-image-desktop.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "50vh",
  position: "relative",
  display: "flex",
  alignItems: "center",
  "@media(min-width: 480px)": {
    minHeight: "60vh",
  },
  "@media(min-width: 768px)": {
    display: "block",
    backgroundImage: "url('landing-image-desktop.png')",
    minHeight: "90vh",
    marginBottom: "100px",
  },
  "@media(min-width: 1260px)": {
    minHeight: "100vh",
  },
});

const StyledBackgroundBoxGradient = styled(Box) ({
  // backgroundImage: "url('../../../src/assets/landing-image-desktop.png')",
  background: "linear-gradient(263.69deg, rgba(6, 150, 88, 0.4) 43.5%, #000000 93.5%)",
  opacity: "0.5",
  width: "100%",
  height: "100%",
  position: "absolute",
});

const ContainedBox = styled(Box) ({
  position: "inherit",
  paddingLeft: "30px",
  zIndex: "9",
  maxWidth: "280px",
  ".sub-heading-text": {
    display: "flex",
    alignItems: "center",
    ".line-span-holder": {
      display: "inline-flex",
      flexDirection: "column",
      ".line-span": {
        display: "inline-block",
        width: "30px",
        height: "2px",
        background: "#39C64E",
        margin: "3px 15px 3px 0",
      },
    },
  },
  ".auth-btn.para-text": {
    margin: "0",
    width: "inherit",
  },
  ".para-text": {
    margin: "10px 0 15px",
  },
  ".auth-btn": {
    padding: "13px 25px",
  },
  "@media(min-width: 480px)": {
    maxWidth: "320px",
  },
  "@media(min-width: 768px)": {
    position: "absolute",
    top: "30%",
    left: "5%",
    maxWidth: "405px",
    ".auth-btn": {
      padding: "10px 60px",
    },
    ".para-text": {
      margin: "20px 0",
    },
    ".sub-heading-text": {
      ".line-span-holder": {
        ".line-span": {
          width: "40px",
        },
      },
    },
  },
  "@media(min-width: 900px)": {
    maxWidth: "405px",
  },
  "@media(min-width: 1080px)": {
    maxWidth: "435px",
  },
  "@media(min-width: 1260px)": {
    maxWidth: "665px",
    top: "25%",
    left: "5%",
    ".para-text": {
      margin: "40px 0",
    },
    ".auth-btn": {
      padding: "15px 40px",
    },
  },
  "@media(min-width: 1800px)": {
    maxWidth: "670px",
    ".para-text": {
      margin: "40px 0",
    },
    ".auth-btn": {
      padding: "15px 40px",
    },
  },
});

export const Dashboard: FC = () => {
  return (
    <StyledBackgroundBoxImage>
      <StyledBackgroundBoxGradient></StyledBackgroundBoxGradient>
      <ContainedBox>
        <h4 className="sub-heading-text white-color"><span className="line-span-holder"><span className="line-span"></span><span className="line-span"></span></span>GENERAL CONTRACTING</h4>
        <h1 className="heading-text white-color">Build Everything You Needs</h1>
        <p className="para-text white-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
        <Button className="para-text white-color auth-btn" sx= {{ border: "none", borderRadius: "0", width: "auto" }}>Get a Quote</Button>
      </ContainedBox>
      <Header/>
    </StyledBackgroundBoxImage>
  );
};
