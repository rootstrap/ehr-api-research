**Endpoint:**

### https://api.1up.health/fhir/dstu2/Observation

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 170,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd7001e8b500fe06217cc87f16024828aef25a0",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M7021308",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:38.252Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2017-04-27T14:57:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Category</b>: Vital Signs</p><p><b>Code</b>: Height/Length Measured</p><p><b>Result</b>: 150 cm</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Apr 27, 2017  2:57 P.M. UTC</p><p><b>Risk Level Detail</b>: 140.00-200.00 cm</p></div>",
                    "status": "generated"
                },
                "referenceRange": [
                    {
                        "low": {
                            "unit": "cm",
                            "system": "http://unitsofmeasure.org",
                            "code": "cm",
                            "value": 140
                        },
                        "high": {
                            "unit": "cm",
                            "system": "http://unitsofmeasure.org",
                            "code": "cm",
                            "value": 200
                        },
                        "text": "140.00-200.00 cm"
                    }
                ],
                "interpretation": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0078",
                            "code": "N",
                            "display": "Normal"
                        }
                    ]
                },
                "issued": "2017-04-27T14:57:41.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "8302-2"
                        }
                    ],
                    "text": "Height/Length Measured"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                },
                "valueQuantity": {
                    "unit": "cm",
                    "system": "http://unitsofmeasure.org",
                    "code": "cm",
                    "value": 150
                },
                "id": "954be10f7cd7001e8b500fe06217cc87f16024828aef25a0"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd70064c5059b23405dd0713da714c257a698bb",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M9327307",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:43.378Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2018-12-04T19:56:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: O2 Sat Art</p><p><b>Result</b>: 97 %</p><p><b>Risk Level</b>: Normal</p><p><b>Date</b>: Dec  4, 2018  7:56 P.M. UTC</p><p><b>Risk Level Detail</b>: 95-99 %</p></div>",
                    "status": "generated"
                },
                "referenceRange": [
                    {
                        "low": {
                            "unit": "%",
                            "system": "http://unitsofmeasure.org",
                            "code": "%",
                            "value": 95
                        },
                        "high": {
                            "unit": "%",
                            "system": "http://unitsofmeasure.org",
                            "code": "%",
                            "value": 99
                        },
                        "text": "95-99 %"
                    }
                ],
                "interpretation": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0078",
                            "code": "N",
                            "display": "Normal"
                        }
                    ]
                },
                "issued": "2018-12-04T20:08:07.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "2708-6"
                        }
                    ],
                    "text": "O2 Sat Art"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd75526993f64753bc9f8fc2899f1df45e1eff3"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "laboratory",
                            "display": "Laboratory"
                        }
                    ],
                    "text": "Laboratory"
                },
                "valueQuantity": {
                    "unit": "%",
                    "system": "http://unitsofmeasure.org",
                    "code": "%",
                    "value": 97
                },
                "id": "954be10f7cd70064c5059b23405dd0713da714c257a698bb"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd7024344535d8b24dd81a04d9c1105e1ebdcea",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M7017289",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:42.889Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2017-04-20T14:55:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Bone Age Exam Performed Date</p><p><b>Result</b>: Apr 20, 2016</p><p><b>Date</b>: Apr 20, 2017  2:55 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2017-04-20T14:55:53.000Z",
                "code": {
                    "text": "Bone Age Exam Performed Date"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "Observation",
                "valueDateTime": "2016-04-20",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "id": "954be10f7cd7024344535d8b24dd81a04d9c1105e1ebdcea"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd703385aa9a75e7f643ab168d6c22e11aeb2a2",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M7017293",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:42.934Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2017-04-20T14:55:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Bone Age Months</p><p><b>Result</b>: 6 months</p><p><b>Date</b>: Apr 20, 2017  2:55 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2017-04-20T14:55:53.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "85151-9"
                        }
                    ],
                    "text": "Bone Age Months"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "valueQuantity": {
                    "unit": "months",
                    "system": "http://unitsofmeasure.org",
                    "code": "mo",
                    "value": 6
                },
                "id": "954be10f7cd703385aa9a75e7f643ab168d6c22e11aeb2a2"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd7059c232203495867846d3574f81b7be4dc85",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M6457743",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:54.505Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "valueCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "385432009",
                            "display": "Not applicable (qualifier value)"
                        }
                    ],
                    "text": "N/A"
                },
                "effectiveDateTime": "2012-02-19T20:31:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Menstrual Status</p><p><b>Result</b>: N/A</p><p><b>Date</b>: Feb 19, 2012  8:31 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2016-06-27T19:31:33.000Z",
                "code": {
                    "text": "Menstrual Status"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "id": "954be10f7cd7059c232203495867846d3574f81b7be4dc85"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd7062c9d37c6e3e81fbb901927bcaa27e1bc89",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M8811283",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:56.403Z",
                    "versionId": "9000000000000"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Entered in Error</p><p><b>Code</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "code": {
                    "text": "Entered In Error"
                },
                "resourceType": "Observation",
                "dataAbsentReason": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/data-absent-reason",
                            "code": "masked",
                            "display": "Masked"
                        }
                    ],
                    "text": "Masked"
                },
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "id": "954be10f7cd7062c9d37c6e3e81fbb901927bcaa27e1bc89"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd7066250f142b6bb227358adb4cb414e9fc1a2",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M8093309",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:12.196Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2018-05-17T14:56:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Weight Estimated</p><p><b>Result</b>: 24 kg</p><p><b>Date</b>: May 17, 2018  2:56 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2018-05-17T14:56:20.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "8335-2"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "29463-7"
                        }
                    ],
                    "text": "Weight Estimated"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "valueQuantity": {
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg",
                    "value": 24
                },
                "id": "954be10f7cd7066250f142b6bb227358adb4cb414e9fc1a2"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd709151b21371a389cf7b0d904c19fac2f45c1",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M8675283",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:07.880Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2018-08-13T14:20:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Weight Dosing</p><p><b>Result</b>: 30 kg</p><p><b>Date</b>: Aug 13, 2018  2:20 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2018-08-13T14:20:48.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "29463-7"
                        },
                        {
                            "system": "http://loinc.org",
                            "code": "79348-9"
                        }
                    ],
                    "text": "Weight Dosing"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "valueQuantity": {
                    "unit": "kg",
                    "system": "http://unitsofmeasure.org",
                    "code": "kg",
                    "value": 30
                },
                "id": "954be10f7cd709151b21371a389cf7b0d904c19fac2f45c1"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd70a3e276ad4c3da7f0b0c915f345c9f9e1ef6",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M9311307",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:46.250Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2018-12-01T14:18:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Category</b>: Laboratory</p><p><b>Code</b>: FiO2 Art</p><p><b>Result</b>: 21</p><p><b>Risk Level</b>: NA</p><p><b>Date</b>: Dec  1, 2018  2:18 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "interpretation": {
                    "text": "NA"
                },
                "issued": "2018-12-03T15:23:24.000Z",
                "code": {
                    "coding": [
                        {
                            "system": "http://loinc.org",
                            "code": "3150-0"
                        }
                    ],
                    "text": "FiO2 Art"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd75526993f64753bc9f8fc2899f1df45e1eff3"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "laboratory",
                            "display": "Laboratory"
                        }
                    ],
                    "text": "Laboratory"
                },
                "valueQuantity": {
                    "value": 21
                },
                "id": "954be10f7cd70a3e276ad4c3da7f0b0c915f345c9f9e1ef6"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Observation/954be10f7cd70b0509974c9d8a483e7fdd89e6d7a90f1b23",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/954be10f7cd7"
                },
                "identifier": [
                    {
                        "value": "M8711311",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:59.090Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "valueCodeableConcept": {
                    "text": "Notify physician"
                },
                "effectiveDateTime": "2018-08-16T15:42:00.000Z",
                "text": {
                    "div": "<div><p><b>Observation</b></p><p><b>Patient</b>: 4342012</p><p><b>Status</b>: Final</p><p><b>Code</b>: Blood Glucose Interventions</p><p><b>Result</b>: Notify physician</p><p><b>Date</b>: Aug 16, 2018  3:42 P.M. UTC</p></div>",
                    "status": "generated"
                },
                "issued": "2018-08-16T15:42:56.000Z",
                "code": {
                    "text": "Blood Glucose Interventions"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd75526993f64753bc9f8fc2899f1df45e1eff3"
                },
                "resourceType": "Observation",
                "category": {
                    "coding": [
                        {
                            "extension": [
                                {
                                    "url": "http://hl7.org/fhir/StructureDefinition/data-absent-reason",
                                    "valueCode": "unknown"
                                }
                            ]
                        }
                    ]
                },
                "id": "954be10f7cd70b0509974c9d8a483e7fdd89e6d7a90f1b23"
            }
        }
    ],
    "link": [
        {
            "relation": "self",
            "url": "https://api.1up.health/fhir/dstu2/Observation"
        },
        {
            "relation": "next",
            "url": "https://api.1up.health/fhir/dstu2/Observation?_afterid=954be10f7cd70b0509974c9d8a483e7fdd89e6d7a90f1b23"
        }
    ]
}
```