import http, { STATUS_CODES } from 'http'

const server = http.createServer(app)
const PORT = process.env.PORT;

function app(req, res) {

  const { method, url } = req;
  console.log(`Método: ${method} | URL: ${req.url}`);

  if (url === '/status') {
    // Requisito 1: Rota /status com JSON e Status 200
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const responseData = { "servidor": "online" };
    res.end(JSON.stringify(responseData));
  } else {
    // Requisito 2: Qualquer outra rota retorna 404
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("Página não encontrada");
  }
}

server.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`)
  console.log(`http://localhost:${PORT}`)
});