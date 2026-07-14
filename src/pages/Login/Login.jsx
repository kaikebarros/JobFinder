import { motion } from "framer-motion";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import Entrar from "../../Button/ButtonEntrar";
import { ContGithub, ContGoogle } from "../../Button/ButtonSocial";
import Dots from "../../Componentes/Dots/Dots";
import { verificarEmail, verificarSenha } from "../../utils/verificarLogin";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
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
              />
            </div>
          </div>

          <div className="login-group">
            <label htmlFor="password">Senha </label>
            <div className="input-wrapper">
              <FiEyeOff />

              <input
                type="password"
                name=""
                id="senha"
                placeholder="••••••••"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <a href="#" className="forgot-password">
              Esqueceu sua senha?
            </a>
            <Entrar
              onClick={() => {
                if (verificarEmail(email) && verificarSenha(senha)) {
                  navigate("/");
                }
              }}
            />
            <div className="divisor">ou continue com</div>
            <Dots active={4} />

            <div className="login-social">
              <ContGoogle onClick={() => navigate("/")} />

              <ContGithub />
            </div>
            <p className="registre-se">
              {" "}
              Ainda não tem conta? <a href="#">Cadastre-se</a>
            </p>
          </div>
        </form>
      </motion.div>
    </>
  );
}
export default Login;
