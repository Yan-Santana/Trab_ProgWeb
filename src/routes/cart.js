const express = require('express');
const cartsRouter = express.Router();

const { cartsController } = require('../controllers/carts.controller');
const { authorize } = require('../controllers/middlewares/authentication');

cartsRouter.use(authorize);

cartsRouter.post('/add-product', cartsController.addProduct);
cartsRouter.post('/buy', cartsController.buy);
cartsRouter.get('/', cartsController.listCartItems);

module.exports = { cartsRouter };
