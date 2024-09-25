const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.send("Bem-vindo a api Biblioteca")
})

app.get('/biblioteca', (req, res) => {
    res.send('Esta funcionando, nome da rota:Biblioteca')
})

app.post('/biblioteca', (req, res) => {
    res.status(201).send('Livro adicionado')
})

app.put('/biblioteca', (req, res) => {
    res.send('livro devolvido!!!')
})

app.delete('/biblioteca', (req, res) => {
    res.send('livro removido')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})