const express = require('express');
const appRouter = express.Router();
const path = require('path');

const { userRouter } = require('./user');

appRouter.use('/pages', express.static(path.resolve(__dirname, '..', 'views')));
appRouter.use('/api', express.json());

appRouter.use('/api/users', userRouter);

module.exports = { appRouter };
