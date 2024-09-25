const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api viagens")
})

app.get('/viagem', (req, res) => {
    res.send('Esta funcionando, nome da rota:viagens')
})

app.post('/viagem', (req, res) => {
    res.status(201).send('viagens confirmada')
})

app.put('/viagem', (req, res) => {
    res.send('viagem feita')
})

app.delete('/viagem', (req, res) => {
    res.send('viagem cancelada')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})