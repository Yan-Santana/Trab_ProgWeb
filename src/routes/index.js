const express = require('express');
const appRouter = express.Router();

const path = require('path');

appRouter.use('/pages', express.static(path.resolve(__dirname, '..', 'views')));
appRouter.use('/api', express.json());

module.exports = { appRouter };
