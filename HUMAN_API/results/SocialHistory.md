**Endpoint:**

### https://api.humanapi.co/v1/human/medical/social_history

**Response:**

```json
[
    {
        "id": "5e6674525ee4bf1cfca2f4d5",
        "updatedAt": "2020-03-09T16:52:37.248Z",
        "createdAt": "2020-03-09T16:52:37.248Z",
        "entries": [
            {
                "dateTime": "2020-01-26T10:00:00.000Z",
                "name": "Never smoker",
                "codes": [
                    {
                        "name": "Smoking Status",
                        "code": "266919005",
                        "codeSystemName": "SNOMED-CT"
                    }
                ]
            },
            {
                "dateTime": "2020-01-26T10:00:00.000Z",
                "name": "Yes",
                "codes": [
                    {
                        "name": "Alcohol Use",
                        "code": "704197006",
                        "codeSystemName": "SNOMED-CT"
                    }
                ]
            }
        ],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745e5ee4bfad82a2f5b7",
            "href": "/medical/ccds/5e66745e5ee4bfad82a2f5b7"
        }
    },
    {
        "id": "5e6674555ee4bf66f7a2f4eb",
        "updatedAt": "2020-03-09T16:52:37.946Z",
        "createdAt": "2020-03-09T16:52:37.946Z",
        "entries": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    }
]
```