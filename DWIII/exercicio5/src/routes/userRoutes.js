const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Update User
router.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send('Usuário não encontrado');
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete User
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send('Usuário não encontrado');
    res.send('Usuário deletado com secesso');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
