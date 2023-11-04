import { conectaAPI } from "./conectaAPI.js";

async function buscarVideo() {
  const busca = await conectaAPI.buscaVideo();
}