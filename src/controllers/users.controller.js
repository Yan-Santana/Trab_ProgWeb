const { userCreationSchema } = require('./utils/validators/users');
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
}

module.exports = {
  usersController: new UsersController(),
};
