import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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
import { auth, db } from "../../firebaseConfig/firebase";
import "./Profile.css";
function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [mostarDados, setMostrarDados] = useState(false);

  async function buscarDadosUsuario(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    console.log("UID buscado:", uid);
    console.log("Existe?", docSnap.exists());
    console.log("Dados:", docSnap.data());

    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioLogado) => {
      if (usuarioLogado) {
        buscarDadosUsuario(usuarioLogado.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const meusDados = () => {
    return (
      <div className="meus-dados">
        <h2>Meus dados</h2>

        <p>{`Nome: ${user.nome}`}</p>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Cargo: ${user.cargo}`}</p>
      </div>
    );
  };

  return (
    <Layout>
      <div onClick={() => navigate("/configuracoes")}>
        <BtnConfig />
      </div>

      <div className="profile">
        <div className="profile-header">
          <div className="profile-user">
            <img src={logo} alt="" />

            <h2>{user?.nome}</h2>
            <p>{user?.cargo}</p>
            <a href="#">Ver perfil público</a>
          </div>

          <div className="profile-numbers">
            <p>
              <span>0</span>
              Candidaturas
            </p>

            <p>
              <span>0</span>
              Salvas
            </p>

            <p>
              <span>0</span>
              Entrevistas
            </p>
          </div>

          <nav>
            <ul>

              {mostarDados && meusDados()}
              <li onClick={() => setMostrarDados(!mostarDados)}>
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

              <li onClick={() => navigate("/configuracoes")}>
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
