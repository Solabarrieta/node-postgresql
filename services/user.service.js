const boom = require('@hapi/boom');
// const pool = require('../libs/postgres.pool')

const {models} = require('../libs/sequelize')

class UserService {
  constructor() {

  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  // async find() {
  //   const query = 'SELECT * FROM tasks';
  //   const response = await this.pool.query(query)
  //   return response.rows;
  // }

  async find() {
    const response = await models.User.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const response = await user.update(changes)
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return {id};
  }
}

module.exports = UserService;
