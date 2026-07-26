import {
  FiBell,
  FiFileText,
  FiLogOut,
  FiSettings,
  FiSliders,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import { BtnConfig } from "../../Componentes/BtnConfig";
import Layout from "../../Componentes/Layout";
import "./Profile.css";
function Profile() {
  const navigate = useNavigate()
  return (
    <Layout >
        <button onClick={()=>navigate("/configuracoes")}> 
       <BtnConfig/>
       </button>
      <div className="profile">
        <div className="profile-header">
     

          <div className="profile-user">
            <img src={logo} alt="" />

            <h2>Kaike Barros</h2>
            <p>Desenvolvedor Front-end</p>
            <a href="#">Ver perfil público</a>
          </div>

          <div className="profile-numbers">
            <p>
              <span>24</span>
              Candidaturas
            </p>

            <p>
              <span>8</span>
              Salvas
            </p>

            <p>
              <span>3</span>
              Entrevistas
            </p>
          </div>

          <nav>
            <ul>
              <li>
                {" "}
                <FiUser />
                Meus dados
              </li>
              <li>
                <FiFileText />
                Currículo e documentos
              </li>
              <li>
                <FiSliders />
                Preferências de vaga
              </li>
              <li>
                <FiBell />
                Notificações
              </li>

              <li onClick={()=>navigate("/configuracoes")}>
                <FiSettings />
                Configurações
              </li>
              <li>
                <FiLogOut />
                Sair
              </li>
            </ul>

         
          </nav>
        </div>
     
      </div>
   </Layout>
  );
}

export default Profile;
