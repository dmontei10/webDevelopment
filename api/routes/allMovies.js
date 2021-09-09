const tables = require("../sequelize");
const Movies = tables[1];

module.exports = (app) => {
  app.get("/allMovies", (req, res, next) => {
        Movies.findAll()
        .then((movies) => {
            res.status(200).send(JSON.stringify(movies,null, 2));
        });
      });
};