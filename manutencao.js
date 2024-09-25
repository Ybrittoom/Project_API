const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api manutençao de equipamentos")
})

app.get('/manuEquip', (req, res) => {
    res.send('Esta funcionando, nome da rota:manutençao de equipamentos')
})

app.post('/manuEquip', (req, res) => {
    res.status(201).send('manutençao agendada')
})

app.put('/manuEquip', (req, res) => {
    res.send('manutençao feita')
})

app.delete('/manuEquip', (req, res) => {
    res.send('manutençao cancelada')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})