const { userCreationSchema } = require('./utils/validators/users');
const { validateSchema } = require('./utils/validators');
const { treatError } = require('./utils/errors');

class UsersController {
  async signup(req, res) {
    try {
      const data = req.body;
      const validatedData = validateSchema(userCreationSchema, data);

      return res.status(201).json({ data: validatedData });
    } catch (error) {
      const treatedError = treatError(error);
      res.status(treatedError.code).json(treatedError);
    }
  }
}

module.exports = {
  usersController: new UsersController(),
};
