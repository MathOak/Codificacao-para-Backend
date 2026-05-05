// 1. Defina as credenciais e o endpoint
const apiKey = 'SUA_API_KEY_AQUI'; 
const apiUrl = 'https://exemplo.com';

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
        if (!response.ok) {
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
