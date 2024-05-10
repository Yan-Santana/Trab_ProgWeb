const express = require('express');
const userRouter = express.Router();

const { usersController } = require('../controllers/users.controller');

userRouter.post('/signup', usersController.signup);
userRouter.post('/generateToken', usersController.generateToken);

module.exports = { userRouter };
