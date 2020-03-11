const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('*', (req, res) => {
    console.log('> GET REQUEST');
    console.log(req);
    res.sendStatus(200);
});

server.post('*', (req, res) => {
    console.log('> POST REQUEST');
    console.log(req);
    res.sendStatus(200);
});

server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
});

module.exports = server;

