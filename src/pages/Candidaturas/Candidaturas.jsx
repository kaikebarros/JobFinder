import { FiList } from "react-icons/fi";
import logo from "../../assets/jobfinder-logo.png";
import Footer from "../Dashboard/Footer";
import "./Candidaturas.css";
import Layout from "../../Componentes/Layout";

function Candidaturas() {
  return (
     <Layout>
      <div className="candidaturas">
        <h1>Minhas candidaturas</h1>

        <div className="btn-candidaturas">
          <button>Todas</button>
          <button>Em andamento</button>
          <button>Finalizadas</button>
        </div>

        <div className="card-vagas">
          <div className="card-destaque">
            <img src={logo} alt="" />

            <div className="descricao-vaga-destaque">
              <h2>Front-end Developer</h2>
              <p>Nubank</p>
              <p>Remoto</p>
              <p>R$ 8,000 - R$ 12,000</p>
            </div>

            <button className="btn-status">Em análise</button>
          </div>
        </div>

       
      </div>
      </Layout>
  );
}
export default Candidaturas