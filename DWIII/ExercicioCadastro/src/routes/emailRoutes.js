const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.get('/contar', emailController.contarEmails);

module.exports = router;