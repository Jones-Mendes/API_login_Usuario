const sequelize = require("../config/database");
const User = require('./User');

sequelize.sync({alter: true})
.then(() => {
    console.log("Tabelas sincronizadas com sucesso!");
})
.catch((error) => {
    console.error("Erro ao sincronizar tabelas:", error);
});

module.exports = {
    User
};