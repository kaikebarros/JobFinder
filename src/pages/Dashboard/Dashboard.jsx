import logo from "../../assets/jobfinder-logo.png";
import Layout from "../../Componentes/Layout";
import  { BtnNotificacao } from "../../Componentes/BtnNotificacao";
import "./Dashboardcss/Dashboard.css";
import SearchBar from "./SearchBar";
function Dashboard() {
  return (
    <Layout  headerAction={<BtnNotificacao/>}>
      <div className="dashboard">
 
        <div className="saudacao">
          <h1>Olá, Kaike! 👋</h1>
          <p>Pronto para encontrar a oportunidade ideal?</p>
        </div>

        <SearchBar />

        <section className="destaque">
          <div className="detaque-texto">
            <h2>Em destaque</h2>
            <a href="#">Ver todas</a>
          </div>

          <div className="card-destaque">  <div className="container-vagas">
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
                  </div></div>

          <h2 className="titulo-vagas">Vagas para você</h2>

          <div className="card-destaque"><div className="container-vagas">
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
                  </div></div>

          <div className="card-destaque">  <div className="container-vagas">
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
                  </div></div>
        </section>
      </div>
    </Layout>
  );
}
export default Dashboard;
