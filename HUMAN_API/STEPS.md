### API Docs

https://reference.humanapi.co/docs

### Steps followed

1. Login to https://portal.humanapi.co/

   ```
   user: pablo.blanco@rootstrap.com
   pass: ?!ZmL;'<_%LHw3tk
   ```

2. Create a testing app

   ```
   name: CHAMPZHEALTH_SANDBOX
   client_id: 5c7e67aa445c92f8a7c2f4ae4a0c3dc320035a2b
   client_secret: 90c702a67ff0a16b3b3b347b166ac7e6af3dac85
   ```

3. To get session_token run:

    ```javascript
    cd humanwebapp
    npm install
    node server.js
    navigate to `http://localhost:3000/getToken`
    ```

    This should return the session_token, something like:

    ```json
    {   "expires_in": 3600,
        "human_id": "id",
        "session_token": "some_value"
    }
    ```

4. Opem /connect.hml and replace the {session_token} with the given in the last call. Then navigate to `http://localhost:3000/` to link the EHR provider

5. When you are prompted to search for a data source, search for `Starfleet Medical` or `Starfleet Pharma`. Use `demouser` and `password` as the login credentials

6. From here you can use postman collections to generate an {access_token} and use the API.
