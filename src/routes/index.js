const express = require('express');
const appRouter = express.Router();
const path = require('path');

const { apiRouter } = require('./api');

appRouter.use('/', express.static(path.resolve(__dirname, '..', 'views')));
appRouter.use('/api', apiRouter);

module.exports = { appRouter };
