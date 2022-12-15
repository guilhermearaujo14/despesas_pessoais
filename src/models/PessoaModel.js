const connection = require('../../config/Db');
const sql = require('mysql2/promise');

const funcDatahora = require('../funcoesDiversas/getDataHora');


const getAll = async ()=>{
    const pessoa = await connection.execute('SELECT * FROM pessoas');
    return pessoa;
}

const getPessoaByCPF = async (CPF)=>{
    const pessoa = await connection.execute('SELECT * FROM pessoas WHERE CPF = ?', [CPF])
    return pessoa;
}

const pessoaCreate = async (pessoa)=>{
    const { nome, CPF, email, Senha, DataNascimento } = pessoa;
    const dataCadastro = getDataHora();
    const [sql] = await connection.execute('INSERT INTO pessoas(nome, CPF, email, Senha, DataNascimento, DataCadastro) VALUES (?,?,?,?,?,?)', [nome, CPF, email, Senha, DataNascimento, dataCadastro]);
    return sql;
}


const  getDataHora = ()=>{
    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();

    const dataHora = `${ano}-${mes}-${dia} ${hora}:${minutos}:${segundos}`;
    return dataHora;
}


module.exports = {
    getAll,
    getPessoaByCPF,
    pessoaCreate,
}