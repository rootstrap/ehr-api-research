**Endpoint:**

### https://api.1up.health/fhir/dstu2/MedicationStatement

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 357,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd700728de5279feb82d7eccde29908b86ebe59",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T18:08:00.000-06:00"
                                }
                            }
                        }
                    }
                ],
                "dateAsserted": "2019-01-21T00:08:55.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (Tylenol PM (OTC))"
                },
                "identifier": [
                    {
                        "value": "24943643",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:19.944Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (Tylenol PM (OTC))</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T18:08:00.000-06:00"
                },
                "id": "954be10f7cd700728de5279feb82d7eccde29908b86ebe59",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd70080d6edf4826cc44206d265e24fb4f7723f",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2017-07-28T08:19:00.000-07:00"
                                }
                            }
                        }
                    }
                ],
                "dateAsserted": "2017-07-28T15:19:29.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (Placebo)"
                },
                "identifier": [
                    {
                        "value": "22590243",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:40.046Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (Placebo)</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2017-07-28T08:19:00.000-07:00"
                },
                "id": "954be10f7cd70080d6edf4826cc44206d265e24fb4f7723f",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd700a62f6192afcb3e39c0857711c6e50f26c9",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "quantityQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 60
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T13:17:00.000-06:00"
                                }
                            }
                        },
                        "text": "60 mg"
                    }
                ],
                "dateAsserted": "2019-01-20T19:17:07.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (FHIR Test Medication)"
                },
                "identifier": [
                    {
                        "value": "24942143",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:53.978Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (FHIR Test Medication)</p><p><b>Dosage Instructions</b>: 60 mg</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T13:17:00.000-06:00"
                },
                "id": "954be10f7cd700a62f6192afcb3e39c0857711c6e50f26c9",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd700bd64a4c84146bb7441211106338f3317ba",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "quantityQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 60
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T17:58:00.000-06:00"
                                }
                            }
                        },
                        "text": "60 mg"
                    }
                ],
                "dateAsserted": "2019-01-20T23:58:09.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (FHIR Test Medication)"
                },
                "identifier": [
                    {
                        "value": "24942999",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:09.711Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (FHIR Test Medication)</p><p><b>Dosage Instructions</b>: 60 mg</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T17:58:00.000-06:00"
                },
                "id": "954be10f7cd700bd64a4c84146bb7441211106338f3317ba",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd70102577278341bc266868585deb560cf6c49",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T18:00:00.000-06:00"
                                }
                            }
                        }
                    }
                ],
                "dateAsserted": "2019-01-21T00:00:53.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (Acetaminophen and Diphenhydramine HCl (OTC))"
                },
                "identifier": [
                    {
                        "value": "24943179",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:12.886Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (Acetaminophen and Diphenhydramine HCl (OTC))</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T18:00:00.000-06:00"
                },
                "id": "954be10f7cd70102577278341bc266868585deb560cf6c49",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd701130d6d2c2dd210fd41db52363f7b35f3f8",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "quantityQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 60
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T17:44:00.000-06:00"
                                }
                            }
                        },
                        "text": "60 mg"
                    }
                ],
                "dateAsserted": "2019-01-20T23:44:23.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (FHIR Test Medication)"
                },
                "identifier": [
                    {
                        "value": "24942725",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:02.402Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (FHIR Test Medication)</p><p><b>Dosage Instructions</b>: 60 mg</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T17:44:00.000-06:00"
                },
                "id": "954be10f7cd701130d6d2c2dd210fd41db52363f7b35f3f8",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd70381707be44e07954edaa7c990117cd752b5",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2017-07-28T08:21:00.000-07:00"
                                }
                            }
                        }
                    }
                ],
                "dateAsserted": "2017-07-28T15:21:36.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (Aspirin)"
                },
                "identifier": [
                    {
                        "value": "22590253",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:40.850Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (Aspirin)</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2017-07-28T08:21:00.000-07:00"
                },
                "id": "954be10f7cd70381707be44e07954edaa7c990117cd752b5",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd703ae0cbc40cc2c91718fd6497aec720d81d8",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T18:14:00.000-06:00"
                                }
                            }
                        }
                    }
                ],
                "dateAsserted": "2019-01-21T00:14:30.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (Acetaminophen and Diphenhydramine HCl (OTC))"
                },
                "identifier": [
                    {
                        "value": "24943783",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:23.833Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (Acetaminophen and Diphenhydramine HCl (OTC))</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T18:14:00.000-06:00"
                },
                "id": "954be10f7cd703ae0cbc40cc2c91718fd6497aec720d81d8",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd704f825d3c73f30f6f499e445973f01424422",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dosage": [
                    {
                        "quantityQuantity": {
                            "unit": "mg",
                            "system": "http://unitsofmeasure.org",
                            "code": "mg",
                            "value": 60
                        },
                        "timing": {
                            "repeat": {
                                "boundsPeriod": {
                                    "start": "2019-01-20T18:07:00.000-06:00"
                                }
                            }
                        },
                        "text": "60 mg"
                    }
                ],
                "dateAsserted": "2019-01-21T00:07:15.000Z",
                "medicationCodeableConcept": {
                    "text": "Misc Prescription (FHIR Test Medication)"
                },
                "identifier": [
                    {
                        "value": "24943359",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:18.236Z",
                    "versionId": "9000000000002"
                },
                "status": "active",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Medication Name</b>: Misc Prescription (FHIR Test Medication)</p><p><b>Dosage Instructions</b>: 60 mg</p><p><b>Status</b>: Active</p><p><b>Taken</b>: Yes</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "extension": [
                    {
                        "valueCodeableConcept": {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/medication-statement-category",
                                    "code": "patientspecified",
                                    "display": "Patient Specified"
                                }
                            ],
                            "text": "Patient Specified"
                        },
                        "url": "https://api.1up.health/fhir/dstu2/StructureDefinition/954be10f7cd795f196cb6a0c71abbe105dfbd5d982c77e43"
                    }
                ],
                "effectivePeriod": {
                    "start": "2019-01-20T18:07:00.000-06:00"
                },
                "id": "954be10f7cd704f825d3c73f30f6f499e445973f01424422",
                "wasNotTaken": false
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/MedicationStatement/954be10f7cd7057031fd2288aceeb817737e6cd1cc857fc6",
            "search": {
                "mode": "match"
            },
            "resource": {
                "dateAsserted": "2017-06-22T11:53:35.000Z",
                "medicationCodeableConcept": {
                    "text": "Entered In Error"
                },
                "identifier": [
                    {
                        "value": "22510301",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:32:49.513Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Medication Statement</b></p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Status</b>: Entered in Error</p></div>",
                    "status": "generated"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "MedicationStatement",
                "id": "954be10f7cd7057031fd2288aceeb817737e6cd1cc857fc6"
            }
        }
    ],
    "link": [
        {
            "relation": "self",
            "url": "https://api.1up.health/fhir/dstu2/MedicationStatement"
        },
        {
            "relation": "next",
            "url": "https://api.1up.health/fhir/dstu2/MedicationStatement?_afterid=954be10f7cd7057031fd2288aceeb817737e6cd1cc857fc6"
        }
    ]
}
```