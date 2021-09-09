module.exports = (sequelize, type) =>
  sequelize.define('usermovies', {
    userid: {
      type: type.INTEGER,
      primaryKey: true,
    },
    movieid: {
        type: type.INTEGER,
        primaryKey: true,
      },
     });