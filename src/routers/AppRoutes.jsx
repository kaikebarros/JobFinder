import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import GetStarted from "../pages/GetStarted/GetStarted";
import Login from "../pages/Login/Login";
import Onboarding from "../pages/Onboarding/Onboarding";
import Register from "../pages/Register/Register";
import Splash from "../pages/Splash/Splash";
import Welcome from "../pages/Welcome/Welcome";
function Routers() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/onboarding" element={<Onboarding />}></Route>

          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/getstarted" element={<GetStarted />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Routers;
