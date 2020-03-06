**Endpoint:**

### https://api.1up.health/fhir/dstu2/AllergyIntolerance

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 8,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df201122209cf5caa0372d9b937fbc8944e360f4bcb3f",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655753",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.222Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: sulfamethoxazole-trimethoprim</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Medication</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "10831",
                            "userSelected": false,
                            "display": "Sulfamethoxazole / Trimethoprim"
                        }
                    ],
                    "text": "sulfamethoxazole-trimethoprim"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "medication",
                "id": "106df201122209cf5caa0372d9b937fbc8944e360f4bcb3f",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df20112222fd97e86d13018f3316e33f8137d6ac5890c",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655749",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.202Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Sesame oil</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Food</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "89707004",
                            "userSelected": false,
                            "display": "Sesame oil (substance)"
                        }
                    ],
                    "text": "Sesame oil"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "food",
                "id": "106df20112222fd97e86d13018f3316e33f8137d6ac5890c",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df2011222478118cc958f921c66ede4c7c71fb16ee08e",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655743",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.159Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Shellfish toxin</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Medication</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "32500002",
                            "userSelected": false,
                            "display": "Shellfish toxin (substance)"
                        }
                    ],
                    "text": "Shellfish toxin"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "medication",
                "id": "106df2011222478118cc958f921c66ede4c7c71fb16ee08e",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df20112226c43c0e29384dfb805e4c01129a4cdeab19d",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2020-03-03T14:15:36.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655737",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.199Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Tetracycline</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Medication</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "text": "Tetracycline"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "medication",
                "id": "106df20112226c43c0e29384dfb805e4c01129a4cdeab19d",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df2011222791cc08175ccaeabf172e612f28504e31ca0",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7639739",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.155Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Flower and weed pollen</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Environment</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "256292005",
                            "userSelected": false,
                            "display": "Flower and weed pollen (substance)"
                        }
                    ],
                    "text": "Flower and weed pollen"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "environment",
                "id": "106df2011222791cc08175ccaeabf172e612f28504e31ca0",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df20112228ce594eaee79912847b90c27f66e478a6a3f",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655739",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.197Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Peanut - dietary</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Food</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "256349002",
                            "userSelected": false,
                            "display": "Peanut - dietary (substance)"
                        }
                    ],
                    "text": "Peanut - dietary"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "food",
                "id": "106df20112228ce594eaee79912847b90c27f66e478a6a3f",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df2011222b3ea5b4752ac6ea35f0a92eb1de6a021c429",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2020-01-07T21:03:00.000Z",
                "onset": "2020-01-07T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "8275733",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.193Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Asacol</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Medication</p><p><b>Onset</b>: Jan  8, 2020 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "text": "Asacol"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "medication",
                "id": "106df2011222b3ea5b4752ac6ea35f0a92eb1de6a021c429",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/AllergyIntolerance/106df2011222f6c5b5e4fd7eea6a67cc9ada298b73d9f677",
            "search": {
                "mode": "match"
            },
            "resource": {
                "recordedDate": "2017-02-28T21:03:00.000Z",
                "onset": "2015-12-14T18:00:00.000-06:00",
                "identifier": [
                    {
                        "value": "7655757",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:50:28.203Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Allergy Intolerance</b></p><p><b>Patient</b>: Smart, Barney R</p><p><b>Allergy</b>: Bee venom</p><p><b>Status</b>: Active</p><p><b>Criticality</b>: Low Risk</p><p><b>Category</b>: Environment</p><p><b>Onset</b>: Dec 15, 2015 12:00 A.M. UTC</p></div>",
                    "status": "generated"
                },
                "substance": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "288328004",
                            "userSelected": false,
                            "display": "Bee venom (substance)"
                        }
                    ],
                    "text": "Bee venom"
                },
                "patient": {
                    "reference": "Patient/106df2011222"
                },
                "resourceType": "AllergyIntolerance",
                "criticality": "CRITL",
                "category": "environment",
                "id": "106df2011222f6c5b5e4fd7eea6a67cc9ada298b73d9f677",
                "recorder": {
                    "reference": "Practitioner/c5378fe7b389",
                    "display": "Generated Domain User for 0"
                },
                "type": "allergy"
            }
        }
    ]
}
```