const express = require('express');
const router = express.Router();
const Job = require('../models/Job');


// Rota de inserção de vagas 

router.post('/adicionando', (req, res) => {

let {title, description, salary, new_job, company, email} = req.body;  // desconstruindo a requisição body

Job.create({ // inserindo na tabela

    // recebendo os dados das variaveis deesconstruidas
    
    title,
    description,
    salary,
    new_job,
    company,
    email

})
.then(() => res.redirect('/')) //res.redirect para redirecionar para a home
.catch(err => console.log("Erro ao salvar no banco de dados: " + err));


});

module.exports = router;