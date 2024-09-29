const cadastros = require('./cadastroController').cadastros;

// listar todos os cadastros
exports.listarCadastros = (req, res) => {
  res.render('admin', { cadastros });
};

// excluir um cadastro
exports.excluirCadastro = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = cadastros.findIndex(c => c.id === id);
  if (index !== -1) {
    cadastros.splice(index, 1);
  }
  res.redirect('/admin/listar');
};