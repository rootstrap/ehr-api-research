**Endpoint:**

### https://api.humanapi.co/v1/human/medical/plans_of_care

**Response:**

```json
[
    {
        "id": "5e6674565ee4bf1eeea2f4f1",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:38.749Z",
        "createdAt": "2020-03-09T16:52:38.749Z",
        "name": "Colonoscopy",
        "text": "Appointment",
        "date": "2020-12-13T09:00:00.000Z",
        "codes": [
            {
                "name": "encounter",
                "inferred": false
            }
        ],
        "type": "Appointment",
        "provider": {
            "name": {
                "given": [
                    "Jimmy"
                ],
                "family": "Wang"
            },
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "specialty": "Gastroenterology",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    },
    {
        "id": "5e6674555ee4bf07c9a2f4e8",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:38.044Z",
        "createdAt": "2020-03-09T16:52:38.044Z",
        "name": "Mammogram Screening",
        "text": "Appointment",
        "date": "2020-10-06T09:00:00.000Z",
        "codes": [
            {
                "name": "encounter",
                "inferred": false
            }
        ],
        "type": "Appointment",
        "provider": {
            "name": {
                "given": [
                    "Abigail"
                ],
                "family": "Conners"
            },
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "specialty": "Radiology",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    },
    {
        "id": "5e6674525ee4bf36e7a2f4d9",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:37.244Z",
        "createdAt": "2020-03-09T16:52:37.244Z",
        "name": "encounter",
        "text": "Appointment",
        "date": "2020-08-20T09:00:00.000Z",
        "codes": [
            {
                "name": "encounter",
                "inferred": false
            }
        ],
        "type": "Appointment",
        "provider": {
            "name": {
                "given": [
                    "Betty"
                ],
                "family": "Norson"
            },
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "specialty": "Urology",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    }
]
```