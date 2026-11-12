// O atributo "defer" no HTML garante que o DOM seja carregado
// antes da execução deste arquivo.

const btnPrincipal = document.getElementById("btn-principal");
const btnSecundario = document.getElementById("btn-secundario");
const paragrafoExercicio = document.getElementById("paragrafo-exercicio");
const textoDestaque = document.querySelector(".destaque");
const listaTecnologias = document.getElementById("lista-tecnologias");
const formulario = document.getElementById("form-contato");
const mensagemFormulario = document.getElementById("mensagem-formulario");

// Exemplos de seletores e consulta ao DOM.
const caixas = document.getElementsByClassName("caixa");
console.log("Total de caixas encontradas:", caixas.length);

const todosParagrafos = document.getElementsByTagName("p");
console.log("Total de parágrafos na página:", todosParagrafos.length);

const itensMenu = document.querySelectorAll("nav ul li a");
itensMenu.forEach((item) => {
  console.log("Item de menu:", item.textContent);
});

// Altera o conteúdo do parágrafo usando innerHTML.
paragrafoExercicio.innerHTML =
  "Este parágrafo foi alterado dinamicamente via <strong>innerHTML</strong>!";

// Alterna a classe CSS "ativo" no texto de destaque.
btnPrincipal.addEventListener("click", () => {
  textoDestaque.classList.toggle("ativo");
});

// Cria e adiciona um novo item à lista.
btnSecundario.addEventListener("click", () => {
  const novoItem = document.createElement("li");
  novoItem.textContent = "Python (adicionado via createElement + appendChild)";
  listaTecnologias.appendChild(novoItem);
  btnSecundario.disabled = true;
  btnSecundario.textContent = "Python adicionado";
});

// Trata o envio do formulário sem recarregar a página.
// Os campos obrigatórios e o formato do e-mail são validados pelo navegador.
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const curso = document.getElementById("curso").value;

  mensagemFormulario.textContent =
    `Formulário enviado com sucesso, ${nome}! Curso selecionado: ${curso}.`;

  formulario.reset();
});


// Seleciona uma caixa ao clicar. O clique novamente não a desmarca.
const caixasSelecionaveis = document.querySelectorAll(".caixa");

caixasSelecionaveis.forEach((caixa) => {
  caixa.addEventListener("click", () => {
    // A seleção individual fica azul e não pode ser desmarcada pelo clique.
    caixa.classList.remove("caixa-todas-selecionadas");
    caixa.classList.add("caixa-selecionada");
  });
});

// Seleciona todas as caixas em verde.
const btnSelecionarTodas = document.getElementById("btn-selecionar-todas");
const btnLimparSelecao = document.getElementById("btn-limpar-selecao");

btnSelecionarTodas.addEventListener("click", () => {
  caixasSelecionaveis.forEach((caixa) => {
    caixa.classList.remove("caixa-selecionada");
    caixa.classList.add("caixa-todas-selecionadas");
  });
});

// Remove a seleção de todas as caixas.
btnLimparSelecao.addEventListener("click", () => {
  caixasSelecionaveis.forEach((caixa) => {
    caixa.classList.remove("caixa-selecionada", "caixa-todas-selecionadas");
  });
});
