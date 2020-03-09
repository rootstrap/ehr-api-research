**Endpoint:**

### https://api.1up.health/fhir/dstu2/Medication

**Response:**


```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 3,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Medication/b654c9b3448b",
            "search": {
                "mode": "match"
            },
            "resource": {
                "product": {
                    "ingredient": [
                        {
                            "item": {
                                "reference": "0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/99632a72d37e1283526307ae32d6a4572b6cd85c25e706af",
                                "display": "D5W"
                            },
                            "amount": {
                                "numerator": {
                                    "unit": "mL",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "mL",
                                    "value": 1000
                                },
                                "denominator": {
                                    "unit": "mL",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "mL",
                                    "value": 1000
                                }
                            }
                        },
                        {
                            "item": {
                                "reference": "0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/99632a72d37ee782600a64e547a58cc3d839e2cba9b8bb8c",
                                "display": "heparin"
                            },
                            "amount": {
                                "numerator": {
                                    "unit": "units",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "U",
                                    "value": 100
                                },
                                "denominator": {
                                    "unit": "mL",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "mL",
                                    "value": 1000
                                }
                            }
                        }
                    ]
                },
                "meta": {
                    "lastUpdated": "2020-03-05T13:39:16.253Z",
                    "versionId": "9000000000002"
                },
                "code": {
                    "text": "D5W 1000 mL + heparin 100 unit(s)"
                },
                "resourceType": "Medication",
                "id": "b654c9b3448b"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Medication/b79826da5b81",
            "search": {
                "mode": "match"
            },
            "resource": {
                "meta": {
                    "lastUpdated": "2020-03-05T13:39:16.346Z",
                    "versionId": "9000000000002"
                },
                "code": {
                    "text": "D5W"
                },
                "resourceType": "Medication",
                "id": "b79826da5b81"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Medication/c8e9138e96f1",
            "search": {
                "mode": "match"
            },
            "resource": {
                "meta": {
                    "lastUpdated": "2020-03-05T13:39:16.345Z",
                    "versionId": "9000000000002"
                },
                "code": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "235473",
                            "userSelected": false,
                            "display": "heparin, porcine"
                        }
                    ],
                    "text": "heparin"
                },
                "resourceType": "Medication",
                "id": "c8e9138e96f1"
            }
        }
    ]
}
```