const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// DEFINIR O MIDDLEWARE
app.use(cookieParser());

app.get('/', (req, res) => {

    let cookieVal = req.cookies.disciplina;
    let conteudo;
    
    if (cookieVal) {
        conteudo = `O cookie existe no cliente com o valor ${cookieVal} 
                   <br><a href="/apagar-cookie">Apagar o Cookie</a>`;
    } else {
        conteudo = `O cookie não está no cliente!<br>
        <a href="/criar-cookie">Criar o Cookie</a><br>
        <a href="/apagar-cookie">Apagar o Cookie</a><br>`;
    }

    res.send(conteudo);
});

// CRIAR COOKIE
app.get('/criar-cookie', (req, res) => {
    res.cookie('disciplina', 'DesenvolvimentoWeb', {
        maxAge: 1000 * 60, // 1 min
        httpOnly: true // http somente, evita acesso ao cookie pelo JavaScript
    });
    // REDIRECT PARA HOME
    res.redirect('/');
});

// APAGAR COOKIE
app.get('/apagar-cookie', (req, res) => {
    //A APAGAR COOKIE username 
    res.clearCookie('disciplina');
    // REDIRECT PARA HOME
    res.redirect('/');

});

app.listen(3000, () => console.log('A ouvir na porta 3000'));