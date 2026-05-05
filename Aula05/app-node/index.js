// 1. Defina as credenciais e o endpoint
const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;
console.log('apiKey', apiKey)
console.log('apiUrl', apiUrl)
// 2. Configure os parâmetros da requisição
const options = {
    method: 'GET', // ou 'POST', 'PUT', etc.
    headers: {
        // A chave pode ir no Authorization ou em um header customizado
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    }
};

// 3. Função para chamar a API
async function chamarApi() {
    try {
        const response = await fetch(apiUrl, options);

        // Verifica se a resposta foi bem sucedida (status 200-299)
        if (!response.ok && response.status !== 403) {
            throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);
        }

        const dados = await response.json();
        console.log('Dados recebidos:', dados);
    } catch (error) {
        console.error('Falha ao consumir a API:', error);
    }
}

// 4. Executa a função
chamarApi();
