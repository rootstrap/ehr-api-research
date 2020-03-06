**Endpoint:**

### https://api.1up.health/fhir/dstu2/Immunization

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 23,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd701bc88c79ae0eb373f7991da90afcbba5a42",
            "search": {
                "mode": "match"
            },
            "resource": {
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457736",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:30.172Z",
                    "versionId": "9000000000002"
                },
                "status": "entered-in-error",
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Entered in Error</p><p><b>Vaccine</b>: Entered In Error</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "text": "Entered In Error"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "resourceType": "Immunization",
                "wasNotGiven": false,
                "id": "954be10f7cd701bc88c79ae0eb373f7991da90afcbba5a42"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd7037b482e67c26355a74f50f911703b5c524a",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "435352",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457659",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.341Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "61396006",
                            "userSelected": false,
                            "display": "Structure of left thigh (body structure)"
                        }
                    ],
                    "text": "Left Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-04-19T17:09:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd7037b482e67c26355a74f50f911703b5c524a",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: poliovirus vaccine, inactivated</p><p><b>Date</b>: Apr 19, 2012  5:09 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Left Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "10",
                            "userSelected": false,
                            "display": "IPV"
                        }
                    ],
                    "text": "poliovirus vaccine, inactivated"
                },
                "manufacturer": {
                    "display": "Arzol Chemical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd70c5318169c017a5bc39a80251e4d356cbf7d",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "4857584",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457695",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.356Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "6921000",
                            "userSelected": false,
                            "display": "Right upper extremity structure (body structure)"
                        }
                    ],
                    "text": "Right Arm"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-08-17T17:18:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd70c5318169c017a5bc39a80251e4d356cbf7d",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: pneumococcal 7-valent vaccine</p><p><b>Date</b>: Aug 17, 2012  5:18 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Arm</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "100",
                            "userSelected": false,
                            "display": "pneumococcal conjugate PCV 7"
                        }
                    ],
                    "text": "pneumococcal 7-valent vaccine"
                },
                "manufacturer": {
                    "display": "Arzol Chemical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd70cfe1ac506a82d0e2ba02a3e57aa14ba9cd1",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "35g564",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457675",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.369Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "61396006",
                            "userSelected": false,
                            "display": "Structure of left thigh (body structure)"
                        }
                    ],
                    "text": "Left Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-06-18T17:14:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd70cfe1ac506a82d0e2ba02a3e57aa14ba9cd1",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: haemophilus b conjugate (PRP-T) vaccine</p><p><b>Date</b>: Jun 18, 2012  5:14 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Left Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "48",
                            "userSelected": false,
                            "display": "Hib (PRP-T)"
                        }
                    ],
                    "text": "haemophilus b conjugate (PRP-T) vaccine"
                },
                "manufacturer": {
                    "display": "Berlex Laboratories"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd70e3ecba2531fdec83ce65a749d8353e6da5b",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "35g564",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457691",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.287Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "61396006",
                            "userSelected": false,
                            "display": "Structure of left thigh (body structure)"
                        }
                    ],
                    "text": "Left Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-08-17T17:17:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd70e3ecba2531fdec83ce65a749d8353e6da5b",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: haemophilus b conjugate (PRP-T) vaccine</p><p><b>Date</b>: Aug 17, 2012  5:17 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Left Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "48",
                            "userSelected": false,
                            "display": "Hib (PRP-T)"
                        }
                    ],
                    "text": "haemophilus b conjugate (PRP-T) vaccine"
                },
                "manufacturer": {
                    "display": "Berlex Laboratories"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd715e6279fe5e46ad7feb0cd86eb864afeb924",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "4857584",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457679",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.277Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "6921000",
                            "userSelected": false,
                            "display": "Right upper extremity structure (body structure)"
                        }
                    ],
                    "text": "Right Arm"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-06-18T17:15:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd715e6279fe5e46ad7feb0cd86eb864afeb924",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: pneumococcal 7-valent vaccine</p><p><b>Date</b>: Jun 18, 2012  5:15 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Arm</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "100",
                            "userSelected": false,
                            "display": "pneumococcal conjugate PCV 7"
                        }
                    ],
                    "text": "pneumococcal 7-valent vaccine"
                },
                "manufacturer": {
                    "display": "Arzol Chemical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd718a59171d8edcbaf951646199a046eb1a24f",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "45423245",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457671",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.375Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "11207009",
                            "userSelected": false,
                            "display": "Structure of right thigh (body structure)"
                        }
                    ],
                    "text": "Right Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-06-18T17:13:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd718a59171d8edcbaf951646199a046eb1a24f",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: hepatitis B vaccine</p><p><b>Date</b>: Jun 18, 2012  5:13 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "43",
                            "userSelected": false,
                            "display": "Hep B, adult"
                        }
                    ],
                    "text": "hepatitis B vaccine"
                },
                "manufacturer": {
                    "display": "Astellas Pharma US, Inc"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd730ccc84fce7ed53e3b4f0767863bd20bd723",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "45345",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457687",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.431Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "11207009",
                            "userSelected": false,
                            "display": "Structure of right thigh (body structure)"
                        }
                    ],
                    "text": "Right Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-08-17T17:17:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd730ccc84fce7ed53e3b4f0767863bd20bd723",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: diphtheria/pertussis, acel/tetanus ped</p><p><b>Date</b>: Aug 17, 2012  5:17 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "20",
                            "userSelected": false,
                            "display": "DTaP"
                        }
                    ],
                    "text": "diphtheria/pertussis, acel/tetanus ped"
                },
                "manufacturer": {
                    "display": "B. Braun Medical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd73141e5d2214b7369cb0b1927fcd0c1995807",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "45345",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457667",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:31.500Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "11207009",
                            "userSelected": false,
                            "display": "Structure of right thigh (body structure)"
                        }
                    ],
                    "text": "Right Thigh"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2012-06-18T17:12:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 2
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd73141e5d2214b7369cb0b1927fcd0c1995807",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: diphtheria/pertussis, acel/tetanus ped</p><p><b>Date</b>: Jun 18, 2012  5:12 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Thigh</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "20",
                            "userSelected": false,
                            "display": "DTaP"
                        }
                    ],
                    "text": "diphtheria/pertussis, acel/tetanus ped"
                },
                "manufacturer": {
                    "display": "B. Braun Medical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/Immunization/954be10f7cd73276d2f2efc4bfaa54b59bf81fdc399a3fa8",
            "search": {
                "mode": "match"
            },
            "resource": {
                "expirationDate": "2016-06-27",
                "lotNumber": "3523523",
                "reported": false,
                "identifier": [
                    {
                        "value": "M6457711",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "route": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "78421000",
                            "userSelected": false,
                            "display": "Intramuscular route (qualifier value)"
                        }
                    ],
                    "text": "IM"
                },
                "meta": {
                    "lastUpdated": "2020-03-06T15:31:30.167Z",
                    "versionId": "9000000000002"
                },
                "status": "completed",
                "site": {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "6921000",
                            "userSelected": false,
                            "display": "Right upper extremity structure (body structure)"
                        }
                    ],
                    "text": "Right Arm"
                },
                "patient": {
                    "reference": "Patient/954be10f7cd7"
                },
                "date": "2013-02-18T18:21:00.000Z",
                "doseQuantity": {
                    "unit": "mL",
                    "system": "http://unitsofmeasure.org",
                    "code": "mL",
                    "value": 0.5
                },
                "performer": {
                    "reference": "Practitioner/0374042fec3f",
                    "display": "McCurdy, Michael"
                },
                "wasNotGiven": false,
                "id": "954be10f7cd73276d2f2efc4bfaa54b59bf81fdc399a3fa8",
                "location": {
                    "reference": "Location/d5348c3b2852",
                    "display": "Medical Pavilion"
                },
                "text": {
                    "div": "<div><p><b>Immunization</b></p><p><b>Status</b>: Completed</p><p><b>Vaccine</b>: varicella virus vaccine</p><p><b>Date</b>: Feb 18, 2013  6:21 P.M. UTC</p><p><b>Patient Name</b>: SMART, Timmy</p><p><b>Given</b>: Yes</p><p><b>Administered by</b>: McCurdy, Michael</p><p><b>Site</b>: Right Arm</p><p><b>Route</b>: IM</p><p><b>Reported</b>: No</p></div>",
                    "status": "generated"
                },
                "vaccineCode": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/sid/cvx",
                            "code": "21",
                            "userSelected": false,
                            "display": "varicella"
                        }
                    ],
                    "text": "varicella virus vaccine"
                },
                "manufacturer": {
                    "display": "B. Braun Medical"
                },
                "encounter": {
                    "reference": "Encounter/954be10f7cd79dbcd0d8292a8caacae9f89e68114c15f15b"
                },
                "resourceType": "Immunization"
            }
        }
    ],
    "link": [
        {
            "relation": "self",
            "url": "https://api.1up.health/fhir/dstu2/Immunization"
        },
        {
            "relation": "next",
            "url": "https://api.1up.health/fhir/dstu2/Immunization?_afterid=954be10f7cd73276d2f2efc4bfaa54b59bf81fdc399a3fa8"
        }
    ]
}
```