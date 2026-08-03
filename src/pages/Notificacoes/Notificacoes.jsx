import { FiX } from "react-icons/fi";
import logo from "../../assets/jobfinder-logo.png";
import "./Notificacoes.css";
function Notificacoes({fechar}) {


  return (
    <>
    
    <div className="overlay-notificacoes"onClick={fechar}></div>
    <div className="notificacoes"  >

      
      <div className="notificacoes-header">
        {" "}
        <h1>Notificações</h1>
        <button className="fechar" onClick={fechar}>
          <FiX />
        </button>
      </div>

      <button className="btn-lidas">Marcar todas como lidas</button>

      <div className="card-notificacao">
        <div className="card-destaque">
          <img src={logo} alt="" />

          <div className="descricao-notificacao">
            <h2>Nova vaga</h2>
            <p>Front end developer na Stone</p>
            <p>há 10 minutos</p>
          </div>
        </div>
        <div className="dots-notificacao"></div>
      </div>
    </div></>
  );
}

export default Notificacoes;
