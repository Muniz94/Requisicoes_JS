import { conectaAPI } from "./conectaAPI.js";

async function buscarVideo(evento) {
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

  const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]"); 

  botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))
}