const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api hotel")
})

app.get('/hotel', (req, res) => {
    res.send('Esta funcionando, nome da rota:hotel')
})

app.post('/hotel', (req, res) => {
    res.status(201).send('diaria agendada')
})

app.put('/hotel', (req, res) => {
    res.send('diaria paga')
})

app.delete('/hotel', (req, res) => {
    res.send('diaria removida')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})