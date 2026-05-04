import http from 'http';

// TAREFA 3: Listener global para rejeições de promessas não capturadas
// Isso evita que o processo do Node morra caso uma Promise falhe fora de um try/catch
process.on('unhandledRejection', (reason, promise) => {
  console.error('[TAREFA 3] Rejeição não tratada detectada:', reason.message);
});

// TAREFA 2: "Middleware" de erro global (Função padronizada de resposta)
const sendErrorResponse = (res, error) => {
  console.error(`[ERRO]: ${error.message}`);
  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'Erro',
    message: 'Ocorreu um erro interno no servidor',
    details: error.message
  }));
};

const server = http.createServer((req, res) => {
  const url = req.url;

  // TAREFA 1: Envolver rotas em blocos try/catch
  try {
    // ROTA 1: Uncaught Exception (Síncrono)
    if (url === '/erro-1') {
      console.log(versaoDoSistema);
      res.end("Versao do sistema acessada com sucesso.");
    }

    // ROTA 2: Promise Rejection (Assíncrono)
    else if (url === '/erro-2') {
      const falhaAssincrona = async() => await Promise.reject(new Error("Erro de Banco de Dados"));
      falhaAssincrona();
      res.end("Isso não será executado.");
    }

    // ROTA 3: Syntax Error (Runtime)
    else if (url === '/erro-3') {
      const dadosInvalidos = '{ "nome": "Desafio" '; // String propositalmente inválida
      const usuario = JSON.parse(dadosInvalidos);
      res.end("Dados processados");
    }

    else {
      res.end("Rotas disponiveis: /erro-1, /erro-2, /erro-3");
    }

  } catch (error) {
    // TAREFA 2: Chamada do tratador global quando qualquer rota falha
    sendErrorResponse(res, error);
  }
});

server.listen(3000, () => console.log("Servidor vulnerável na porta 3000"));
