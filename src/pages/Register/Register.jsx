import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/jobfinder-logo.png";
import Entrar from "../../Button/ButtonEntrar";
import { ContGithub, ContGoogle } from "../../Button/ButtonSocial";
import { verificarEmail, verificarSenha } from "../../firebaseConfig/auth";
import { auth, db } from "../../firebaseConfig/firebase";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!verificarEmail(email)) return;
    if (!verificarSenha(senha)) return;

    try {
      const userCreate = await createUserWithEmailAndPassword(
        auth,
        email,
        senha,
      );

      const id = userCreate.user.uid
      const userRef = doc(db,"users",id)
      console.log("Salvando no Firestore...");
      await setDoc(userRef,{email, nome})
      console.log("Salvo no Firestore...");
      console.log(userCreate.user);
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("Email já cadastrado");
      } else {
        console.log(error.message);
      }
    }
  };

  const alternarIconeOlho = () => {
    setMostrarSenha(!mostrarSenha);
  };
  return (
    <motion.div
      className="register-container"
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="register-card">
        <img src={logo} alt="Logo JobFinder" className="register-logo" />
        <p>Encontre a vaga certa para você</p>
      </div>

      <div className="subtitulo">
        <h2>Crie sua conta</h2>
        <p>Preencha seus dados para continuar</p>
      </div>

      <form className="register-form" onSubmit={handleRegister}>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <div className="input-wrapper">
            <FiUser />
            <input
              type="text"
              id="nome"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <div className="input-wrapper">
            <MdEmail />
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <div className="input-wrapper">
            <FiLock />
            <input
              type={mostrarSenha ? "text" : "password"}
              id="senha"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              autoComplete="current-password"
            />
            {mostrarSenha ? (
              <FiEye className="eye-icon" onClick={alternarIconeOlho} />
            ) : (
              <FiEyeOff className="eye-icon" onClick={alternarIconeOlho} />
            )}
        
          </div>
        </div>

        <Entrar onClick={handleRegister} />

        <div className="divisor">ou continue com</div>

        <div className="register-social">
          <ContGoogle />
          <ContGithub />
        </div>
      </form>
    </motion.div>
  );
}

export default Register;
