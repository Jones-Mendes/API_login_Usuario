const express = require('express');
const app = express();
const port = 3002;
require('./src/models')
const userRoutes = require('./src/routers/users');
const professionalsRoutes = require('./src/routers/professionals');
const cors = require('cors');

app.use(cors())
app.use(express.json());
app.use(userRoutes);
app.use(professionalsRoutes);



app.listen(port, () => {
    console.log(`servidor rodando na porta http://localhost:${port}`);
})
