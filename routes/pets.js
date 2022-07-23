const express = require('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

// C - Criação de novos produtos
router.get('/cadastrar', ProdutosController.editar);
router.post('/cadastrar', ProdutosController.criar);

// R - Leitura de serviços
router.get('/', ProdutosController.index);
router.get('/admin', ProdutosController.admin);

// U - Atualização de produtos
router.get('/editar/:id', ProdutosController.editar);
router.put('/editar/:id', ProdutosController.atualizar);

module.exports = router;