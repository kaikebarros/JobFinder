import {
  FiBell,
  FiBriefcase,
  FiHeart,
  FiHome,
  FiList,
  FiSettings,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Dashboardcss/Sidebar.css";

function Sidebar({fecharMenu}) {
  const navigate = useNavigate();
  

 
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li onClick={()=>navigate("/dashboard")}>
              {" "}
              <FiHome />
              Início
            </li>
            <li onClick={() => navigate("/vagas")}>
              <FiBriefcase />
              Vagas
            </li>
            <li onClick={()=>navigate("/favoritos")}>
              <FiHeart />
              Favoritos
            </li>
            <li onClick={()=>navigate("/candidaturas")}>
              <FiList />
              Candidaturas
            </li>
            <li onClick={()=>navigate("/notificacoes")}>
              <FiBell />
              Notificações
            </li>
            <li onClick={()=>navigate("/configuracoes")}>
              <FiSettings />
              Configurações
            </li>
          </ul>

          
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
