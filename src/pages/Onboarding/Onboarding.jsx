import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import developer from "../../assets/Job-hunt-amico.svg";
import logo from "../../assets/jobfinder-logo.png";
import BotaoProximo from "../../Button/ButtonProximo";
import BotaoPular from "../../Button/ButtonPular";
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

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        {/* mudar rota com o click do botao para pular para pagina de login, e proximo para o welcome  */}
        <BotaoPular onClick={() => navigate("/")} />
        <BotaoProximo onClick={() => navigate("/welcome")} />
      </motion.div>
    </>
  );
}

export default Onboarding;

/*corrigir o splash, tenho que criar a pagina de 2s e o splash atual vai virar pag de inicio
 */
