const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analisar JSON (opcional, pode ser removido se não precisar)
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Rota para adicionar um novo item
app.post('/dados', (req, res) => {
    res.status(201).send('Item adicionado!');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
