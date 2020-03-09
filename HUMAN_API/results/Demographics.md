**Endpoint:**

### https://api.humanapi.co/v1/human/medical/demographics

**Response:**

```json
[
    {
        "id": "5e6674525ee4bf3a54a2f4d6",
        "updatedAt": "2020-03-09T16:52:36.240Z",
        "createdAt": "2020-03-09T16:52:36.240Z",
        "address": {
            "country": "US",
            "zip": "98765",
            "state": "CA",
            "city": "Anytown",
            "street": [
                "1 Main St."
            ]
        },
        "dob": "01/27/1958",
        "gender": "female",
        "language": "Eng",
        "name": {
            "family": "Plasty",
            "given": [
                "Arthuretta"
            ]
        },
        "provider": {
            "address": {
                "country": "USA",
                "zip": "98765",
                "state": "CA",
                "city": "Anytown",
                "street": [
                    "2 Main St."
                ]
            },
            "phone": "(650) 555-1212",
            "organization": "Hippie Natural-Artificial Orthopedics"
        },
        "maritalStatus": "single",
        "ethnicityCodes": [],
        "genderCodes": [
            {
                "code": "703118005",
                "codeSystemName": "SNOMED-CT",
                "inferred": true
            }
        ],
        "maritalStatusCodes": [
            {
                "code": "87915002",
                "codeSystemName": "SNOMED-CT",
                "inferred": true
            }
        ],
        "languageCodes": [],
        "raceCodes": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    }
]
```