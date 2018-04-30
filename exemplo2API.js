const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Para desligar pressione: ctrl + c');
});


app.get('/', (req, res) => {
    res.send('<h1>API</h1>');
});

app.get('/contato', (req, res) => {
    res.send(`
    <h1>Contato</h1>
    <form actiom="/contato" method="POST">
    <label for="email"> Email: </label>
    <input type="email" name="email" id="email">
    <textarea name="mensagem" id="mensagem"></textarea>
    <input type="submit" value="Enviar">
    </form>
    `)
});

app.post('/contato', (req, res) => {
    res.send('<h1>Precisamos aprender a pegar os valor que usuário digitou!</h1>')
});