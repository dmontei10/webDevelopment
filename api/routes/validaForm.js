const bodyParser = require("body-parser");
const express = require("express");
const { body, validationResult, check } = require("express-validator");
const app = express();

app.use('/validaForm',function (req, res, next) {  // atenção para a função do next!!!
    console.log('Tempo:', Date.now());
    next();
  });
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post(  "/validaForm",
  [
    check('nome', 'Este nome não é válido').isAlpha(),
    check('nome', 'Este nome não é válido').isAlpha(),
    check('email','Este email não é válido ').isEmail().normalizeEmail,
    check('username','Nome deve ser alfabético sem espaços!').isAlphanumeric(),
    check('password','Senha deve ter 4 carateres pelo menos!').isLength({ min: 4 }),
   
  
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = new User(req.body.nome, req.body.pass);
    // Com get obteria o nome assim: const nome = req.param('nome');
    console.log('Os campos não são válidos!')
    res.json(user);
  }
);
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
}