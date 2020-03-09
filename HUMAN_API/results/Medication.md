**Endpoint:**

### https://api.humanapi.co/v1/human/medical/medications

**Response:**

```json
[
    {
        "id": "5e6674585ee4bf8389a2f52e",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:40.850Z",
        "createdAt": "2020-03-09T16:52:40.850Z",
        "instructions": "Take 2 tablets by mouth every 8 hours for 10 days.",
        "patient": {
            "name": ""
        },
        "name": "acetaminophen 500 mg tablet",
        "productName": "acetaminophen 500 mg tablet",
        "dosageInfo": "1000 mg",
        "refillsTotal": "30",
        "details": {
            "frequency": {
                "number": "3.0",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "500",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "2"
            }
        },
        "codes": [
            {
                "name": "acetaminophen 500 mg tablet",
                "code": "198440",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Acetaminophen 500 Mg Po Tabs",
                "code": "0440-7011-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Acetaminophen 500 Mg Po Tabs",
                "code": "284",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Acetaminophen 500 Mg Po Tabs",
                "code": "64200010000315",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Acetaminophen 500 Mg Po Tabs",
                "code": "284",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2019-12-08T03:59:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e6674595ee4bf6b38a2f537",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:41.052Z",
        "createdAt": "2020-03-09T16:52:41.052Z",
        "instructions": "Take 1 tablet by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "aspirin 325 MG EC tablet",
        "productName": "aspirin 325 MG EC tablet",
        "dosageInfo": "325 mg",
        "refillsTotal": "90",
        "details": {
            "frequency": {
                "number": "2.0",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "325",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "aspirin 325 MG EC tablet",
                "code": "198467",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Aspirin 325 Mg Po Tbec",
                "code": "68084-848-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Aspirin 325 Mg Po Tbec",
                "code": "1931",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Aspirin 325 Mg Po Tbec",
                "code": "64100010000605",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Aspirin 325 Mg Po Tbec",
                "code": "1931",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e6674595ee4bf11cba2f53b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:41.754Z",
        "createdAt": "2020-03-09T16:52:41.754Z",
        "instructions": "Take 1 capsule by mouth 2 times a day.",
        "patient": {
            "name": ""
        },
        "name": "celecoxib 200 MG capsule",
        "productName": "celecoxib 200 MG capsule",
        "dosageInfo": "200 mg",
        "refillsTotal": "84",
        "details": {
            "frequency": {
                "number": "2",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "200",
                "unit": "mg"
            },
            "dosage": {
                "form": "capsule",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "celecoxib 200 MG capsule",
                "code": "205323",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Celecoxib 200 Mg Po Caps",
                "code": "0093-7166-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Celecoxib 200 Mg Po Caps",
                "code": "58752",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Celecoxib 200 Mg Po Caps",
                "code": "66100525000130",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Celecoxib 200 Mg Po Caps",
                "code": "58752",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e6674595ee4bfadbba2f542",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:41.950Z",
        "createdAt": "2020-03-09T16:52:41.950Z",
        "instructions": "Take 1 capsule by mouth 2 times a day.",
        "patient": {
            "name": ""
        },
        "name": "docusate sodium 100 MG PO CAPS",
        "productName": "docusate sodium 100 MG PO CAPS",
        "dosageInfo": "100 mg",
        "refillsTotal": "90",
        "details": {
            "frequency": {
                "number": "2",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "100",
                "unit": "mg"
            },
            "dosage": {
                "form": "capsule",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "docusate sodium 100 MG PO CAPS",
                "code": "1115005",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Dss 100 Mg Po Caps",
                "code": "43292-55603",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Dss 100 Mg Po Caps",
                "code": "5712",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Dss 100 Mg Po Caps",
                "code": "46500010300110",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Dss 100 Mg Po Caps",
                "code": "5712",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745a5ee4bf0733a2f551",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:42.447Z",
        "createdAt": "2020-03-09T16:52:42.447Z",
        "instructions": "Take 1 capsule by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "gabapentin 300 MG capsule",
        "productName": "gabapentin 300 MG capsule",
        "dosageInfo": "300 mg",
        "refillsTotal": "28",
        "details": {
            "frequency": {
                "number": "2.0",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "300",
                "unit": "mg"
            },
            "dosage": {
                "form": "capsule",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "gabapentin 300 MG capsule",
                "code": "310431",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Gabapentin 300 Mg Po Caps",
                "code": "59762-5027-1",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Gabapentin 300 Mg Po Caps",
                "code": "46442",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Gabapentin 300 Mg Po Caps",
                "code": "72600030000130",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Gabapentin 300 Mg Po Caps",
                "code": "46442",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745a5ee4bf8507a2f557",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:42.557Z",
        "createdAt": "2020-03-09T16:52:42.557Z",
        "instructions": "Take 1 capsule by mouth daily before breakfast.",
        "patient": {
            "name": ""
        },
        "name": "lansoprazole 30 mg DR capsule",
        "productName": "lansoprazole 30 mg DR capsule",
        "dosageInfo": "30 mg",
        "refillsTotal": "30",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "breakfast"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "30",
                "unit": "mg"
            },
            "dosage": {
                "form": "capsule",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "lansoprazole 30 mg DR capsule",
                "code": "311277",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Lansoprazole 30 Mg Po Cpdr",
                "code": "0093-7351-56",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Lansoprazole 30 Mg Po Cpdr",
                "code": "64690",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Lansoprazole 30 Mg Po Cpdr",
                "code": "49270040006520",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Lansoprazole 30 Mg Po Cpdr",
                "code": "64690",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745a5ee4bff8a0a2f55e",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:43.048Z",
        "createdAt": "2020-03-09T16:52:43.048Z",
        "instructions": "Take 1 tablet by mouth every 4 hours as needed (prn pain).",
        "patient": {
            "name": ""
        },
        "name": "oxyCODONE 10 MG immediate release tablet",
        "productName": "oxyCODONE 10 MG immediate release tablet",
        "dosageInfo": "10 mg",
        "refillsTotal": "60",
        "details": {
            "route": "enteral_oral",
            "strength": {
                "number": "10",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "oxyCODONE 10 MG immediate release tablet",
                "code": "1049683",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Oxycodone Hcl 10 Mg Po Tabs",
                "code": "10702-056-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Oxycodone Hcl 10 Mg Po Tabs",
                "code": "29297",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Oxycodone Hcl 10 Mg Po Tabs",
                "code": "65100075100320",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Oxycodone Hcl 10 Mg Po Tabs",
                "code": "29297",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745b5ee4bff6a1a2f563",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:43.156Z",
        "createdAt": "2020-03-09T16:52:43.156Z",
        "instructions": "Take 17 g by mouth daily. if constipated",
        "patient": {
            "name": ""
        },
        "name": "polyethylene glycol packet",
        "productName": "polyethylene glycol packet",
        "dosageInfo": "17 g",
        "refillsTotal": "14",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "17",
                "unit": "g"
            },
            "dosage": {
                "form": "packet"
            }
        },
        "codes": [
            {
                "name": "polyethylene glycol packet",
                "code": "876193",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Polyethylene Glycol 3350 Po Pack",
                "code": "0574-0412-07",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Polyethylene Glycol 3350 Po Pack",
                "code": "60525",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Polyethylene Glycol 3350 Po Pack",
                "code": "46600033003020",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Polyethylene Glycol 3350 Po Pack",
                "code": "60525",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745b5ee4bfe2e8a2f56b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:43.452Z",
        "createdAt": "2020-03-09T16:52:43.452Z",
        "instructions": "Take 2 tablets by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "senna 8.6 mg tablet",
        "productName": "senna 8.6 mg tablet",
        "dosageInfo": "17.2 mg",
        "refillsTotal": "2",
        "details": {
            "frequency": {
                "number": "2.0",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "8.6",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "2"
            }
        },
        "codes": [
            {
                "name": "senna 8.6 mg tablet",
                "code": "312935",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Senna 8.6 Mg Po Tabs",
                "code": "11917-02103",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Senna 8.6 Mg Po Tabs",
                "code": "46058",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Senna 8.6 Mg Po Tabs",
                "code": "46200060200303",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Senna 8.6 Mg Po Tabs",
                "code": "46058",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "endDate": "2020-02-13T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e66745c5ee4bf267fa2f58f",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:44.758Z",
        "createdAt": "2020-03-09T16:52:44.758Z",
        "instructions": "Take 2 tablets by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "Senna 8.6 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "2",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "8.6"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "2.0"
            }
        },
        "codes": [
            {
                "name": "sennosides, USP",
                "code": "9658",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "sennosides, USP",
                "code": "36387",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745c5ee4bf09a3a2f595",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:44.860Z",
        "createdAt": "2020-03-09T16:52:44.860Z",
        "instructions": "Take 17 g by mouth daily. If constipated",
        "patient": {
            "name": ""
        },
        "name": "Polyethylene Glycol 3350 Po Pack",
        "details": {
            "strength": {
                "unit": "g",
                "number": "17"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "POLYETHYLENE GLYCOL 3350",
                "code": "221147",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Polyethylene Glycols",
                "code": "8516",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Polyethylene Glycol 400",
                "code": "8514",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Polyethylenes",
                "code": "8519",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745d5ee4bf1f66a2f59c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:45.250Z",
        "createdAt": "2020-03-09T16:52:45.250Z",
        "instructions": "Take 1 tablet by mouth every 4 hours as needed (prn pain).",
        "patient": {
            "name": ""
        },
        "name": "Oxycodone Hcl 10 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "10"
            },
            "route": "enteral_oral"
        },
        "codes": [
            {
                "name": "Oxycodone Hydrochloride",
                "code": "82063",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Oxycodone",
                "code": "7804",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Hydrochloric Acid",
                "code": "5486",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745d5ee4bf837ca2f5a3",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:45.454Z",
        "createdAt": "2020-03-09T16:52:45.454Z",
        "instructions": "Take 1 capsule by mouth daily before breakfast.",
        "patient": {
            "name": ""
        },
        "name": "Lansoprazole 30 Mg Po Cpdr",
        "details": {
            "dosage": {
                "value": "1",
                "form": "capsule"
            },
            "strength": {
                "unit": "mg",
                "number": "30"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "lansoprazole",
                "code": "17128",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745d5ee4bf2582a2f5aa",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:45.656Z",
        "createdAt": "2020-03-09T16:52:45.656Z",
        "instructions": "Take 1 capsule by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "Gabapentin 300 Mg Po Caps",
        "details": {
            "dosage": {
                "value": "1",
                "form": "capsule"
            },
            "strength": {
                "unit": "mg",
                "number": "300"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "2.0"
            }
        },
        "codes": [
            {
                "name": "gabapentin",
                "code": "25480",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745d5ee4bf599ca2f5ae",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:45.853Z",
        "createdAt": "2020-03-09T16:52:45.853Z",
        "instructions": "Take 1 capsule by mouth 2 times a day.",
        "patient": {
            "name": ""
        },
        "name": "Dss 100 Mg Po Caps",
        "details": {
            "dosage": {
                "value": "1",
                "form": "capsule"
            },
            "strength": {
                "unit": "mg",
                "number": "100"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "2"
            }
        },
        "codes": [
            {
                "name": "DSS brand of docusate sodium",
                "code": "216347",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745e5ee4bf6dbea2f5b5",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:46.242Z",
        "createdAt": "2020-03-09T16:52:46.242Z",
        "instructions": "Take 1 capsule by mouth 2 times a day.",
        "patient": {
            "name": ""
        },
        "name": "Celecoxib 200 Mg Po Caps",
        "details": {
            "dosage": {
                "value": "1",
                "form": "capsule"
            },
            "strength": {
                "unit": "mg",
                "number": "200"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "2"
            }
        },
        "codes": [
            {
                "name": "celecoxib",
                "code": "140587",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745e5ee4bf36e6a2f5bb",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:46.351Z",
        "createdAt": "2020-03-09T16:52:46.351Z",
        "instructions": "Take 1 tablet by mouth every 12 hours.",
        "patient": {
            "name": ""
        },
        "name": "Aspirin 325 Mg Po Tbec",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "325"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "2.0"
            }
        },
        "codes": [
            {
                "name": "Aspirin",
                "code": "1191",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e66745e5ee4bfc67da2f5bf",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:46.544Z",
        "createdAt": "2020-03-09T16:52:46.544Z",
        "instructions": "Take 2 tablets by mouth every 8 hours for 10 days.",
        "patient": {
            "name": ""
        },
        "name": "Acetaminophen 500 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "2",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "500"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "3.0"
            }
        },
        "codes": [
            {
                "name": "Acetaminophen",
                "code": "161",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-11-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674555ee4bf2b0da2f4e7",
            "href": "/medical/ccds/5e6674555ee4bf2b0da2f4e7"
        }
    },
    {
        "id": "5e6674645ee4bf719aa2f66b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.440Z",
        "createdAt": "2020-03-09T16:52:52.440Z",
        "instructions": "Take 1 tablet by mouth daily before breakfast for 30 days.",
        "patient": {
            "name": ""
        },
        "name": "pantoprazole 40 mg EC tablet",
        "productName": "pantoprazole 40 mg EC tablet",
        "dosageInfo": "40 mg",
        "refillsTotal": "30",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "40"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "breakfast",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "pantoprazole 40 mg EC tablet",
                "code": "314200",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                "code": "0093-0012-98",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                "code": "61609",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                "code": "49270070100620",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                "code": "61609",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2019-02-27T00:00:00.000Z",
        "endDate": "2019-03-29T03:59:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf8c41a2f577",
            "href": "/medical/ccds/5e66745b5ee4bf8c41a2f577"
        }
    },
    {
        "id": "5e6674645ee4bf747da2f674",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.558Z",
        "createdAt": "2020-03-09T16:52:52.558Z",
        "instructions": "Take 1 tablet by mouth daily before breakfast for 30 days.",
        "patient": {
            "name": ""
        },
        "name": "Pantoprazole Sodium 40 Mg Po Tbec",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "40"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "breakfast",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "",
                "code": "253191",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "pantoprazole",
                "code": "40790",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Sodium",
                "code": "9853",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2019-02-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf8c41a2f577",
            "href": "/medical/ccds/5e66745b5ee4bf8c41a2f577"
        }
    },
    {
        "id": "5e6674575ee4bf1ad6a2f507",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:39.648Z",
        "createdAt": "2020-03-09T16:52:39.648Z",
        "instructions": "Take 420 g by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
        "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
        "dosageInfo": "420 g",
        "refillsTotal": "1",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "420",
                "unit": "g"
            }
        },
        "codes": [
            {
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "code": "801054",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                "code": "10572-400-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                "code": "87138",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                "code": "46992004302120",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                "code": "87138",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2018-09-09T00:00:00.000Z",
        "endDate": "2019-11-12T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    },
    {
        "id": "5e6674645ee4bf66c3a2f67d",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.851Z",
        "createdAt": "2020-03-09T16:52:52.851Z",
        "instructions": "Take 420 g by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
        "details": {
            "strength": {
                "unit": "g",
                "number": "420"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "POLYETHYLENE GLYCOL 3350",
                "code": "221147",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Propylene glycol",
                "code": "34693",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Polyethylene Glycols",
                "code": "8516",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Polyethylene Glycol 400",
                "code": "8514",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Sodium Bicarbonate",
                "code": "36676",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Sodium Chloride",
                "code": "9863",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2018-09-09T00:00:00.000Z",
        "endDate": "2019-11-12T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745c5ee4bfc2f6a2f58c",
            "href": "/medical/ccds/5e66745c5ee4bfc2f6a2f58c"
        }
    },
    {
        "id": "5e6674645ee4bf05a3a2f67f",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.944Z",
        "createdAt": "2020-03-09T16:52:52.944Z",
        "instructions": "Take 1 tablet by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "escitalopram (LEXAPRO) 5 MG tablet",
        "productName": "escitalopram (LEXAPRO) 5 MG tablet",
        "dosageInfo": "5 mg",
        "refillsTotal": "30",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "5"
            },
            "route": "enteral_oral"
        },
        "codes": [
            {
                "name": "escitalopram (LEXAPRO) 5 MG tablet",
                "code": "351249",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                "code": "0378-3855-77",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                "code": "78020",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                "code": "58160034100310",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                "code": "78020",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            },
            {
                "name": "Lexapro 5 Mg Po Tabs",
                "code": "404408",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Lexapro 5 Mg Po Tabs",
                "code": "0456-2005-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Lexapro 5 Mg Po Tabs",
                "code": "85552",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Lexapro 5 Mg Po Tabs",
                "code": "58160034100310",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Lexapro 5 Mg Po Tabs",
                "code": "85552",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-08-29T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf9fd0a2f5a0",
            "href": "/medical/ccds/5e66745d5ee4bf9fd0a2f5a0"
        }
    },
    {
        "id": "5e66745f5ee4bf8abba2f5d5",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:47.643Z",
        "createdAt": "2020-03-09T16:52:47.643Z",
        "instructions": "Take 1 capsule by mouth daily at bedtime as needed (sllep).",
        "patient": {
            "name": ""
        },
        "name": "temazepam 7.5 MG capsule",
        "productName": "temazepam 7.5 MG capsule",
        "dosageInfo": "7.5 mg",
        "refillsTotal": "7",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "as-needed"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "7.5",
                "unit": "mg"
            },
            "dosage": {
                "form": "capsule",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "temazepam 7.5 MG capsule",
                "code": "198243",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Temazepam 7.5 Mg Po Caps",
                "code": "0406-9960-01",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Temazepam 7.5 Mg Po Caps",
                "code": "31109",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Temazepam 7.5 Mg Po Caps",
                "code": "60201030000103",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Temazepam 7.5 Mg Po Caps",
                "code": "31109",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-08-27T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf9fd0a2f5a0",
            "href": "/medical/ccds/5e66745d5ee4bf9fd0a2f5a0"
        }
    },
    {
        "id": "5e6674605ee4bf4ffba2f5dd",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.253Z",
        "createdAt": "2020-03-09T16:52:48.253Z",
        "instructions": "Take 7 tablets by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 1 MG tablet",
        "productName": "predniSONE 1 MG tablet",
        "dosageInfo": "7 mg",
        "refillsTotal": "210",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "1",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "7"
            }
        },
        "codes": [
            {
                "name": "predniSONE 1 MG tablet",
                "code": "198144",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 1 Mg Po Tabs",
                "code": "0054-4741-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 1 Mg Po Tabs",
                "code": "17547",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 1 Mg Po Tabs",
                "code": "22100045000305",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 1 Mg Po Tabs",
                "code": "17547",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-08-27T00:00:00.000Z",
        "endDate": "2018-09-09T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745e5ee4bfad82a2f5b7",
            "href": "/medical/ccds/5e66745e5ee4bfad82a2f5b7"
        }
    },
    {
        "id": "5e6674605ee4bf0eb2a2f5e2",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.354Z",
        "createdAt": "2020-03-09T16:52:48.354Z",
        "instructions": "Take 1 tablet by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 10 MG tablet",
        "productName": "predniSONE 10 MG tablet",
        "dosageInfo": "10 mg",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "10",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "predniSONE 10 MG tablet",
                "code": "795858",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "0440-8166-30",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "22100045000320",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-08-27T00:00:00.000Z",
        "endDate": "2018-09-09T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745e5ee4bfad82a2f5b7",
            "href": "/medical/ccds/5e66745e5ee4bfad82a2f5b7"
        }
    },
    {
        "id": "5e6674605ee4bfb6c6a2f5e6",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.653Z",
        "createdAt": "2020-03-09T16:52:48.653Z",
        "instructions": "Take 1 tablet by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 10 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "10"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-08-27T00:00:00.000Z",
        "endDate": "2018-09-09T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674565ee4bf0dbea2f4fc",
            "href": "/medical/ccds/5e6674565ee4bf0dbea2f4fc"
        }
    },
    {
        "id": "5e6674605ee4bf6d07a2f5fa",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.840Z",
        "createdAt": "2020-03-09T16:52:48.840Z",
        "instructions": "Take 7 tablets by mouth daily.",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 1 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "7",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "1"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-08-27T00:00:00.000Z",
        "endDate": "2018-09-09T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674565ee4bf0dbea2f4fc",
            "href": "/medical/ccds/5e6674565ee4bf0dbea2f4fc"
        }
    },
    {
        "id": "5e66745f5ee4bf2351a2f5d1",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:47.445Z",
        "createdAt": "2020-03-09T16:52:47.445Z",
        "instructions": "Take 1 tablet by mouth once a week.",
        "patient": {
            "name": ""
        },
        "name": "alendronate (FOSAMAX) 70 MG tablet",
        "productName": "alendronate (FOSAMAX) 70 MG tablet",
        "dosageInfo": "70 mg",
        "refillsTotal": "4",
        "details": {
            "route": "enteral_oral",
            "strength": {
                "number": "70",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "code": "904431",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Alendronate Sodium 70 Mg Po Tabs",
                "code": "0093-5171-44",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Alendronate Sodium 70 Mg Po Tabs",
                "code": "68195",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Alendronate Sodium 70 Mg Po Tabs",
                "code": "30042010100370",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Alendronate Sodium 70 Mg Po Tabs",
                "code": "68195",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            },
            {
                "name": "Fosamax 70 Mg Po Tabs",
                "code": "904433",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Fosamax 70 Mg Po Tabs",
                "code": "0006-0031-44",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Fosamax 70 Mg Po Tabs",
                "code": "68246",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Fosamax 70 Mg Po Tabs",
                "code": "30042010100370",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Fosamax 70 Mg Po Tabs",
                "code": "68246",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-07-31T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf9fd0a2f5a0",
            "href": "/medical/ccds/5e66745d5ee4bf9fd0a2f5a0"
        }
    },
    {
        "id": "5e6674615ee4bf3a9ea2f606",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:49.339Z",
        "createdAt": "2020-03-09T16:52:49.339Z",
        "instructions": "Take 1 tablet by mouth once a week.",
        "patient": {
            "name": ""
        },
        "name": "Alendronate Sodium 70 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "70"
            },
            "route": "enteral_oral"
        },
        "codes": [
            {
                "name": "Alendronate Sodium",
                "code": "203152",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Alendronate",
                "code": "46041",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            },
            {
                "name": "Sodium",
                "code": "9853",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-07-31T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674575ee4bfb072a2f50f",
            "href": "/medical/ccds/5e6674575ee4bfb072a2f50f"
        }
    },
    {
        "id": "5e66745e5ee4bfb616a2f5c5",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:46.844Z",
        "createdAt": "2020-03-09T16:52:46.844Z",
        "instructions": "ONE TAB BY MOUTH DAILY",
        "patient": {
            "name": ""
        },
        "name": "folic acid 1 MG PO TABS",
        "productName": "folic acid 1 MG PO TABS",
        "refillsTotal": "30",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "1",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "1"
            }
        },
        "codes": [
            {
                "name": "folic acid 1 MG PO TABS",
                "code": "310410",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Folic Acid 1 Mg Po Tabs",
                "code": "0440-7545-30",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Folic Acid 1 Mg Po Tabs",
                "code": "8709",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Folic Acid 1 Mg Po Tabs",
                "code": "82200010000315",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Folic Acid 1 Mg Po Tabs",
                "code": "8709",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf9fd0a2f5a0",
            "href": "/medical/ccds/5e66745d5ee4bf9fd0a2f5a0"
        }
    },
    {
        "id": "5e6674615ee4bfe14ca2f615",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.148Z",
        "createdAt": "2020-03-09T16:52:50.148Z",
        "instructions": "5 pills daily",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 5 MG PO TABS",
        "productName": "predniSONE 5 MG PO TABS",
        "refillsTotal": "150",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "5",
                "unit": "mg"
            },
            "dosage": {
                "form": "pill",
                "value": "5"
            }
        },
        "codes": [
            {
                "name": "predniSONE 5 MG PO TABS",
                "code": "312617",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "0054-4728-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "17552",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "22100045000315",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "17552",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-06-19T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf05eba2f525",
            "href": "/medical/ccds/5e6674585ee4bf05eba2f525"
        }
    },
    {
        "id": "5e6674625ee4bf5440a2f61c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.252Z",
        "createdAt": "2020-03-09T16:52:50.252Z",
        "instructions": "3 pills weekly",
        "patient": {
            "name": ""
        },
        "name": "methotrexate 2.5 mg PO TABS",
        "productName": "methotrexate 2.5 mg PO TABS",
        "refillsTotal": "12",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "week"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "2.5",
                "unit": "mg"
            },
            "dosage": {
                "form": "pill",
                "value": "3"
            }
        },
        "codes": [
            {
                "name": "methotrexate 2.5 mg PO TABS",
                "code": "1541215",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Methotrexate 2.5 Mg Po Tabs",
                "code": "0054-4550-15",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Methotrexate 2.5 Mg Po Tabs",
                "code": "13368",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Methotrexate 2.5 Mg Po Tabs",
                "code": "21300050100310",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Methotrexate 2.5 Mg Po Tabs",
                "code": "13368",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-06-19T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf05eba2f525",
            "href": "/medical/ccds/5e6674585ee4bf05eba2f525"
        }
    },
    {
        "id": "5e6674625ee4bf9defa2f627",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.649Z",
        "createdAt": "2020-03-09T16:52:50.649Z",
        "instructions": "ONE TAB BY MOUTH DAILY",
        "patient": {
            "name": ""
        },
        "name": "Folic Acid 1 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "1",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "1"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Folic Acid",
                "code": "4511",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-09-05T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf05eba2f525",
            "href": "/medical/ccds/5e6674585ee4bf05eba2f525"
        }
    },
    {
        "id": "5e6674625ee4bf784ca2f62b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.947Z",
        "createdAt": "2020-03-09T16:52:50.947Z",
        "instructions": "3 pills weekly",
        "patient": {
            "name": ""
        },
        "name": "Methotrexate 2.5 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "3",
                "form": "pill"
            },
            "strength": {
                "unit": "mg",
                "number": "2.5"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "week",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Methotrexate",
                "code": "6851",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-06-19T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf05eba2f525",
            "href": "/medical/ccds/5e6674585ee4bf05eba2f525"
        }
    },
    {
        "id": "5e6674625ee4bf3740a2f630",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.042Z",
        "createdAt": "2020-03-09T16:52:51.042Z",
        "instructions": "5 pills daily",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 5 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "5",
                "form": "pill"
            },
            "strength": {
                "unit": "mg",
                "number": "5"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-03-27T00:00:00.000Z",
        "endDate": "2017-06-19T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf05eba2f525",
            "href": "/medical/ccds/5e6674585ee4bf05eba2f525"
        }
    },
    {
        "id": "5e6674625ee4bf6630a2f61f",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.461Z",
        "createdAt": "2020-03-09T16:52:50.461Z",
        "instructions": "5 tabs daily",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 10 MG PO TABS",
        "productName": "predniSONE 10 MG PO TABS",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "10",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet",
                "value": "5"
            }
        },
        "codes": [
            {
                "name": "predniSONE 10 MG PO TABS",
                "code": "834395",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "0440-8166-30",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "22100045000320",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-03-02T00:00:00.000Z",
        "endDate": "2017-03-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bfd18ca2f52c",
            "href": "/medical/ccds/5e6674585ee4bfd18ca2f52c"
        }
    },
    {
        "id": "5e6674635ee4bf29cda2f63f",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.359Z",
        "createdAt": "2020-03-09T16:52:51.359Z",
        "instructions": "5 tabs daily",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 10 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "5",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "10"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-03-02T00:00:00.000Z",
        "endDate": "2017-03-27T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bfd18ca2f52c",
            "href": "/medical/ccds/5e6674585ee4bfd18ca2f52c"
        }
    },
    {
        "id": "5e6674635ee4bf14e3a2f639",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.252Z",
        "createdAt": "2020-03-09T16:52:51.252Z",
        "instructions": "3 TABLETs  DAILY",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 10 MG PO TABS",
        "productName": "predniSONE 10 MG PO TABS",
        "details": {
            "dosage": {
                "value": "3",
                "form": "tablet"
            },
            "strength": {
                "unit": "mg",
                "number": "10"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "predniSONE 10 MG PO TABS",
                "code": "834395",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "0440-8166-30",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "22100045000320",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-02-16T00:00:00.000Z",
        "endDate": "2017-03-02T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bfd18ca2f52c",
            "href": "/medical/ccds/5e6674585ee4bfd18ca2f52c"
        }
    },
    {
        "id": "5e6674635ee4bf5a7ca2f635",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.152Z",
        "createdAt": "2020-03-09T16:52:51.152Z",
        "instructions": "three pills daily",
        "patient": {
            "name": ""
        },
        "name": "PredniSONE 2.5 MG PO TABS",
        "productName": "PredniSONE 2.5 MG PO TABS",
        "refillsTotal": "90",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "2.5",
                "unit": "mg"
            },
            "dosage": {
                "form": "pill",
                "value": "3"
            }
        },
        "codes": [
            {
                "name": "PredniSONE 2.5 MG PO TABS",
                "code": "198146",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "0054-4742-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "17549",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "22100045000310",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "17549",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2017-01-04T00:00:00.000Z",
        "endDate": "2017-03-02T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf395ba2f533",
            "href": "/medical/ccds/5e6674585ee4bf395ba2f533"
        }
    },
    {
        "id": "5e6674635ee4bf0d5aa2f656",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.749Z",
        "createdAt": "2020-03-09T16:52:51.749Z",
        "instructions": "three pills daily",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 2.5 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "3",
                "form": "pill"
            },
            "strength": {
                "unit": "mg",
                "number": "2.5"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2017-01-04T00:00:00.000Z",
        "endDate": "2017-03-02T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bf395ba2f533",
            "href": "/medical/ccds/5e6674585ee4bf395ba2f533"
        }
    },
    {
        "id": "5e6674635ee4bf1c19a2f647",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.651Z",
        "createdAt": "2020-03-09T16:52:51.651Z",
        "instructions": "3 pills daily",
        "patient": {
            "name": ""
        },
        "name": "PredniSONE 5 MG PO TABS",
        "productName": "PredniSONE 5 MG PO TABS",
        "refillsTotal": "90",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "5",
                "unit": "mg"
            },
            "dosage": {
                "form": "pill",
                "value": "3"
            }
        },
        "codes": [
            {
                "name": "PredniSONE 5 MG PO TABS",
                "code": "312617",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "0054-4728-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "17552",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "22100045000315",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 5 Mg Po Tabs",
                "code": "17552",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2016-11-16T00:00:00.000Z",
        "endDate": "2017-01-04T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674595ee4bf0351a2f539",
            "href": "/medical/ccds/5e6674595ee4bf0351a2f539"
        }
    },
    {
        "id": "5e6674635ee4bf35aaa2f65b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.855Z",
        "createdAt": "2020-03-09T16:52:51.855Z",
        "instructions": "3 pills daily",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 5 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "3",
                "form": "pill"
            },
            "strength": {
                "unit": "mg",
                "number": "5"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2016-11-16T00:00:00.000Z",
        "endDate": "2017-01-04T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674595ee4bf0351a2f539",
            "href": "/medical/ccds/5e6674595ee4bf0351a2f539"
        }
    },
    {
        "id": "5e6674635ee4bf0b26a2f65f",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.041Z",
        "createdAt": "2020-03-09T16:52:52.041Z",
        "instructions": "ONE TABLET BY MOUTH ONCE MONTHLY",
        "patient": {
            "name": ""
        },
        "name": "Ibandronate Sodium (BONIVA) 150 MG PO TABS",
        "codes": [],
        "startDate": "2016-10-12T00:00:00.000Z",
        "endDate": "2016-11-16T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674595ee4bf0351a2f539",
            "href": "/medical/ccds/5e6674595ee4bf0351a2f539"
        }
    },
    {
        "id": "5e6674645ee4bf7b0aa2f661",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.050Z",
        "createdAt": "2020-03-09T16:52:52.050Z",
        "instructions": "one pill three times a week",
        "patient": {
            "name": ""
        },
        "name": "Sulfamethoxazole-Trimethoprim (BACTRIM DS) 800-160 MG PO TABS",
        "codes": [],
        "startDate": "2016-10-12T00:00:00.000Z",
        "endDate": "2016-11-16T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674595ee4bf0351a2f539",
            "href": "/medical/ccds/5e6674595ee4bf0351a2f539"
        }
    },
    {
        "id": "5e6674635ee4bf779ba2f659",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.842Z",
        "createdAt": "2020-03-09T16:52:51.842Z",
        "instructions": "4 pills daily",
        "patient": {
            "name": ""
        },
        "name": "PredniSONE 10 MG PO TABS",
        "productName": "PredniSONE 10 MG PO TABS",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "day"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "10",
                "unit": "mg"
            },
            "dosage": {
                "form": "pill",
                "value": "4"
            }
        },
        "codes": [
            {
                "name": "PredniSONE 10 MG PO TABS",
                "code": "795858",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "0440-8166-30",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "22100045000320",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 10 Mg Po Tabs",
                "code": "17548",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "startDate": "2016-09-25T00:00:00.000Z",
        "endDate": "2016-11-16T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745e5ee4bf61b6a2f5bc",
            "href": "/medical/ccds/5e66745e5ee4bf61b6a2f5bc"
        }
    },
    {
        "id": "5e6674645ee4bf472ea2f668",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.249Z",
        "createdAt": "2020-03-09T16:52:52.249Z",
        "instructions": "4 pills daily",
        "patient": {
            "name": ""
        },
        "name": "Prednisone 10 Mg Po Tabs",
        "details": {
            "dosage": {
                "value": "4",
                "form": "pill"
            },
            "strength": {
                "unit": "mg",
                "number": "10"
            },
            "route": "enteral_oral",
            "frequency": {
                "unit": "day",
                "number": "1"
            }
        },
        "codes": [
            {
                "name": "Prednisone",
                "code": "8640",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": true
            }
        ],
        "startDate": "2016-09-25T00:00:00.000Z",
        "endDate": "2016-11-16T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf0f96a2f56a",
            "href": "/medical/ccds/5e66745b5ee4bf0f96a2f56a"
        }
    },
    {
        "id": "5e6674615ee4bf3c6da2f60b",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:49.545Z",
        "createdAt": "2020-03-09T16:52:49.545Z",
        "instructions": "1 gm vaginally ONE  times weekly",
        "patient": {
            "name": ""
        },
        "name": "Estradiol (ESTRACE) 0.1 MG/GM vaginal CREA",
        "codes": [],
        "startDate": "2016-01-01T10:00:00.000Z",
        "endDate": "2017-09-14T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674575ee4bf4b56a2f506",
            "href": "/medical/ccds/5e6674575ee4bf4b56a2f506"
        }
    },
    {
        "id": "5e6674525ee4bf7279a2f4d7",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:37.248Z",
        "createdAt": "2020-03-09T16:52:37.248Z",
        "instructions": "take as directed as needed",
        "patient": {
            "name": ""
        },
        "name": "ALBUTEROL IN",
        "productName": "ALBUTEROL IN",
        "codes": [
            {
                "name": "Albuterol In",
                "code": "0172-4390-18",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            }
        ],
        "endDate": "2019-11-12T00:00:00.000Z",
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745e5ee4bf61b6a2f5bc",
            "href": "/medical/ccds/5e66745e5ee4bf61b6a2f5bc"
        }
    },
    {
        "id": "5e6674555ee4bf5f2ea2f4e5",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:38.041Z",
        "createdAt": "2020-03-09T16:52:38.041Z",
        "instructions": "Take 2.5 mg by mouth daily. In the evening",
        "patient": {
            "name": ""
        },
        "name": "predniSONE 2.5 MG tablet",
        "productName": "predniSONE 2.5 MG tablet",
        "dosageInfo": "2.5 mg",
        "details": {
            "frequency": {
                "number": "1",
                "unit": "evening"
            },
            "route": "enteral_oral",
            "strength": {
                "number": "2.5",
                "unit": "mg"
            },
            "dosage": {
                "form": "tablet"
            }
        },
        "codes": [
            {
                "name": "predniSONE 2.5 MG tablet",
                "code": "198146",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RxNorm",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "0054-4742-25",
                "codeSystem": "2.16.840.1.113883.6.69",
                "codeSystemName": "NDC",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "17549",
                "codeSystem": "2.16.840.1.113883.6.253",
                "codeSystemName": "Medispan Drug Descriptor ID",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "22100045000310",
                "codeSystem": "2.16.840.1.113883.6.68",
                "codeSystemName": "Medi-Span Generic Product Identifier",
                "inferred": false
            },
            {
                "name": "Prednisone 2.5 Mg Po Tabs",
                "code": "17549",
                "codeSystem": "2.16.840.1.113883.6.162",
                "codeSystemName": "Med-File (Medi-Span)",
                "inferred": false
            }
        ],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        }
    }
]
```