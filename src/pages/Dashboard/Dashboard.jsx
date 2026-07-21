import { useState } from "react";
import "../../styles/reset.css";
import "./Dashboardcss/Dashboard.css";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import logo from "../../assets/jobfinder-logo.png";

function Dashboard() {
  const [menu, setMenu] = useState(false);

  const abrirMenu = () => {
    setMenu(true);
  };

  

  return (
    <>
      <div className="dashboard">
        {" "}
        <Header abrirMenu={abrirMenu} />

        {menu  && <Sidebar
        />}
      
        <div className={`overlay ${menu? "active":""}` } onClick={() => setMenu(false)}></div>
        <SearchBar />
        <div className="destaque">
          <div className="detaque-texto">
            <h2>Em destaque</h2>
            <a href="#">Ver todas</a>
          </div>
          <div className="card-destaque">
            <img src={logo} alt="" />

            <div className="descricao-vaga-destaque">
              <h2>Front-end Developer</h2>
              <p>Nubank</p>
              <p>Remoto</p>
              <p>R$ 8,000 - R$ 12,000</p>
            </div>
          </div>
          <h2>Vagas para você</h2>
          <div className="card-destaque">
            <img src={logo} alt="" />

            <div className="descricao-vaga-destaque">
              <h2>Front-end Developer</h2>
              <p>Nubank</p>
              <p>Remoto</p>
              <p>R$ 8,000 - R$ 12,000</p>
            </div>
          </div>
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
        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
