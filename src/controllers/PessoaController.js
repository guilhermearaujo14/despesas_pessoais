const PessoaModel = require('../models/PessoaModel');

const getAll = async (req, res)=>{
    const [pessoas] = await PessoaModel.getAll();
    return res.status(200).json(pessoas)
}

const getPessoaByCPF = async (req, res)=>{
    const { CPF }= req.params;
    const [pessoa] = await PessoaModel.getPessoaByCPF(CPF);
    return res.status(200).json(pessoa)
}

const pessoaCreate = async (req, res) =>{
    const pessoa = await PessoaModel.pessoaCreate(req.body)
    return res.status(201).json({message: 'Pessoa criada com sucesso!'})
}

module.exports = {
    getAll,
    getPessoaByCPF,
    pessoaCreate
}
