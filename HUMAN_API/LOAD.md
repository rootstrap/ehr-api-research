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


### Some results

Based on the script implemented above we run some test to the same endpoints and different amount of requests

| Number of requests | Execution time (ms) |      API endpoint         |  Status Code  |  Error responses |
| ------------------ |:-------------------:|:-------------------------:|:-------------:|:----------------:|
|        100         |        2849         |  v1/human/medical/profile |       200     |        0         |
|        200         |        3981         |  v1/human/medical/profile |       200     |        0         |
|        400         |        5262         |  v1/human/medical/profile |       200     |        0         |

**According to the tests and the documentation of the API we did not found any limitations to implement API bulk requests (Besides the ones the vendor has with its business model based on the amount of users).**

### Example

Once the test finish, you will see something like that:

![Results](./results/test.gif)
