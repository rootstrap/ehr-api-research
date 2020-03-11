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

   client_id: c41f33a2033547b89548e537d85d9684

   client_secret: 6qYPeVz6kGn0Houh4Sku64i6YXYSPe1B
   ```

4. Using Postman collections under `/Auth` create an user and get a token.


3. Run the callback app by:

    ```javascript
    cd app
    npm install
    node server.js
    ```

5. Using EHR API connection, we can login.

   **Epic**

   ```
   Epic EHR ID: 4706

   user / pass: fhirjason / epicepic1

   `https://api.1up.health/connect/system/clinical/4706?client_id={client_id}&access_token={access_token}`

   ```

   **Cerner**

   ```
   Test Cerner EHR ID: 4707

   wilma_smart / Cerner01

   joe_smart / Cerner01

   timmy_smart / Cerner01

   `https://api.1up.health/connect/system/clinical/4707?client_id={client_id}&access_token={access_token}`
   ```

7. Once access_token was generated and EHR linked you can use postman collections under
   `/Get Patient Info`
