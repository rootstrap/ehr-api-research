**Endpoint:**

### https://api.humanapi.co/v1/human/medical/allergies

**Response:**

```json
[
    {
        "id": "5e6674555ee4bf075aa2f4ea",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:38.042Z",
        "createdAt": "2020-03-09T16:52:38.042Z",
        "name": "Metformin",
        "patient": {
            "name": ""
        },
        "codes": [
            {
                "name": "Metformin",
                "code": "6809",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "code": "235743",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "code": "786Z46389E",
                "codeSystem": "2.16.840.1.113883.4.9",
                "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                "inferred": false
            },
            {
                "code": "9100L32L2N",
                "codeSystem": "2.16.840.1.113883.4.9",
                "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                "inferred": false
            },
            {
                "code": "V9AZJ7GJZ1",
                "codeSystem": "2.16.840.1.113883.4.9",
                "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                "inferred": false
            },
            {
                "name": "Metformin",
                "code": "N0000006631",
                "codeSystem": "2.16.840.1.113883.3.26.1.5",
                "codeSystemName": "NDF-RT",
                "inferred": true
            },
            {
                "name": "Metformin",
                "code": "N0000021984",
                "codeSystem": "2.16.840.1.113883.3.26.1.5",
                "codeSystemName": "NDF-RT",
                "inferred": true
            },
            {
                "code": "N0000148391",
                "codeSystem": "2.16.840.1.113883.3.26.1.5",
                "codeSystemName": "NDF-RT",
                "inferred": true
            }
        ],
        "status": "Active",
        "allergen": {
            "name": "Metformin",
            "codes": [
                {
                    "codeSystemName": "RxNorm",
                    "codeSystem": "2.16.840.1.113883.6.88",
                    "code": "6809",
                    "name": "Metformin"
                },
                {
                    "codeSystemName": "RxNorm",
                    "codeSystem": "2.16.840.1.113883.6.88",
                    "code": "235743"
                },
                {
                    "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                    "codeSystem": "2.16.840.1.113883.4.9",
                    "code": "786Z46389E"
                },
                {
                    "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                    "codeSystem": "2.16.840.1.113883.4.9",
                    "code": "9100L32L2N"
                },
                {
                    "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                    "codeSystem": "2.16.840.1.113883.4.9",
                    "code": "V9AZJ7GJZ1"
                }
            ]
        },
        "reactionsFull": [
            {
                "name": "Rash-Mild",
                "reactionType": {
                    "codes": []
                },
                "codes": []
            }
        ],
        "dateRange": {
            "start": "2020-01-12T10:00:00.000Z"
        },
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    },
    {
        "id": "5e6674525ee4bfb2c5a2f4cf",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:37.245Z",
        "createdAt": "2020-03-09T16:52:37.245Z",
        "name": "Chantix",
        "patient": {
            "name": ""
        },
        "codes": [
            {
                "name": "Chantix",
                "code": "636674",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "code": "82269ASB48",
                "codeSystem": "2.16.840.1.113883.4.9",
                "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                "inferred": false
            },
            {
                "name": "Chantix",
                "code": "N0000176049",
                "codeSystem": "2.16.840.1.113883.3.26.1.5",
                "codeSystemName": "NDF-RT",
                "inferred": true
            }
        ],
        "status": "Active",
        "severity": "unknown",
        "allergen": {
            "name": "Chantix",
            "codes": [
                {
                    "codeSystemName": "RxNorm",
                    "codeSystem": "2.16.840.1.113883.6.88",
                    "code": "636674",
                    "name": "Chantix"
                },
                {
                    "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                    "codeSystem": "2.16.840.1.113883.4.9",
                    "code": "82269ASB48"
                }
            ]
        },
        "reactionsFull": [
            {
                "name": "Swelling",
                "reactionType": {
                    "codes": []
                },
                "codes": [
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206888002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "266308000",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "155375008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158247007",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158244000",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "139241006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "161988006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "79654002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "161979002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206891002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "423666004",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "20741006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "267038008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "139250008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206894005",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158241008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "139161006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "248479005",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "161906008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "413269001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "65124004",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "442672001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "300871001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    }
                ]
            }
        ],
        "dateRange": {
            "start": "2018-11-30T10:00:00.000Z"
        },
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    },
    {
        "id": "5e6674565ee4bf6381a2f4f5",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:38.744Z",
        "createdAt": "2020-03-09T16:52:38.744Z",
        "name": "Varenicline",
        "patient": {
            "name": ""
        },
        "codes": [
            {
                "name": "Varenicline",
                "code": "636674",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "code": "82269ASB48",
                "codeSystem": "2.16.840.1.113883.4.9",
                "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                "inferred": false
            },
            {
                "name": "Varenicline",
                "code": "N0000176049",
                "codeSystem": "2.16.840.1.113883.3.26.1.5",
                "codeSystemName": "NDF-RT",
                "inferred": true
            }
        ],
        "status": "Active",
        "allergen": {
            "name": "Varenicline",
            "codes": [
                {
                    "codeSystemName": "RxNorm",
                    "codeSystem": "2.16.840.1.113883.6.88",
                    "code": "636674",
                    "name": "Varenicline"
                },
                {
                    "codeSystemName": "FDA Unique Ingredient Identifier (UNII)",
                    "codeSystem": "2.16.840.1.113883.4.9",
                    "code": "82269ASB48"
                }
            ]
        },
        "reactionsFull": [
            {
                "name": "Swelling",
                "reactionType": {
                    "codes": []
                },
                "codes": [
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206888002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "266308000",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "155375008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158247007",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158244000",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "139241006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "161988006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "79654002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "161979002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206891002",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "423666004",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "20741006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "267038008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "139250008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "206894005",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Edema",
                        "code": "158241008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "139161006",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "248479005",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "161906008",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "413269001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "65124004",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "442672001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    },
                    {
                        "inferredFrom": "ctakes-service",
                        "name": "Swelling",
                        "code": "300871001",
                        "codeSystem": "2.16.840.1.113883.6.96",
                        "codeSystemName": "SNOMED CT"
                    }
                ]
            }
        ],
        "dateRange": {
            "start": "2018-11-30T10:00:00.000Z"
        },
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    }
]
```