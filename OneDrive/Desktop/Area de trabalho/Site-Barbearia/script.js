function chamarWhatsApp() {
  const numero = "5533998280828";
  const url = `https://wa.me/${numero}`;
  const mensagem = "Olá, gostaria de agendar um horário na barbearia!";
  const urlComMensagem = `${url}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlComMensagem, "_blank");
}
