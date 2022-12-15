const server = require('../src/server');
const express = require('express');
const pessoaController = require('../src/controllers/PessoaController');

const router = express.Router();

router.get('/pessoas', pessoaController.getAll);
module.exports = router;