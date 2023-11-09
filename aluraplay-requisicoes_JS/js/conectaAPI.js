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

  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo")
  }

  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
  const conexao = await fetch (`http://localhost:3000/videos?q=${termoDeBusca}`);
  const conexaoConvertida = conexao.json();
  
  return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos,
    criaVideo,
    buscaVideo
}