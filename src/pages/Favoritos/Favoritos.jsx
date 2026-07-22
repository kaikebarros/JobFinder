import { FiHeart } from "react-icons/fi";
import logo from "../../assets/jobfinder-logo.png";
import Footer from "../Dashboard/Footer";
import "./Favoritos.css";
function Favoritos() {
  return (
    <>
      <div className="favoritos">
        <h1>Favoritos</h1>

        <div className="btn-favoritos">
          <button>Vagas</button>
          <button>Empresas</button>
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
          </div>

          <FiHeart />

        </div>

        <Footer/>
      </div>
    </>
  );
}

export default Favoritos;
