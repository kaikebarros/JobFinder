import {
  FiBell,
  FiChevronRight,
  FiInfo,
  FiLock,
  FiLogOut,
  FiMoon,
  FiSun,
  FiUser,
} from "react-icons/fi";
import Layout from "../../Componentes/Layout";
import "./Configuracoes.css";
function Configuracoes() {
  return (
    <Layout>
      <div className="titulo">
        <h1>Configurações</h1>
        <p>Gerencie suas preferências e contas</p>
      </div>
    
      <div className="card-config">
          <span>CONTA</span>
        <div className="card">
          <FiUser />
          <div className="card-info">
          <h2>Minha conta</h2>
          <p>Edite seus dados pessoais</p>
          </div>
          <FiChevronRight />
        </div>

        <div className="card">
          <FiLock />
          <div className="card-info">
          <h2>Segurança</h2>
          <p>Senhas e autenticação</p>
          </div>
          <FiChevronRight />
        </div>

        <span>PREFERÊNCIAS</span>
        <div className="card">
          <FiBell />
           <div className="card-info">
          <h2>Notificações</h2>
          <p>Gerencies seus alertas</p>
          </div>
          <FiChevronRight />
        </div>
        <div className="card">
          <FiMoon />
             <div className="card-info">
          <h2>Aparência</h2>
          <p>Mudar tema</p>
          </div>
          <FiSun />
        </div>
        <span>GERAL</span>

        <div className="card">
          <FiInfo />
          <div className="card-info">
          <h2>Sobre o JobFinder</h2>
          <p>Versão 1.0.0</p>
             </div>
          <FiChevronRight />
        </div>



        <button className="btn-sair">
          <FiLogOut /> Sair
        </button>
      </div>
    </Layout>
  );
}

export default Configuracoes;
