const express = require('express');
const bodyParser = require('body-parser');
const alunosController = require('./controllers/alunosController');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/alunos', alunosController.alunosPage);
app.get('/alunos/getAll', alunosController.getAllAlunos);
app.get('/alunos/add', alunosController.addAlunoPage);
app.post('/alunos/save', alunosController.saveAluno);

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
});