const express = require('express');
const cors = require('cors');

const projetoRoutes = require('./routes/projetoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/projetos', projetoRoutes);

module.exports = app;
