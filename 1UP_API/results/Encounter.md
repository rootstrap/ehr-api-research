**Endpoint:**

### https://api.1up.health/fhir/dstu2/Encounter

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 2,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Encounter/106df20112224730a7cedb8404891df313897f81f650bd7a",
            "search": {
                "mode": "match"
            },
            "resource": {
                "location": [
                    {
                        "location": {
                            "reference": "Location/f06fecdabbe7",
                            "display": "Baseline East Medical Center"
                        },
                        "status": "active"
                    }
                ],
                "identifier": [
                    {
                        "period": {
                            "start": "2019-04-12T13:40:43.000Z"
                        },
                        "system": "urn:oid:3.3.3.3.3.3",
                        "type": {
                            "text": "FIN NBR"
                        },
                        "value": "20003772",
                        "use": "usual"
                    },
                    {
                        "value": "4623909",
                        "use": "usual",
                        "system": "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.808Z",
                    "versionId": "9000000000002"
                },
                "status": "in-progress",
                "text": {
                    "div": "<div><p><b>Encounter</b></p><p><b>Patient Name</b>: Smart, Barney R</p><p><b>Location</b>: Baseline East Medical Center</p><p><b>Class</b>: Outpatient</p><p><b>Status</b>: in Progress</p><p><b>Period Start Date</b>: Apr 12, 2019  1:40 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "period": {
                    "start": "2019-04-12T13:40:00.000Z"
                },
                "class": "outpatient",
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "Encounter",
                "serviceProvider": {
                    "reference": "Organization/bcb76ca281a5"
                },
                "id": "106df20112224730a7cedb8404891df313897f81f650bd7a",
                "participant": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "ATND",
                                        "userSelected": false,
                                        "display": "attender"
                                    }
                                ],
                                "text": "Attending Physician"
                            }
                        ],
                        "period": {
                            "start": "2019-04-22T15:50:00.000Z"
                        }
                    }
                ]
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Encounter/106df20112224f385be17e7bf8429bcee5b6b06619f64946",
            "search": {
                "mode": "match"
            },
            "resource": {
                "location": [
                    {
                        "location": {
                            "reference": "Location/ea036c7e3068",
                            "display": "Baseline East Medical Center, BE Hospital, BE Cardiology, Card Exam 1"
                        },
                        "status": "active"
                    }
                ],
                "identifier": [
                    {
                        "period": {
                            "start": "2019-04-12T13:38:47.000Z"
                        },
                        "system": "urn:oid:3.3.3.3.3.3",
                        "type": {
                            "text": "FIN NBR"
                        },
                        "value": "20003771",
                        "use": "usual"
                    },
                    {
                        "value": "4623906",
                        "use": "usual",
                        "system": "https://fhir-myrecord.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.815Z",
                    "versionId": "9000000000002"
                },
                "status": "in-progress",
                "text": {
                    "div": "<div><p><b>Encounter</b></p><p><b>Patient Name</b>: Smart, Barney R</p><p><b>Location</b>: Baseline East Medical Center, BE Hospital, BE Cardiology, Card Exam 1</p><p><b>Class</b>: Inpatient</p><p><b>Status</b>: in Progress</p><p><b>Period Start Date</b>: Apr 12, 2019  1:38 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "period": {
                    "start": "2019-04-12T13:38:00.000Z"
                },
                "class": "inpatient",
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "Encounter",
                "serviceProvider": {
                    "reference": "Organization/bcb76ca281a5"
                },
                "id": "106df20112224f385be17e7bf8429bcee5b6b06619f64946",
                "participant": [
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "ADM",
                                        "userSelected": false,
                                        "display": "admitter"
                                    }
                                ],
                                "text": "Admitting Physician"
                            }
                        ],
                        "period": {
                            "start": "2020-03-03T14:14:23.000Z"
                        }
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "ADM",
                                        "userSelected": false,
                                        "display": "admitter"
                                    }
                                ],
                                "text": "Admitting Physician"
                            }
                        ],
                        "period": {
                            "start": "2019-04-12T20:50:00.000Z"
                        }
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "ATND",
                                        "userSelected": false,
                                        "display": "attender"
                                    }
                                ],
                                "text": "Attending Physician"
                            }
                        ],
                        "period": {
                            "start": "2019-05-29T14:08:49.000Z"
                        }
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "CON",
                                        "userSelected": false,
                                        "display": "consultant"
                                    }
                                ],
                                "text": "Consulting Physician"
                            }
                        ],
                        "period": {
                            "start": "2020-03-03T14:34:00.000Z"
                        }
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "PART",
                                        "userSelected": false,
                                        "display": "Participation"
                                    }
                                ],
                                "text": "Database Coordinator"
                            }
                        ],
                        "period": {
                            "start": "2020-02-21T13:17:42.000Z"
                        }
                    },
                    {
                        "type": [
                            {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/ParticipationType",
                                        "code": "PART",
                                        "userSelected": false,
                                        "display": "Participation"
                                    }
                                ],
                                "text": "Admitting Clerk"
                            }
                        ],
                        "period": {
                            "start": "2019-04-18T15:53:00.000Z"
                        }
                    }
                ]
            }
        }
    ]
}
```
