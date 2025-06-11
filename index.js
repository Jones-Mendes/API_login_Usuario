const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
    });

app.listen(port, () => {
    console.log(`servidor rodando na porta http://localhost:${port}`);
})
