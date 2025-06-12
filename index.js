const express = require('express');
const app = express();
const port = 3002;
require('./src/models')
const userRoutes = require('./src/routers/users');

app.use(express.json());
app.use(userRoutes);

app.listen(port, () => {
    console.log(`servidor rodando na porta http://localhost:${port}`);
})
