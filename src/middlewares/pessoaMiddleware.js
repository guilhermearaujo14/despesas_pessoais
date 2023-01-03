const validaPessoa = (req, res, next) =>{
    const { body } = req;

    if(body.nome == undefined || body.nome == ''){
        return res.status(400).json({message: 'Nome não informado, verifique!'})
    }
    if(body.CPF == undefined || body.CPF == ''){
        return res.status(400).json({message: 'CPF não informado, verifique!'})
    }
    if(body.email == undefined || body.email == ''){
        return res.status(400).json({message: 'Email não informado, verifique!'})
    }
    if(body.Senha == undefined || body.Senha == ''){
        return res.status(400).json({message: 'Senha não informada, verifique!'})
    }

    next();
}

module.exports = {
    validaPessoa,
}

//nome, CPF, email, Senha, DataNascimento, DataCadastro