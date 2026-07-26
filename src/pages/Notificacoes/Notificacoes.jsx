import Layout from "../../Componentes/Layout";
import logo from "../../assets/jobfinder-logo.png";
import "./Notificacoes.css";
function Notificacoes() {
  return (
    <Layout>
      <div className="notificacoes">
        <h1>Notificações</h1>
        <button>Marcar todas como lidas</button>

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
      </div>
    </Layout>
  );
}

export default Notificacoes