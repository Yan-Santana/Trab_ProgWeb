const { BadRequest } = require('../controllers/utils/errors/badRequest');
const { userRepository } = require('../repositories/user.repository');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserServices {
  async createUser(data) {
    const userAlreadyExists = await userRepository.findIdByEmail(data.email);

    if (userAlreadyExists) {
      throw new BadRequest('O usuário já existe');
    }

    return await userRepository.create(data);
  }

  /**
   * @param {{
   *  email: string,
   *  password: string
   * }} data
   */
  async generateToken(data) {
    const user = await userRepository.findWithPasswordByEmail(data.email, data.password);
    if (!user) throw new BadRequest('E-mail não cadastrado');

    const isTheSamePassword = bcrypt.compareSync(data.password, user.password);
    if (!isTheSamePassword) throw new BadRequest('Senha inválida');

    const token = jwt.sign({ id: user.id }, process.env.APP_SECRET_KEY, { expiresIn: '24h' });
    return { token };
  }
}

module.exports = {
  userServices: new UserServices(),
};
