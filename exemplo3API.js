// Falta apontar para o banco de dados
const express = require('express');
const expressMongoDb = require('express-mongo-db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(expressMongoDb('mongodb://localhost/pMagic'));
app.use(bodyParser());
app.use(cors());


// métodos para inserir e visualizar informações no banco de dados
// batman
app.get('/batman', function(req, res) {
    req.db.collection('batman').find().toArray(function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});

app.post('/batman', function(req, res) {
    req.db.collection('batman').insert(req.body, function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }
        res.send('Dados inseridos!');
    });
});

// ==============================FIM DOS MÉTODOS===============================



// métodos para inserir e visualizar informações no banco de dados
// Alfred
app.get('/Alfred', function(req, res) {
    req.db.collection('Alfred').find().toArray(function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }

        res.send(dados);
    });
});

app.post('/Alfred', function(req, res) {
    req.db.collection('Alfred').insert(req.body, function(erro, dados) {
        if (erro) {
            res.status(500).send('Um erro ocorreu!');
            return;
        }
        res.send('Dados inseridos!');
    });
});

// ==============================FIM DOS MÉTODOS===============================

//Porta por onde o servidor vai estar escutando

app.listen(port, function() {
    console.log('Servidor rodando na porta 3080');
});