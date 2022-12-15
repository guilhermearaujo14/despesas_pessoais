const PessoaModel = require('../models/PessoaModel');

const getAll = async (req, res)=>{
    const [pessoas] = await PessoaModel.getAll();
    return res.status(200).json(pessoas)
}

module.exports = {
    getAll,
}
