import logo from "../../assets/jobfinder-logo.png";
import Layout from "../../Componentes/Layout";
import SearchBar from "../Dashboard/SearchBar";
import "./Vagas.css";
function Vagas() {
  return (
     <Layout>
      <div className="vagas">
        <h1>Vagas</h1>
        <div className="pesquisar-vagas">
          <SearchBar />
       
        </div>

        <p>120 vagas encontradas</p>

        <div className="container-vagas">
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

            
          </div>
        </div>
       
      </div>
     </Layout>
  );
}

export default Vagas;
