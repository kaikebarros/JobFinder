export const verificarEmail = (email) => {
  if (!email.trim()) {
    console.log("???");
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
