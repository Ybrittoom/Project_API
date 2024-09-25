const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api exames")
})

app.get('/exame', (req, res) => {
    res.send('Esta funcionando, nome da rota:exames')
})

app.post('/exame', (req, res) => {
    res.status(201).send('exame marcado')
})

app.put('/exame', (req, res) => {
    res.send('exame de radiografia! marcado!!')
})

app.delete('/exame', (req, res) => {
    res.send('exame desmarcado')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})