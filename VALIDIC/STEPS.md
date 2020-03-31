### API Docs

https://helpdocs.validic.com/docs/what-is-validic

https://validic.com/inform-connected-apps-and-devices/

### SandBox access

Sandbox OrgID: 5e7cbe744d3b8f00b057e835

Token: 02c33cbae59abf18ab4e024f4c464da9

### Steps followed

1.  Create a new user using the postman collection using an unique `uid`

    ```json
    {
      "id": "5e7e2bbc20a51000b19f7fe1",
      "uid": "277040620sol3",
      "marketplace": {
        "token": "1c59bf5bed281bc9aa35ee623d131f840a9e6555b7a108835273e5b4645f80c5",
        "url": "https://syncmydevice.com?token=1c59bf5bed281bc9aa35ee623d131f840a9e6555b7a108835273e5b4645f80c5"
      },
      "mobile": {
        "token": "e6c8e5f20cd6f8407e89a3d23b63509b"
      },
      "location": {
        "timezone": "America/New_York",
        "country_code": "US"
      },
      "sources": [],
      "status": "active",
      "created_at": "2020-03-27T16:37:16Z",
      "updated_at": "2020-03-27T16:37:16Z"
    }
    ```

2.  Using the marketplace url provided, connect a real device to the user.

3.  From here you can use postman collections to use the API.
