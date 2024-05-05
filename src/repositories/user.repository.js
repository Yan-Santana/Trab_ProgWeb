const { User } = require('../models/user');

const bcrypt = require('bcrypt');

class UserRepository {
  async findIdByEmail(email) {
    const user = await User.findOne({ where: { email }, attributes: ['id'] });
    return user?.toJSON().id || null;
  }

  async create(data) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await User.create({
      ...data,
      role: 'customer',
      password: hashedPassword,
    });

    return {
      ...user.toJSON(),
      password: undefined,
    };
  }
}

module.exports = {
  userRepository: new UserRepository(),
};
