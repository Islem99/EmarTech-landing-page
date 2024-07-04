import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./pages/Authnetication-Screens";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LandingPage/>
  </BrowserRouter>
)
