import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

export const verificarEmail = (email) => {
  if (!email.trim()) {
    console.log("Email inválido");
    return false;
  }

  return true;
};

export const verificarSenha = (senha) => {
  if (!senha.trim()) {
    console.log("Senha inválida");
    return false;
  }

  return true;
};

export const Auth = async () => {
  const provider = new GoogleAuthProvider();

  try {
    // login aqui
  } catch (error) {
    console.log(error);
  }
};