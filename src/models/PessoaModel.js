const connection = require('../../config/Db');
const sql = require('mysql2/promise');

const getAll = async ()=>{

    const pessoa = await connection.execute('SELECT * FROM pessoas');
    return pessoa;

}

module.exports = {
    getAll
}