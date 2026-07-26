import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Candidaturas from "../pages/Candidaturas/Candidaturas";
import Configuracoes from "../pages/Configuracoes/Configuracoes";
import Dashboard from "../pages/Dashboard/Dashboard";
import Favoritos from "../pages/Favoritos/Favoritos";
import GetStarted from "../pages/GetStarted/GetStarted";
import Login from "../pages/Login/Login";
import Notificacoes from "../pages/Notificacoes/Notificacoes";
import Onboarding from "../pages/Onboarding/Onboarding";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Splash from "../pages/Splash/Splash";
import Vagas from "../pages/Vagas/Vagas";
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
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/vagas" element={<Vagas/>}> </Route>
          <Route path="/favoritos" element={<Favoritos/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/candidaturas" element={<Candidaturas/>}></Route>
          <Route path="/notificacoes" element={<Notificacoes/>}></Route>
          <Route path="/configuracoes" element={<Configuracoes/>}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Routers;
