import { conectaAPI } from "./conectaAPI.js";

async function buscarVideo() {
  const dadosDePesquisa = document.querySelector("[data-pesquisa]");
  const busca = await conectaAPI.buscaVideo(dadosDePesquisa);
}