**Endpoint:**

### https://api.1up.health/fhir/dstu2/RelatedPerson

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 1,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/RelatedPerson/954be10f7cd71986b98b3b6fb9adf4780d4f41381e6b77ac",
            "search": {
                "mode": "match"
            },
            "resource": {
                "identifier": [
                    {
                        "value": "19775887",
                        "use": "usual",
                        "system": "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
                    },
                    {
                        "value": "954be10f7cd71986b98b3b6fb9adf4780d4f41381e6b77ac",
                        "use": "usual",
                        "system": "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:34.039Z",
                    "versionId": "9000000000002"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "RelatedPerson",
                "id": "954be10f7cd71986b98b3b6fb9adf4780d4f41381e6b77ac",
                "relationship": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v3/RoleCode",
                            "code": "ONESELF",
                            "display": "self"
                        }
                    ],
                    "text": "self"
                }
            }
        }
    ]
}
```