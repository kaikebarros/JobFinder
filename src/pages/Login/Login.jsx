import { browserLocalPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import Entrar from "../../Button/ButtonEntrar";
import { ContGithub, ContGoogle } from "../../Button/ButtonSocial";
import Dots from "../../Componentes/Dots";
import { verificarEmail, verificarSenha } from "../../firebaseConfig/auth";
import { auth } from "../../firebaseConfig/firebase";

import { setPersistence } from "firebase/auth";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("")
  const [nome, setNome] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alternarIconeOlhoLogin = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!verificarEmail(email)) return;
    if (!verificarSenha(senha)) return;

    try {

      await setPersistence(auth, browserLocalPersistence)
      const userLogin = await signInWithEmailAndPassword(auth, email, senha);
      console.log(userLogin.user);
      navigate("/dashboard");
    } catch (error) {
          if (error.code === "auth/email-already-in-use") {
        setErro("Email já cadastrado");
      } else if (error.code === "auth/invalid-email")
        setErro("Digite um email válido.");
      else if (error.code === "auth/missing-password")
        setErro("Digite sua senha.");
      else {
        setErro("Não foi possível entrar. Tente novamente.");
      }
    }
  };

  return (
    <>
      <motion.div
        className="login-container"
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="login-card">
          <img src={logo} alt="logo JobFinder" className="login-logo" />
          <p>Encontre a vaga certa para você</p>
        </div>
        <div className="subtitulo">
          {" "}
          <h2>Bem-vindo!</h2>
          <p>Faça login para continuar</p>
        </div>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="Email">E-mail</label>
            <div className="input-wrapper">
              {/* icone de email */}
              <MdEmail />
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="username"
              />
            </div>
             {erro &&(
          <p className="mensagem-erro">

            {erro}
          </p>
        )}
          </div>

          <div className="login-group">
            <label className="label-senha" htmlFor="password">
              Senha{" "}
            </label>
            <div className="input-wrapper">
              {mostrarSenha ? (
                <FiEye onClick={alternarIconeOlhoLogin} />
              ) : (
                <FiEyeOff onClick={alternarIconeOlhoLogin} />
              )}

              <input
                type= {mostrarSenha?"text":"password"}
                name=""
                id="senha"
                placeholder="••••••••"
                
                required
                value={senha}
                autoComplete="current-password"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <a href="#" className="forgot-password">
              Esqueceu sua senha?
            </a>
            <Entrar onClick={handleLogin} />
            <div className="divisor">ou continue com</div>
            <Dots active={4} />

            <div className="login-social">
              <ContGoogle onClick={() => navigate("/dasboard")} />

              <ContGithub />
            </div>
            <p className="registre-se">
              {" "}
              Ainda não tem conta?{" "}
              <a href="#" onClick={() => navigate("/register")}>
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </motion.div>
    </>
  );
}
export default Login;
