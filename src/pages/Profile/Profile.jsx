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

  return (
    <Layout>
    
        <BtnConfig onClick={() => navigate("/configuracoes")}/>
    
      <div className="profile">
        <div className="profile-header">
          <div className="profile-user">
            <img src={logo} alt="" />

            <h2>{user?.nome}</h2>
            <p>dev front</p>
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
