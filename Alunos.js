const express = require('express')
const app = express()
const porta = 3000

//exemplo de aluno
const alunoNovo = 'Ygor'

app.get('/', (req, res) => {
    res.send('Bem-vindo a api de alunos')
})

app.get('/alunos', (req, res) => {
    res.send("Alunos novas")
})

app.post('/alunos', (req, res) => {
    res.status(201).send(`Aluno novo ${alunoNovo}`)
})

app.put('/alunos', (req, res) => {
    res.send(`Aluno ${alunoNovo} faltou`)
})

app.delete('/aluno', (req, res) => {
    res.send(`Aluno ${alunoNovo} foi expulso`)
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost;${porta}`)
})