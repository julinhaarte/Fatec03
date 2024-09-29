const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.post('/criar', cadastroController.criarCadastro);
router.get('/listar', cadastroController.listarCadastros);
router.delete('/excluir/:id', cadastroController.excluirCadastro);

module.exports = router;