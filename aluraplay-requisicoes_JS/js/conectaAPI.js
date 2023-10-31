async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos"); // se não especificar nenhum outro parâmetro além 
  // da URL o método(requisição) utilizada é GET
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST", 
    headers: {
      "Content-type": "application/json" // especificar que tipo de arquivo está sendo enviado (ou recebido)
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

}

export const conectaAPI = {
    listaVideos
}