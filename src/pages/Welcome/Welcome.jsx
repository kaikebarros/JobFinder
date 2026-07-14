import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jobapplicant from "../../assets/People search-bro.svg";
import BotaoProximo from "../../Button/ButtonProximo";
import BotaoPular from "../../Button/ButtonPular";
import "./Welcome.css";
import Dots from "../../Componentes/Dots/Dots";
function Welcome() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100, opacity: 0 }}
        duration={{ duration: 0.2 }}
        className="welcome"
      >
        <img
          src={jobapplicant}
          alt="detetive de empregos"
          className="jobapplicant"
        />
        <h1 className="h1-welcome">Encontre sua próxima oportunidade</h1>
        <p className="p-welcome">
          Descubra milhares de vagas de emprego e encontre a oportunidade ideal
          para sua carreira em poucos minutos
        </p>
           <Dots active={2}/>

        <BotaoPular onClick={() => navigate("/")} />
        <BotaoProximo onClick={() => navigate("/getstarted")} />
      </motion.div>
    </>
  );
}

export default Welcome;
