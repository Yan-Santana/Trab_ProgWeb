const { BadRequest } = require('../controllers/utils/errors/badRequest');
const { userRepository } = require('../repositories/user.repository');

class UserServices {
  async createUser(data) {
    const userAlreadyExists = await userRepository.findIdByEmail(data.email);

    if (userAlreadyExists) {
      throw new BadRequest('O usuário já existe');
    }

    return await userRepository.create(data);
  }
}

module.exports = {
  userServices: new UserServices(),
};
