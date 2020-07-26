const Sequelize  = require('sequelize'); // ORM sequelize

const sequelize = new Sequelize({ //instanciando um objeto

    dialect: 'sqlite', //dialect é o banco utilizado
    storage: './db/app.db' // app.db é onde será armazenado o banco

});

module.exports = sequelize;