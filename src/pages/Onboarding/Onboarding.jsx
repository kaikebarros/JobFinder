import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import developer from "../../assets/Job-hunt-amico.svg";
import logo from "../../assets/jobfinder-logo.png";
import BotaoProximo from "../../Button/ButtonProximo";
import BotaoPular from "../../Button/ButtonPular";
import Dots from "../../Componentes/Dots";
import "./Onboarding.css";

function Onboarding() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        className="onboarding"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={logo} alt="jobfinder" className="onboarding-logo" />
        <h1 className="h1-onboarding">
          Encontre o trabalho que combine com você
        </h1>
        <img
          src={developer}
          alt="onboarding-amico"
          className="onboarding-amico"
        />

        <Dots active={1}/>
       
        <BotaoPular onClick={() => navigate("/register")} />
        <BotaoProximo onClick={() => navigate("/welcome")} />
      </motion.div>
    </>
  );
}

export default Onboarding;



