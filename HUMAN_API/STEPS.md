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

3. To get access_token run:

   ```javascript
   cd humanwebapp
   npm install
   node server.js
   ```

   This should return the access_token, something like:

   ```json
   {
     "expires_in": 3600,
     "human_id": "ba3cfd020dbaeb2558858c4e0b7fe48e",
     "session_token": "my_Session_token"
   }
   ```

4. Connect When you are prompted to search for a data source, search for
   Starfleet Medical or Starfleet Pharma. Use `demouser` and `password` as the
   login credentials
