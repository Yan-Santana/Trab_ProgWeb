const { userCreationSchema, userTokenCreationSchema } = require('./utils/validators/users');
const { validateSchema } = require('./utils/validators');
const { treatError } = require('./utils/errors');

const { userServices } = require('../services/user.services');

class UsersController {
  async signup(req, res) {
    try {
      const data = req.body;
      const validatedData = validateSchema(userCreationSchema, data);

      const createdUser = await userServices.createUser(validatedData);
      return res.status(201).json(createdUser);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }

  async generateToken(req, res) {
    try {
      const data = req.body;
      const validatedData = validateSchema(userTokenCreationSchema, data);

      const token = await userServices.generateToken(validatedData);
      return res.status(200).json(token);
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }

  async returnThatTokenIsValid(req, res) {
    res.status(200).json({ isValid: true });
  }
}

module.exports = {
  usersController: new UsersController(),
};
