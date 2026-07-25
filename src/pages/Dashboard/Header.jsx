import { FiMenu } from "react-icons/fi";
import "./Dashboardcss/Header.css";

function Header({ abrirMenu, headerAction }) {
  return (
    <header className="header">

      <button className="menu-button" onClick={abrirMenu}>
        <FiMenu />
      </button>

      <div className="header-notificacao">
        {headerAction}
      </div>

    </header>
  );
}

export default Header;