const express = require('express');
const app = express();
const PORT = 3000;



// Rota de teste
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

// Rota para adicionar um novo item
app.post('/dados', (req, res) => {
    res.status(201).send('Item adicionado!');
});

// Iniciando o servidorn
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
