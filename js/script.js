//Ativar link
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//Ativar Items do Orçamento;

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro){
const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true
  }
}

parametros.forEach(ativarProduto)

// Ativar Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button')


function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
  console.log(resposta)

}

function eventoPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventoPerguntas);