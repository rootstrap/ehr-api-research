const express = require("express");
const bodyParser = require("body-parser");
const server = express();
let rp = require("request-promise");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/connect.html");
});

server.get("/getToken", (req, res) => {
  // This example contains a client secret in the server context.
  // DO NOT use your client secret in the browser!

  // This example uses an open source request library to create requests
  // You can replace it with your favorite request library
  const request = require("request");

  // Human API's session authentication endpoint
  const authUrl = "https://auth.humanapi.co/v1/connect/token";

  // Payload you send to Human API's session authentication endpoint
  const requestBody = {
    client_id: "5c7e67aa445c92f8a7c2f4ae4a0c3dc320035a2b",
    client_user_id: "Human_739990755",
    client_user_email: "anthony@rootstrap.com",
    client_secret: "90c702a67ff0a16b3b3b347b166ac7e6af3dac85",
    type: "session"
  };

  // Issue a POST call to Human API's authentication service
  request(
    {
      url: authUrl,
      method: "POST",
      json: true,
      body: requestBody
    },
    (error, res, body) => {
      if (error) {
        throw error;
      }
      if (res.statusCode >= 400) {
        console.error("Server returned error status");
      }

      console.log(res.body);
      return;
    }
  );
  res.sendStatus(200);
});

server.post("*", (req, res) => {
  console.log("> POST REQUEST");
  console.log(req);
  res.sendStatus(200);
});

server.get("/limitTest/:total?", (req, res) => {
  let requestCollection = [];
  let responsesCollection = [];
  let STATUS = 0;
  let TOKEN = "";
  let start = new Date();
  const TOTAL = !req.params.total ? 10 : req.params.total;

  generateAccessToken()
    .then(auth => {
      console.log(`------------------------------`);
      console.log(`Generating access token`);
      console.log(`------------------------------`);
      TOKEN = auth.access_token;

      console.log(`------------------------------`);
      console.log(`Sending ${TOTAL} API requests to HumanAPI`);
      console.log(`------------------------------`);

      for (var i = 0; i < TOTAL; i++) {
        requestCollection.push(requestAPI(TOKEN));
      }

      Promise.all(requestCollection)
        .then(response => {
          for (var i = 0; i < TOTAL; i++) {
            STATUS = response[i].statusCode;
            responsesCollection.push(response[i].body);
            if (STATUS >= 400) {
              console.log(`ERROR ${i} > status code: ${STATUS}`);
            } else {
              console.log(
                `Request ${i} > status code: ${STATUS} ${response[i].body.id}`
              );
            }
          }
          let end = new Date() - start;
          console.info("Execution time: %dms", end);
          res.json(responsesCollection);
        })
        .catch(error => {
          console.log(error);
          res.json(error.message);
        });
    })
    .catch(err => {
      console.log(`Something went wrong getting access token: ${err.message}`);
    });
});

function requestAPI(TOKEN) {
  const options = {
    url: "https://api.humanapi.co/v1/human/medical/profile",
    resolveWithFullResponse: true,
    json: true,
    headers: {
      "User-Agent": "client"
    },
    auth: {
      bearer: TOKEN
    }
  };
  return rp(options);
}
function generateAccessToken() {
  // Human API's session authentication endpoint
  const authUrl = "https://auth.humanapi.co/v1/connect/token";

  // Payload you send to Human API's session authentication endpoint
  const requestBody = {
    client_id: "5c7e67aa445c92f8a7c2f4ae4a0c3dc320035a2b",
    client_user_id: "Human_739990755",
    client_secret: "90c702a67ff0a16b3b3b347b166ac7e6af3dac85",
    type: "access"
  };

  const options = {
    url: authUrl,
    method: "POST",
    json: true,
    body: requestBody
  };
  return rp(options);
}

server.get("*", (req, res) => {
  console.log("> Path not found");
});

server.listen(3000, err => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");
});

module.exports = server;
