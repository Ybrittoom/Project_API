const express = require('express')
const app = express()
const porta = 3000

app.get('/', (req, res) => {
    res.send('Bem-vindo a api de carros de aluguel de carros ')
})

//rota do arquivo aluguel
app.get('/AluguelCarros', (req, res) => {
    res.send('Esta funcionando, nome da rota:AluguelCarros')
})

app.post('/AluguelCarros', (req, res) => {
    res.status(201).send('Carro alugado!!!')
})

app.put('/AluguelCarros', (req, res) => {
    res.send('Carro devolvido!!!')
})

app.delete('/AluguelCarros', (req, res) => {
    res.send('Carro removido da locadora!!!')
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})