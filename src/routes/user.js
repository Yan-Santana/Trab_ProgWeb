const express = require('express');
const userRouter = express.Router();

const { usersController } = require('../controllers/users.controller');
const { authorize } = require('../controllers/middlewares/authentication');

userRouter.post('/signup', usersController.signup);
userRouter.post('/login', usersController.generateToken);

userRouter.get('/token-is-valid', authorize, usersController.returnThatTokenIsValid);

module.exports = { userRouter };
