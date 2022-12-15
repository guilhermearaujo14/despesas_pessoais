const express = require('express');
const router = require('./routes/rotas');


const app = express();
app.use(router);
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})

module.exports = app;

