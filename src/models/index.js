const sequelize = require("../config/database");
const User = require('./users');
const Professionals = require('./professionals')

sequelize.sync({alter: true})
.then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
})
.catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
});

module.exports = {
    User, Professionals
};