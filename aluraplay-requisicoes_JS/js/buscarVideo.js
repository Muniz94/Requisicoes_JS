import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  evento.preventDefault();

  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaAPI.buscaVideo(dadosDePesquisa);

  const lista = document.querySelector("[data-lista]");
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]"); 

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))