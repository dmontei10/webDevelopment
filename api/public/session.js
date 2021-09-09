const express = require('express');
const cookieSession = require('cookie-session');
const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge:  60 * 1000      // 60*60 segundos
}));

app.get('/', (req, res) => {

    session = req.session.name;
    let conteudo;

    if(session){
        conteudo = `Existe a sessão ${session} no cliente.`;
        res.send(conteudo);
    }
    else{
        req.session.name = 'DesenvolvimentoWeb';
        res.send(req.session.name);
    }
});

app.listen(3000, () => console.log('Servidor a ouvir na porta 3000'));