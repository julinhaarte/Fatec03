const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Update Project
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).send('Projeto não encontrado');
    res.send(project);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete Project
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).send('Projeto não encontrado');
    res.send('Projeto deletado com sucesso');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;