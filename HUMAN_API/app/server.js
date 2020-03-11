const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/connect.html");
});

server.get('/getToken', (req, res) => {

    // This example contains a client secret in the server context. 
    // DO NOT use your client secret in the browser!

    // This example uses an open source request library to create requests
    // You can replace it with your favorite request library
    const request = require("request")

    // Human API's session authentication endpoint
    const authUrl = "https://auth.humanapi.co/v1/connect/token"

    // Payload you send to Human API's session authentication endpoint
    const requestBody = {
        client_id: "5c7e67aa445c92f8a7c2f4ae4a0c3dc320035a2b",
        client_user_id: "Human_739990755",
        client_user_email: "anthony@rootstrap.com",
        client_secret: "90c702a67ff0a16b3b3b347b166ac7e6af3dac85",
        type: "session"
    };

    // Issue a POST call to Human API's authentication service
    request({
        url: authUrl,
        method: "POST",
        json: true,
        body: requestBody
    }, (error, res, body) => {
        if (error) {
            throw error;
        }
        if (res.statusCode >= 400) {
            console.error("Server returned error status");
        }

        console.log(res.body);
        return;
    });
    res.sendStatus(200);
});

server.get('*', (req, res) => {
    console.log('> Path not found');
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

