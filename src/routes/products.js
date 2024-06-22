const express = require('express');
const productsRouter = express.Router();

const { productsController } = require('../controllers/products.controller');
const { authorize } = require('../controllers/middlewares/authentication');

const { fileUploader } = require('./utils/fileUploader');

productsRouter.use(authorize);

productsRouter.post('/', fileUploader.single('photo'), productsController.create);
productsRouter.get('/:id', productsController.getDetails);
productsRouter.get('/', productsController.listAll);

module.exports = { productsRouter };
