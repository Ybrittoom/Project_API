const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api ocorrencia")
})

app.get('/ocorrencia', (req, res) => {
    res.send('Esta funcionando, nome da rota:ocorrencia')
})

app.post('/ocorrencia', (req, res) => {
    res.status(201).send('ocorrencia feita')
})

app.put('/ocorrencia', (req, res) => {
    res.send('ocorrencia confirmada')
})

app.delete('/ocorrencia', (req, res) => {
    res.send('ocorrencia cancelada')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})