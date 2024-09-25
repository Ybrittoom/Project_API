const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api usuario")
})

app.get('/usuario', (req, res) => {
    res.send('Esta funcionando, nome da rota:usuario')
})

app.post('/usuario', (req, res) => {
    res.status(201).send('envio do cadastro do usuario feita')
})

app.put('/usuario', (req, res) => {
    res.send('usuario aceito')
})

app.delete('/usuario', (req, res) => {
    res.send('usuario recusado')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})