const express = require('express');
const db = require('./db/connection');
const router = require('./routes/index');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT =  3000;

app.listen(PORT, () => {

console.log(`A porta ${PORT} está funcionando`);

});


db.authenticate()
.then(() => {

    console.log("O banco de dados está conectado");

})
.catch(err => console.log("Erro ao acessar o banco de dados: " + err));

app.use('/jobs', router);


module.exports = app;