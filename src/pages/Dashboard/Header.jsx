import { FiBell, FiMenu } from "react-icons/fi";

import "./Dashboardcss/Header.css";
function Header({ abrirMenu }) {
  return (
    <>
      <div className="reader-actions">
        <FiMenu onClick={abrirMenu} />

        <FiBell />
      </div>

      <div className="saudacao">
        <h1>Olá, Kaike! 👋</h1>
        <p>Pronto para encontrar a oportunidade ideal?</p>
      </div>
    </>
  );
}

export default Header;
