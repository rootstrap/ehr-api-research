### API Bulk Requests

The aim of this part was to test if we have any kind of limitations for the API
requests, considering we would need to make batch process to pull data from
patients. The test hit a patient `profile` endpoint
[https://api.humanapi.co/v1/human/medical/profile](https://api.humanapi.co/v1/human/medical/profile).

### Steps followed

1. Run the app by:

   ```javascript
   cd app
   npm install
   node server.js
   ```

2. Open a browser and navigate to http://localhost:3000/limitTest/{calls_number}
   where {calls_number} is the number of request we want to run.

3. Once the test finish, you will see something like that:

![Results](./results/test.gif)
