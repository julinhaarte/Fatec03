const alunos = require('../models/alunosModel');

exports.alunosPage = (req, res) => {
    res.send('Alunos Works!');
};

exports.getAllAlunos = (req, res) => {
    res.render('alunos', { alunos });
};

exports.addAlunoPage = (req, res) => {
    res.render('addAluno');
};

exports.saveAluno = (req, res) => {
    const { nome, idade } = req.body;
    alunos.push({ nome, idade: parseInt(idade) });
    res.redirect('/alunos/getAll');
};