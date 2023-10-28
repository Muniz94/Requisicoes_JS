async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos"); // se não especificar nenhum outro parâmetro além 
  // da URL o método(requisição) utilizada é GET
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos
}