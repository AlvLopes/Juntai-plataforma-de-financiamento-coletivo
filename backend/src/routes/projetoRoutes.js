const express = require('express');
const router = express.Router();
const { listarProjetos, cadastrarProjeto } = require('../controllers/projetoController');

console.log('cadastrarProjeto:', cadastrarProjeto);

router.get('/', listarProjetos);
router.post('/', cadastrarProjeto);

module.exports = router;
