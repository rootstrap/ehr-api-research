const express = require("express");
const bodyParser = require("body-parser");
const server = express();
let rp = require("request-promise");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.post("*", (req, res) => {
  console.log("> POST REQUEST");
  console.log(req);
  res.sendStatus(200);
});

server.get("/limitTest/:total?", (req, res) => {
  let requestCollection = [];
  let responsesCollection = [];
  let STATUS = 0;
  let start = new Date();

  generateAccessCode()
    .then(auth => {
      console.log(`------------------------------`);
      console.log(`Generating access code`);
      console.log(`------------------------------`);
      console.log(auth.code);

      return generateAccessToken(auth.code);
    })
    .then(auth => {
      console.log(`------------------------------`);
      console.log(`Generating access token`);
      console.log(`------------------------------`);
      console.log(auth.access_token);

      TOKEN = auth.access_token;
      const TOTAL = !req.params.total ? 10 : req.params.total;
      console.log(`------------------------------`);
      console.log(`Sending ${TOTAL} API requests to 1UP Health`);
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
                `Request ${i} > status code: ${STATUS} ${response[i].body.transactionTime}`
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
    url: "https://api.1up.health/fhir/dstu2/Patient",
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

function generateAccessCode() {
  // 1UP session authentication endpoint
  const client_secret = "6qYPeVz6kGn0Houh4Sku64i6YXYSPe1B";
  const client_id = "c41f33a2033547b89548e537d85d9684";
  const app_user_id = "12345";
  const authUrl = `https://api.1up.health/user-management/v1/user/auth-code?app_user_id=${app_user_id}&client_id=${client_id}&client_secret=${client_secret}`;

  const options = {
    url: authUrl,
    method: "POST",
    json: true
  };
  return rp(options);
}

function generateAccessToken(code) {
  // 1UP session authentication endpoint
  const client_secret = "6qYPeVz6kGn0Houh4Sku64i6YXYSPe1B";
  const client_id = "c41f33a2033547b89548e537d85d9684";
  const authUrl = `https://api.1up.health/fhir/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=authorization_code`;

  const options = {
    url: authUrl,
    method: "POST",
    json: true
  };
  return rp(options);
}

server.get("*", (req, res) => {
  console.log("> GET REQUEST");
  console.log(req);
  res.sendStatus(200);
});

server.listen(3000, err => {
  if (err) throw err;
  console.log("> Ready on http://localhost:3000");
});

module.exports = server;
