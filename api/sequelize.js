const Sequelize = require('sequelize');
const UserModel = require('./models/users');

const sequelize = new Sequelize('users', 'DevWeb', 'DevProgWeb&01', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Criou a BD users e a tabela user');
});

module.exports = User;