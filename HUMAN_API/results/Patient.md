**Endpoint:**

### https://api.humanapi.co/v1/human/medical/profile

**Response:**

```json
{
    "id": "5e6674555ee4bfec6da2f4de",
    "updatedAt": "2020-03-09T16:52:37.549Z",
    "createdAt": "2020-03-09T16:52:37.549Z",
    "alcohol": {
        "codes": [],
        "use": "yes"
    },
    "smoking": {
        "codes": [],
        "status": "Never smoker"
    },
    "demographics": {
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
        "dobDateTime": "1970-01-01T00:00:00.000Z",
        "gender": "female",
        "language": "Eng",
        "name": {
            "family": "Plasty",
            "given": [
                "Arthuretta"
            ]
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
        "raceCodes": []
    }
}
```