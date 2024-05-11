const express = require('express');
const productsRouter = express.Router();

const { productsController } = require('../controllers/products.controller');
const { fileUploader } = require('./utils/fileUploader');

productsRouter.post('/', fileUploader.single('photo'), productsController.create);

module.exports = { productsRouter };
