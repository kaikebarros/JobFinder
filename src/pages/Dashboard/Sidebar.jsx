import {
  FiBell,
  FiBriefcase,
  FiHeart,
  FiHome,
  FiList,
  FiSettings,
} from "react-icons/fi";
import "./Dashboardcss/Sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <nav>
          <ul>
            <li>
              {" "}
              <FiHome />
              Início
            </li>
            <li>
              <FiBriefcase />
              Vagas
            </li>
            <li>
              <FiHeart />
              Favoritos
            </li>
            <li>
              <FiList />
              Candidaturas
            </li>
            <li>
              <FiBell />
              Notificações
            </li>
            <li>
              <FiSettings />
              Configurações
            </li>
          </ul>

          <button className="btn-sair">Sair</button>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
