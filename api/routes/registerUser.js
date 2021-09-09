const User = require("../sequelize");
const passport = require("passport");
const validar = require('./validaForm');
module.exports = (app) => {
  app.post("/registerUser", (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info != undefined) {
        console.log(info.message);
        res.status(200).send({message: `${info.message}`}); // envia ao cliente a indicação da falha de registo
      } else {
        req.logIn(user, (err) => {
          // este método é necessário para as callback funcionarem
          const data = {
            nome: req.body.nome,
            apelido: req.body.apelido,
            email: req.body.email,
            username: user.username,
          };
          User.findOne({
            where: {
              username: data.username,
            },
          }).then((user) => {
            user
              .update({
                nome: data.nome,
                apelido: data.apelido,
                email: data.email,
              })
              .then(() => {
                console.log("Utilizador criado na BD!");
                res.status(200).send({ message: "Utilizador adicionado!" });
              });
          });
        });
      }
    })(req, res, next);
  });
};
