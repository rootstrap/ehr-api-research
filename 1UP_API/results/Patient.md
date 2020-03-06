**Endpoint:**

### https://api.1up.health/fhir/dstu2/Patient

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 1,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Patient/106df2011222",
            "search": {
                "mode": "match"
            },
            "resource": {
                "birthDate": "1955-05-05",
                "identifier": [
                    {
                        "period": {
                            "start": "2017-07-11T15:10:29.000Z"
                        },
                        "system": "urn:oid:1.1.1.1.1.1",
                        "type": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/v2/0203",
                                    "code": "MR",
                                    "userSelected": false,
                                    "display": "Medical record number"
                                }
                            ],
                            "text": "MRN"
                        },
                        "value": "10002828",
                        "use": "usual"
                    },
                    {
                        "value": "4704007",
                        "use": "usual",
                        "system": "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.057Z",
                    "versionId": "9000000000002"
                },
                "contact": [
                    {
                        "name": {
                            "given": [
                                "WILMA"
                            ],
                            "period": {
                                "start": "2016-06-22T20:25:58.000Z"
                            },
                            "text": "SMART, WILMA",
                            "family": [
                                "SMART"
                            ],
                            "use": "official"
                        },
                        "telecom": [
                            {
                                "period": {
                                    "start": "2017-06-27T17:28:04.000Z"
                                },
                                "system": "phone",
                                "value": "8165477777",
                                "use": "work"
                            },
                            {
                                "period": {
                                    "start": "2017-02-07T18:56:52.000Z"
                                },
                                "system": "phone",
                                "value": "8169519999",
                                "use": "home"
                            },
                            {
                                "period": {
                                    "start": "2017-06-27T17:31:07.000Z"
                                },
                                "system": "phone",
                                "value": "5032458888",
                                "use": "mobile"
                            },
                            {
                                "period": {
                                    "start": "2019-10-22T20:11:00.000Z"
                                },
                                "system": "email",
                                "value": "Alt2_wilmasmart@google.com",
                                "use": "work"
                            },
                            {
                                "period": {
                                    "start": "2017-12-01T16:52:18.000Z"
                                },
                                "system": "email",
                                "value": "wilma_smart@google.com",
                                "use": "home"
                            }
                        ],
                        "period": {
                            "start": "2019-07-10T23:16:00.000Z"
                        },
                        "address": {
                            "country": "USA",
                            "period": {
                                "start": "2017-02-07T18:56:52.000Z"
                            },
                            "city": "Kansas City",
                            "use": "home",
                            "line": [
                                "1200 Grand Road",
                                "_"
                            ],
                            "district": "Jackson",
                            "postalCode": "16145",
                            "text": "1200 Grand Road\n_\nKansas City, MO 16145\nUSA",
                            "state": "MO"
                        },
                        "relationship": [
                            {
                                "text": "Authorized Representative"
                            }
                        ],
                        "gender": "female"
                    }
                ],
                "text": {
                    "div": "<div><p><b>Patient</b></p><p><b>Name</b>: Smart, Barney R</p><p><b>DOB</b>: May  5, 1955</p><p><b>Administrative Gender</b>: Male</p><p><b>Status</b>: Active</p></div>",
                    "status": "generated"
                },
                "name": [
                    {
                        "given": [
                            "Barney",
                            "R"
                        ],
                        "period": {
                            "start": "2017-07-11T15:10:32.000Z"
                        },
                        "text": "Smart, Barney R",
                        "family": [
                            "Smart"
                        ],
                        "use": "official"
                    }
                ],
                "gender": "male",
                "active": true,
                "resourceType": "Patient",
                "id": "106df2011222"
            }
        }
    ]
}
```