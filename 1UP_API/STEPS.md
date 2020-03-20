### API Docs

https://1up.health/dev

### Steps followed

1. Create a developer account here: https://1up.health/patient/user/register

2. Once account created you can get to devConsole here:
   https://1up.health/devconsole

   ```
   user: rsdemo / rsdemo2

   pass: ?!ZmL;'<_%LHw3tk
   ```

3. Create a testing app

   ```
   name: Testing APP

   client_id: 28aad52fc7ba45f4b7b031fda58b5213

   client_secret: 0Qhrs6qLnp1w7TCavybvg37KUg39FNay
   ```

4. Using Postman collections under `/Auth` create an user and get a token.

3) Run the callback app by:

   ```javascript
   cd app
   npm install
   node server.js
   ```

4) Using EHR API connection, we can login.

   **Epic**

   ```
   Epic EHR ID: 4706

   user / pass: fhirjason / epicepic1 (9999)

   `https://api.1up.health/connect/system/clinical/4706?client_id={client_id}&access_token={access_token}`

   ```

   **Cerner**

   ```
   Test Cerner EHR ID: 4707

   wilma_smart / Cerner01 (8888)

   joe_smart / Cerner01 (12345)

   timmy_smart / Cerner01 (54321)

   fredrick_smart / Cerner01 (7777)

   fredrick_smart / Cerner01 (8987)

   `https://api.1up.health/connect/system/clinical/4707?client_id={client_id}&access_token={access_token}`
   ```

5) Once access_token was generated and EHR linked you can use postman
   collections under `/Get Patient Info`
