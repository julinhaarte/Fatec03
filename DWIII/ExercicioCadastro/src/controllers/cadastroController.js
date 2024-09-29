const cadastros = [];

// criar cadstro
exports.criarCadastro = (req, res) => {
  const { nome, email } = req.body;
  cadastros.push({ id: cadastros.length + 1, nome, email });
  res.redirect('/admin/listar');
};

// listar cadastro
exports.listarCadastros = (req, res) => {
  res.render('listarCadastros', { cadastros });
};

// apagar cadastro
exports.excluirCadastro = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = cadastros.findIndex(c => c.id === id);
  if (index !== -1) {
    cadastros.splice(index, 1);
  }
  res.redirect('/admin/listar');
};