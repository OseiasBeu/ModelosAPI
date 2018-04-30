const express = require('express');
const app = express();
const port = 3000;
const allEvents = [{
        name: 'Batman',
        nascimento: 'Gotham Cuty',
        idade: '31 anos',
        // data: ['24/04/2017', '25/04/2017', '26/04/2017'],
        // link: 'http://qconsp.com'
    },
    {
        name: 'Alfred',
        nascimento: 'Desconhecido',
        idade: 'Desconhecido',
        // data: ['01/07/2017'],
        // link: 'http://www.frontinsampa.com.br'
    },
    {
        name: 'Joker',
        nascimento: 'desconhecido'
        data: ['16/07/2017'],
        link: 'https://www.eventick.com.br/frontinvale2017'
    }
]


app.get('/allevents', (req, res) => res.json(allEvents));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Para desligar pressione: ctrl + c');
});