const express = require('express');
const db = require('./db/connection');
const router = require('./routes/index');
const app = express();

// interpretando a requisição do corpo com json

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// acionando a porta 3000

const PORT =  3000;

app.listen(PORT, () => {

console.log(`A porta ${PORT} está funcionando`);

});

// conexão do banco e utilizando a promise para verificar se conectou

db.authenticate()
.then(() => {

    console.log("O banco de dados está conectado");

})
.catch(err => console.log("Erro ao acessar o banco de dados: " + err));

// usando a rota /jobs e usando a rota que vem da variável router

app.use('/jobs', router);


module.exports = app;