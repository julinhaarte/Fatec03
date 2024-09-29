const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/listar', adminController.listarCadastros);
router.delete('/excluir/:id', adminController.excluirCadastro);

module.exports = router;