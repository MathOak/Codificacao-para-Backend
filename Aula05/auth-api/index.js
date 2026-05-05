const express = require('express');
const crypto = require('crypto');
const app = express();
const PORT = 3000;

// Armazenamento em memória (揮發性 - desaparece se o servidor reiniciar)
const validTokens = new Set();

// Rota 1: Gerar Token
app.get('/token', (req, res) => {
    const timestamp = Date.now().toString();
    const randomValue = crypto.randomBytes(4).toString('hex');

    // Cria um hash simples para servir de API_KEY
    const apiKey = crypto.createHash('sha256')
        .update(timestamp + randomValue)
        .digest('hex');

    validTokens.add(apiKey);

    res.json({
        message: "Token gerado com sucesso!",
        api_key: apiKey,
        instrucao: "Use este token no 'Authorization': `Bearer ${apiKey}`"
    });
});

// Rota 2: Dashboard (Protegida)
app.get('/dashboard', (req, res) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) return requestFail(res);
    const token = authHeader.split(' ')[1];
    if (!validTokens.has(token)) return requestFail(res, token);

    return requestSuccess(res, token);
});

function requestSuccess(res, userToken) {
    res.status(200).
        json({
            message: "Acesso Concedido!",
            token: userToken,
        });
}
function requestFail(res, userToken) {
    res.status(403).json({
        message: "Acesso Negado!",
        token: userToken,
    });
}

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Gere um token em: http://localhost:${PORT}/token`);
});