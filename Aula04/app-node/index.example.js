import http from 'http';

const server = http.createServer((req, res) => {
  const url = req.url;

  // ROTA 1: Uncaught Exception (Síncrono)
  if (url === '/erro-1') {
    // BUG 1: Referenciar algo que não existe (mata o processo se não tratado)
    console.log(versaoDoSistema);
  }

  // ROTA 2: Promise Rejection (Assíncrono)
  else if (url === '/erro-2') {
    // BUG 2: Promessa rejeitada sem .catch()
    const falhaAssincrona = () => Promise.reject(new Error("Erro de Banco de Dados"));
    falhaAssincrona();
    res.end("O servidor pode cair em breve por causa da rejeição não tratada.");
  }

  // ROTA 3: Syntax Error (Runtime)
  else if (url === '/erro-3') {
    // BUG 3: Tentar processar um dado mal formatado
    // JSON.parse com string inválida gera um SyntaxError
    const dadosInvalidos = '{ "nome": "Desafio" '; // Falta fechar a chave
    const usuario = JSON.parse(dadosInvalidos);
    res.end("Dados processados");
  }

  else {
    res.end("Rotas: /erro-1, /erro-2, /erro-3");
  }
});

server.listen(3000, () => console.log("Servidor vulnerável na porta 3000"));
