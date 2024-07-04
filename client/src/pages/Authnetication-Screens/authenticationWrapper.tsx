import { FC, ReactNode } from "react"
import { Container, Box, styled } from "@mui/material"
import emarTechLogo from "../../assets/emartech-logo.png";


const StyledBackgroundBox = styled(Box) ({
  backgroundImage: "url('../../src/assets/auth-login-1.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  height: "100%",
});
export const AuthenticationWrapper : FC<{children: ReactNode}> = ({ children }) => {
  return (
    <Container className="max-w-100 space-0 main-container">
      <Container className="max-w-100 space-0 d-flex align-stretch justify-center">
        <Container className="space-0 image-container d-mobile-none">
          <StyledBackgroundBox className="min-h-100vh image"></StyledBackgroundBox>
        </Container>
        <Container className="content-container d-flex justify-center">
          <Box className="auth-container flex-center">
            <img
              alt="EmarTech Logo"
              className="emar-logo"
              src={emarTechLogo}
            />
            <Box>
              {children}
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
    
  )
};
