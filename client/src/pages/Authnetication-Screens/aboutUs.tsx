import { FC } from "react";
import { Box, styled } from "@mui/material";

const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('Rectangle 1363.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  flex: "1",
  minHeight: "48vh",
  "&.image-box": {
    backgroundImage: "url('Rectangle 1364.jpg')",
  },
  "&.content-box": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
  },
  ".sub-heading-text": {
    display: "flex",
    alignItems: "center",
    color: "#39C64E",
    ".line-span-holder": {
      display: "inline-flex",
      flexDirection: "column",
      ".line-span": {
        display: "inline-block",
        width: "30px",
        height: "2px",
        background: "rgba(0, 0, 0, 0.87)",
        margin: "3px 15px 3px 0",
      },
    },
  },
  ".para-text": {
    width: "inherit",
    margin: "10px 0 15px",
  },
  ".content-holder": {
    maxWidth: "370px",
  },
  ".heading-text": {
    maxWidth: "265px"
  },
  "@media(min-width: 480px)": {
    minHeight: "75vh",
    ".content-holder": {
      maxWidth: "420px",
    },
    ".heading-text": {
      maxWidth: "280px"
    },
  },
  "@media(min-width: 768px)": {
    minHeight: "80vh",
    ".heading-text": {
      maxWidth: "inherit"
    },
    "&.content-box": {
      padding: "10px",
    },
    ".para-text": {
      margin: "15px 0",
    },
    ".sub-heading-text": {
      ".line-span-holder": {
        ".line-span": {
          width: "40px",
        },
      },
    },
    ".content-holder": {
      maxWidth: "400px",
    },
  },
  "@media(min-width: 900px)": {
    "&.content-box": {
      padding: "30px",
    },
    ".content-holder": {
      maxWidth: "400px",
    },
  },
  "@media(min-width: 1080px)": {
    ".content-holder": {
      maxWidth: "465px",
    },
  },
  "@media(min-width: 1260px)": {
    minHeight: "90vh",
    ".para-text": {
      margin: "15px 0",
    },
    ".content-holder": {
      maxWidth: "560px",
    },
  },
  "@media(min-width: 1800px)": {},
});

const StyledBox = styled(Box) ({
  "&.flex-center": {
    display: "block",
  },
  "@media(min-width: 768px)": {
    "&.flex-center": {
      display: "flex",
      alignItems: "stretch",
      margin: "0 40px",
    },
  },
});
export const AboutUs: FC = () => {
  return (
    <StyledBox className="flex-center">
      <StyledBackgroundBox className="content-box">
        <Box className="content-holder">
          <h4 className="sub-heading-text"><span className="line-span-holder"><span className="line-span"></span><span className="line-span"></span></span>ABOUT US</h4>
          <h1 className="heading-text">Build Everything You Needs</h1>
          <p className="para-text">Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
          <p className="para-text">Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been  the industry's standard dummy text ever since the 1500s</p>
        </Box>
      </StyledBackgroundBox>
      <StyledBackgroundBox className="image-box">

      </StyledBackgroundBox>
    </StyledBox>
  );
};
