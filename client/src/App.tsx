import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contextProviders/authentication";
import { 
  Login , Signup, ForgotPassword, EmailVerification, ResetPassword, ResetPasswordSuccess, LandingPage
} from "./pages/Authnetication-Screens/index";
import { baseTheme } from "./theme";



export const App = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/forgotPassword" element={<ForgotPassword />}/>
            <Route path="/emailVerification/:email" element={<EmailVerification />}/>
            <Route path="/resetPassword" element={<ResetPassword />}/>
            <Route path="/resetPasswordSuccess" element={<ResetPasswordSuccess />}/>
            <Route path="/dashboard" element={<LandingPage />}/>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};
