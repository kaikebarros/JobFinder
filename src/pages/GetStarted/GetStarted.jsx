import { useNavigate } from "react-router-dom";
import imgGetStarted from "../../assets/Enthusiastic-bro.svg";
import BotaoComecar from "../../Button/ButtonComecar";
import BotaoLogar from "../../Button/ButtonLogar";
import Dots from "../../Componentes/Dots/Dots";

import "./GetStarted.css";
function GetStarted() {
  const navigate = useNavigate()
  return (
    <div className="getstarted">
      {" "}
      <img
        className="imggetstarted"
        src={imgGetStarted}
        alt="vaga encontrada"
      />
      <h1 className="h1-getstarted">Sua oportunidade começa aqui!</h1>
      <p className="p-getstarted">
        Crie seu perfil, explore vagas personalizadas e candidate-se com
        facilidade. Seu próximo emprego pode estar a um toque de distâcia
      </p>
       <Dots active={3}/>
      < BotaoComecar onClick={() => navigate("/login")} />
    <BotaoLogar onClick={()=> navigate("/login")}/>
    </div>
  );
}

export default GetStarted;
