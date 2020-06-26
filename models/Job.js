const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', { //const Job = db.define('job, {}) o job é o nome da tabela

    title: {

        type: Sequelize.STRING,
    },

    description: {
          
        type:Sequelize.STRING,

    },

    salary: {

        type:Sequelize.STRING,
    },

    new_job: {

        type:Sequelize.INTEGER,
    },

    company: {

        type:Sequelize.STRING,
    },

    email: {
        
        type:Sequelize.STRING,

    }

});

module.exports = Job;