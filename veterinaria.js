const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api veterinaria")
})

app.get('/veterinaria', (req, res) => {
    res.send('Esta funcionando, nome da rota:veterinaria')
})

app.post('/veterinaria', (req, res) => {
    res.status(201).send('consulta para o pet enviada')
})

app.put('/veterinaria', (req, res) => {
    res.send('consulta confirmada')
})

app.delete('/veterinaria', (req, res) => {
    res.send('consulta cancelada')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})