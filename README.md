# champz-api-research
Comparison between 1UP Health and HumanAPI

## 1UP Health

>**Results and Postman collection [here](./1UP_API/RESULTS.md)**

### Steps followed

1. Create a developer account here: https://1up.health/patient/user/register

2. Once account created you can get to devConsole here: https://1up.health/devconsole

    ```
    user: rsdemo 

    pass: ?!ZmL;'<_%LHw3tk
    ```

3. Create a testing app

    ```
    name: 1UP Testing APP

    client_id: 93dea9211019432c96dd11bf7411ad95

    client_secret: p7epDthaRoYqrk7WdDcNgfOjQQ2qdQOR
    ```

4. Using Postman collections under `/Auth` create an user and get a token.
 
5. Using EHR API connection, we can login.

    **Epic**
    ```
    Epic EHR ID: 4706

    user / pass: fhirjason / epicepic1

    `https://quick.1up.health/connect/4706?access_token={access_token}`
    ```

    **Cerner**
    ```
    Test Cerner EHR ID: 4707

    wilma_smart / Cerner01

    joe_smart / Cerner01

    timmy_smart / Cerner01
    
    `https://quick.1up.health/connect/4707?access_token={access_token}`
    ```

6. Run the [app](https://github.com/1uphealth/1upwebapp) to get the access_token on the 1UP callback

7. Once access_token was generated you can use PostMan endpoints under `/Get Patient Info`


## HumanApi

1. Login to https://portal.humanapi.co/

    ```
    user: pablo.blanco@rootstrap.com 
    pass: ?!ZmL;'<_%LHw3tk
    ```
