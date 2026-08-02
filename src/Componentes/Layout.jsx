import { useState } from "react";
import Footer from "../pages/Dashboard/Footer";
import Header from "../pages/Dashboard/Header";
import Sidebar from "../pages/Dashboard/Sidebar";
import "./Layout.css";

function Layout({ children, headerAction }) {
  const [menu, setMenu] = useState(false);

  const abrirMenu = () => {
    setMenu(true);
  };
  const fecharMenu = () => {
    setMenu(false);
  };
  return (
    <>
     <div className="popup">
        <p>🚧 EM DESENVOLVIMENTO</p>
      </div>
    <div className="layout">
     
      <Header abrirMenu={abrirMenu} headerAction={headerAction} />

      {menu && <Sidebar fecharMenu={fecharMenu} />}

      <div
        className={`overlay ${menu ? "active" : ""}`}
        onClick={() => setMenu(false)}
      ></div>
      <main> {children}</main>

      <Footer />
    </div>
    </>
  );
}

export default Layout;
