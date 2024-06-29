const express = require('express');
const apiRouter = express.Router();

const { userRouter } = require('./user');
const { productsRouter } = require('./products');
const { cartsRouter } = require('./cart');

apiRouter.use('/', express.json());
apiRouter.use('/users', userRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/carts', cartsRouter);

module.exports = { apiRouter };
