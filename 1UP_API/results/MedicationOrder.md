**Endpoint:**

### https://api.1up.health/fhir/dstu2/MedicationOrder

**Response:**


```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 54,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd7020264593b115d07a9bd46419925b3da243d",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22541917",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:41.591Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd7020264593b115d07a9bd46419925b3da243d"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd715d011d59afd610636c22a79e64f497f5403",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosageInstruction": [
                    {
                        "text": "5 mg, Oral, BID, for 5 days, 10 tabs, 1 Refill(s)",
                        "route": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "26643006",
                                    "userSelected": false,
                                    "display": "Oral route (qualifier value)"
                                }
                            ],
                            "text": "Oral"
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2018-09-21T15:23:00.000-05:00",
                                    "end": "2018-10-01T15:23:00.000-05:00"
                                }
                            },
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/v3/GTSAbbreviation",
                                        "code": "BID",
                                        "userSelected": false,
                                        "display": "BID"
                                    }
                                ],
                                "text": "BID"
                            }
                        },
                        "doseQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 5
                        }
                    }
                ],
                "identifier": [
                    {
                        "value": "24385893",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:36.941Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "dateEnded": "2018-10-01T20:23:00.000Z",
                "prescriber": {
                    "reference": "Practitioner/5f816ef4d244",
                    "display": "MedActionPlan, PW"
                },
                "dateWritten": "2018-09-21T20:22:33.000Z",
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "id": "954be10f7cd715d011d59afd610636c22a79e64f497f5403",
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "206954",
                            "userSelected": false,
                            "display": "Prednisone 5 MG Oral Tablet [Deltasone]"
                        }
                    ],
                    "text": "predniSONE (Deltasone 5 mg oral tablet)"
                },
                "dispenseRequest": {
                    "validityPeriod": {
                        "start": "2018-09-21T15:22:33.000-05:00"
                    },
                    "numberOfRepeatsAllowed": 1,
                    "quantity": {
                        "unit": "tabs",
                        "system": "http://unitsofmeasure.org",
                        "code": "{tbl}",
                        "value": 10
                    }
                },
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: predniSONE (Deltasone 5 mg oral tablet)</p><p><b>Dosage Instructions</b>: 5 mg, Oral, BID, for 5 days, 10 tabs, 1 Refill(s)</p><p><b>Status</b>: Active</p><p><b>Substitution</b>: Equivalent</p></div>",
                    "status": "generated"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "MedicationOrder",
                "priorPrescription": {
                    "reference": "MedicationOrder/954be10f7cd7b24f16acaac20254e335e65a73e1919f29de"
                },
                "substitution": {
                    "type": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/v3/substanceAdminSubstitution",
                                "code": "E",
                                "userSelected": false,
                                "display": "equivalent"
                            }
                        ],
                        "text": "Equivalent"
                    }
                }
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd717a49a7b1eba86970009d827203c7d8882f6",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22510009",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:45.124Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd717a49a7b1eba86970009d827203c7d8882f6"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd725ac4d444fcc76fd5f6246a7bf92fc4f2790",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22522515",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:41.574Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd725ac4d444fcc76fd5f6246a7bf92fc4f2790"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd72a5d0bd622370c95c471c55aefdcc7f52ede",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22538017",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:41.560Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd72a5d0bd622370c95c471c55aefdcc7f52ede"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd72f4ff18d48dfb51e74978ca87cd0b634788d",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22542035",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:38.113Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd72f4ff18d48dfb51e74978ca87cd0b634788d"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd7344840c416424867b626c087ce1394b65bee",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22510345",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:43.247Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd7344840c416424867b626c087ce1394b65bee"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd743d965b325239d7dfa071394b72e9efd0816",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosageInstruction": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2020-02-05T14:00:00.000-06:00",
                                    "end": "2020-02-05T14:00:00.000-06:00"
                                }
                            }
                        }
                    }
                ],
                "medicationCodeableConcept": {
                    "text": "folic acid"
                },
                "identifier": [
                    {
                        "value": "30349907",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:35.551Z",
                    "versionId": "9000000000002"
                },
                "status": "draft",
                "dispenseRequest": {
                    "validityPeriod": {
                        "start": "2020-02-04T14:16:24.000-06:00"
                    }
                },
                "dateEnded": "2020-02-05T20:00:00.000Z",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: folic acid</p><p><b>Status</b>: Draft</p></div>",
                    "status": "generated"
                },
                "prescriber": {
                    "reference": "Practitioner/11c9bd9ff8ec",
                    "display": "Free, Valerie"
                },
                "dateWritten": "2020-02-04T20:16:24.000Z",
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd743d965b325239d7dfa071394b72e9efd0816"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd7472944e83941ceed36c55c123a3c6a4ac793",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosageInstruction": [
                    {
                        "text": "10 mg, 1 tabs, Oral, Daily",
                        "route": {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "26643006",
                                    "userSelected": false,
                                    "display": "Oral route (qualifier value)"
                                }
                            ],
                            "text": "Oral"
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2018-04-11T11:52:00.000-07:00"
                                }
                            },
                            "code": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/timing-abbreviation",
                                        "code": "QD",
                                        "userSelected": false,
                                        "display": "QD"
                                    }
                                ],
                                "text": "Daily"
                            }
                        },
                        "doseQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 10
                        }
                    }
                ],
                "medicationCodeableConcept": {
                    "coding": [
                        {
                            "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                            "code": "11289",
                            "userSelected": false,
                            "display": "Warfarin"
                        }
                    ],
                    "text": "warfarin"
                },
                "identifier": [
                    {
                        "value": "23529893",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:35.687Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "dispenseRequest": {
                    "validityPeriod": {
                        "start": "2018-04-11T13:52:43.000-05:00"
                    }
                },
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: warfarin</p><p><b>Dosage Instructions</b>: 10 mg, 1 tabs, Oral, Daily</p><p><b>Status</b>: Active</p></div>",
                    "status": "generated"
                },
                "prescriber": {
                    "reference": "Practitioner/589720f1522a",
                    "display": "IPRO, PW"
                },
                "dateWritten": "2018-04-11T18:52:43.000Z",
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd717310021ad2ce35c100a6c4f4171c6777d40"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd7472944e83941ceed36c55c123a3c6a4ac793"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationOrder/954be10f7cd74815ecede5444f0979b549c99dcab51cdb5d",
            "search": {
                "mode": "match"
            },
            "resource": {
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22510127",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:43.103Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Order</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered In Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationOrder",
                "id": "954be10f7cd74815ecede5444f0979b549c99dcab51cdb5d"
            }
        }
    ],
    "link": [
        {
            "relation": "self",
            "url": "https://api.1up.health/fhir/dstu2/MedicationOrder"
        },
        {
            "relation": "next",
            "url": "https://api.1up.health/fhir/dstu2/MedicationOrder?_afterid=954be10f7cd74815ecede5444f0979b549c99dcab51cdb5d"
        }
    ]
}
```