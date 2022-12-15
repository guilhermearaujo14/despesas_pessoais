const server = require('../src/server');
const express = require('express');
const pessoaController = require('../src/controllers/PessoaController');

const router = express.Router();
router.use(express.json());


//ROTAS DE PESSOA
router.get('/pessoas', pessoaController.getAll);
router.get('/pessoas/:CPF', pessoaController.getPessoaByCPF);
router.post('/pessoas', pessoaController.pessoaCreate);


//ROTAS DE DESPESAS





module.exports = router;