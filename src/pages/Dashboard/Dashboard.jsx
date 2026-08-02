import { useState } from "react";
import logo from "../../assets/jobfinder-logo.png";
import { BtnNotificacao } from "../../Componentes/BtnNotificacao";
import Layout from "../../Componentes/Layout";
import "./Dashboardcss/Dashboard.css";
import SearchBar from "./SearchBar";

import { onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig/firebase";
function Dashboard() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });
  }, []);

  const [user, setUser] = useState(null);

  async function buscarDadosUsuario(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioLogado) => {
      if (usuarioLogado) {
        buscarDadosUsuario(usuarioLogado.uid);
        buscarVagas();
      }
    });

    return () => unsubscribe();
  }, []);

  async function buscarVagas() {
    const jobsRef = collection(db, "jobs");
    const resultado = await getDocs(jobsRef);
    const vagas = resultado.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setJobs(vagas);
  }
  const jobsFiltrados = jobs.filter(
    (job) =>
      job.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      job.empresa.toLowerCase().includes(busca.toLowerCase()) ||
      job.local.toLowerCase().includes(busca.toLowerCase()) ||
      job.tipo.toLowerCase().includes(busca.toLowerCase()),
  );

  const vagaDestaque = jobsFiltrados[0];
  return (
    <Layout headerAction={<BtnNotificacao />}>
      <div className="dashboard">
        <div className="saudacao">
          <h1>Olá, {user?.nome}! 👋</h1>
          <p>Pronto para encontrar a oportunidade ideal?</p>
        </div>

        <SearchBar busca={busca} setBusca={setBusca} />

        <section className="destaque">
          <div className="detaque-texto">
            <h2>Em destaque</h2>
            <a href="#">Ver todas</a>
          </div>

          <div className="card-destaque">
            {" "}
            <div className="container-vagas">
              <div className="card-vagas">
                <div className="card-destaque">
                  <img src={logo} alt="" />

                  {vagaDestaque && (
                    <div className="descricao-vaga-destaque">
                      <h2>{vagaDestaque.titulo}</h2>
                      <p>{vagaDestaque.empresa}</p>
                      <p>{vagaDestaque.local}</p>
                      <p>{vagaDestaque.salario}</p>
                      <p>{vagaDestaque.tipo}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <h2 className="titulo-vagas">Vagas para você</h2>
 {jobsFiltrados.slice(1).map((job) => {
   return (
          <div className="card-destaque" key={job.id}>
            <div className="container-vagas">
              <div className="card-vagas">
                <div className="card-destaque">
                  <img src={logo} alt="" />
                 
                   
                      <div className="descricao-vaga-destaque">
                        <div>
                          <h2>{job.titulo}</h2>
                          <p>{job.empresa}</p>
                          <p>{job.local}</p>
                          <p>{job.salario}</p>
                          <p>{job.tipo}</p>
                        </div>
                      </div>
                    
                
                </div>
              </div>
            </div>
          </div>
          );
  })}
      
        </section>
      </div>
        <div className="rodape">
         
          <p>Desenvolvido por Kaike Barros</p>

          <p>Versão 1.0.0  • © 2026</p>
          

          <a
            href="https://github.com/kaikebarros/JobFinder.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
    </Layout>
  );
}
export default Dashboard;
