const express = require('express');
const db = require('./db/connection');
const Job = require('./models/Job');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const app = express();

// interpretando a requisição do corpo com json

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configutação da engine

app.set('views', path.join(__dirname, 'views')); // caminho que contém as views
app.set('view engine', 'handlebars'); // nome da engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'})); // nome da engine e arquivo padrão

// arquivo estático, que contém a pasta das imagens e o CSS

app.use(express.static(path.join(__dirname, 'public')));

// acionando a porta 3000

const PORT =  3001;

app.listen(PORT, () => {

console.log(`A porta ${PORT} está funcionando`);

});

// conexão do banco e utilizando a promise para verificar se conectou

db.authenticate()
.then(() => {

    console.log("O banco de dados está conectado");

})
.catch(err => console.log("Erro ao acessar o banco de dados: " + err));

// rota da home

app.get('/', (req, res) => {

    let search = req.query.job; // job é o name do input de buscas
    let query = '%'+search+'%';
    
    if(!search){

        Job.findAll({ order: [

            ['createdAt', 'DESC']
    
        ]})
        .then(jobs => {
    
            res.render('index', { jobs });
    
        })
        .catch(err => {
    
            console.log(err);
    
        });

    } else {

        Job.findAll({ 
            
            where: { title: { [Op.like]: query }},
            order: [

                ['createdAt', 'DESC']

             ]})
             .then(jobs => { 
                 
                res.render('index', { jobs, search })
             
            })
            .catch(err => console.log(err));
   
        }

    });

// usando a rota /jobs e usando a rota que vem da variável router

app.use('/jobs', router);

module.exports = app;