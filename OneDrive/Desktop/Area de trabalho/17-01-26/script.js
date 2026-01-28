/* 🔥transformar em bloco de notas
 limitar pra não sair da tela
 evitar posições repetidas
 ou fazer elas se moverem.
fazer com que o usuario possa mover o bloco*/
/*
PROJETO: Bloco de Notas Flutuante

✔ Criar botão centralizado na tela
✔ Estilizar botão com gradiente e hover
✔ Criar notas dinamicamente com JS
✔ Usar textarea dentro da nota
✔ Definir tamanho da nota
✔ Gerar posição aleatória na tela
✔ Evitar que a nota saia da tela usando largura/altura
✔ Usar window.innerWidth e innerHeight
✔ Usar offsetWidth e offsetHeight
✔ Criar elementos com createElement
✔ Inserir elementos com appendChild
✔ Trabalhar com eventos de clique
✔ Separar lógica: gerar posição X e Y
✔ Aplicar left e top dinamicamente
✔ Evitar posições repetidas
  Salvar os dados das notas 
*/

/*para cada nota existente:
   se nova encosta nessa:
       marque como inválida
*/

/*andar pela listaDeNotas
   pegar uma nota antiga
   comparar com a nota nova
   se encostar:
       inválida
*/

/*nota = { x, y, w, h };



/** */

// ==========================
// CONFIGURAÇÕES INICIAIS
// ==========================

// Carrega notas salvas ou cria lista vazia
let listaDeNotas = JSON.parse(localStorage.getItem("notas")) || [];

const botao = document.querySelector(".botao");

// ==========================
// FUNÇÃO PARA SALVAR
// ==========================
function salvarNotas() {
  localStorage.setItem("notas", JSON.stringify(listaDeNotas));
}

// ==========================
// FUNÇÃO DE COLISÃO
// ==========================
function colidiu(a, b) {
  return !(
    a.x + a.w <= b.x ||
    a.x >= b.x + b.w ||
    a.y + a.h <= b.y ||
    a.y >= b.y + b.h
  );
}

// ==========================
// CRIAR NOTA NA TELA
// ==========================
function criarNotaNaTela(nota) {
  const newBox = document.createElement("div");
  const texto = document.createElement("textarea");
  const dataEl = document.createElement("small");
  const botaoDelete = document.createElement("button");

  botaoDelete.innerText = "❌";

  botaoDelete.style.background = "transparent";
  botaoDelete.style.border = "none";
  botaoDelete.style.color = "red";
  botaoDelete.style.cursor = "pointer";
  botaoDelete.style.alignSelf = "flex-end";
  botaoDelete.style.fontSize = "14px";

  botaoDelete.addEventListener("click", () => {
    newBox.remove();

    listaDeNotas = listaDeNotas.filter((n) => n !== nota);

    salvarNotas();
  });

  // --- Estilos da caixa ---
  newBox.style.position = "absolute";
  newBox.style.left = nota.x + "px";
  newBox.style.top = nota.y + "px";
  newBox.style.width = nota.w + "px";
  newBox.style.height = nota.h + "px";
  newBox.style.background = "black";
  newBox.style.borderRadius = "16px";
  newBox.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";
  newBox.style.padding = "6px";
  newBox.style.display = "flex";
  newBox.style.flexDirection = "column";

  // --- Data ---
  dataEl.innerText = nota.data;
  dataEl.style.color = "#aaa";
  dataEl.style.fontSize = "11px";
  dataEl.style.marginBottom = "4px";

  // --- Textarea ---
  texto.value = nota.texto || "";
  texto.style.flex = "1";
  texto.style.background = "transparent";
  texto.style.color = "#fff";
  texto.style.border = "none";
  texto.style.resize = "none";
  texto.style.outline = "none";
  texto.style.fontFamily = "'Poppins', sans-serif";

  // Sempre salva ao digitar
  texto.addEventListener("input", () => {
    nota.texto = texto.value;
    salvarNotas();
  });

  newBox.appendChild(botaoDelete);
  newBox.appendChild(dataEl);
  newBox.appendChild(texto);
  document.body.appendChild(newBox);
}

// ==========================
// AJUSTA TAMANHO DA PÁGINA
// ==========================
function ajustarScroll() {
  document.body.style.minHeight = listaDeNotas.length * 280 + 600 + "px";
}

// ==========================
// GERAR POSIÇÃO SEM COLISÃO
// ==========================

function gerarPosicao(w, h) {
  const margem = 40;
  const width = window.innerWidth;
  const scrollTop = window.scrollY;
  const viewHeight = window.innerHeight;

  const areaX = Math.max(50, width - w - margem * 2);
  const areaY = Math.max(50, viewHeight - h - margem * 2);

  let tentativa = 0;

  // ============================
  // 1) TENTAR NA ÁREA VISÍVEL
  // ============================
  while (tentativa < 400) {
    let x = Math.floor(Math.random() * areaX) + margem;
    let y = Math.floor(Math.random() * areaY) + scrollTop + margem;

    if (posicaoLivre(x, y, w, h, margem)) {
      return { x, y, w, h };
    }

    tentativa++;
  }

  // ============================
  // 2) SEM ESPAÇO -> JOGAR PRA BAIXO
  // ============================
  let maiorY = 0;

  listaDeNotas.forEach((n) => {
    const fim = n.y + n.h;
    if (fim > maiorY) maiorY = fim;
  });

  return {
    x: margem,
    y: maiorY + margem * 2,
    w,
    h,
  };
}

function posicaoLivre(x, y, w, h, margem) {
  const novaExpandida = {
    x: x - margem,
    y: y - margem,
    w: w + margem * 2,
    h: h + margem * 2,
  };

  for (let i = 0; i < listaDeNotas.length; i++) {
    const n = listaDeNotas[i];

    const existenteExpandida = {
      x: n.x - margem,
      y: n.y - margem,
      w: n.w + margem * 2,
      h: n.h + margem * 2,
    };

    if (colidiu(novaExpandida, existenteExpandida)) {
      return false;
    }
  }

  return true;
}

// ==========================
// CLIQUE DO BOTÃO
// ==========================
botao.addEventListener("click", () => {
  const largura = 200;
  const altura = 200;

  ajustarScroll();

  const pos = gerarPosicao(largura, altura);

  const novaNota = {
    x: pos.x,
    y: pos.y,
    w: largura,
    h: altura,
    texto: "",
    data: new Date().toLocaleString("pt-BR"),
  };

  listaDeNotas.push(novaNota);
  salvarNotas();
  criarNotaNaTela(novaNota);
});

// ==========================
// CARREGAR NOTAS AO ABRIR
// ==========================
listaDeNotas.forEach((nota) => criarNotaNaTela(nota));
ajustarScroll();
