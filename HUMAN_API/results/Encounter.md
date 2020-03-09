**Endpoint:**

### https://api.humanapi.co/v1/human/medical/encounters

**Response:**

```json
[
    {
        "id": "5e6674625ee4bf2691a2f628",
        "createdAt": "2020-03-09T16:52:50.753Z",
        "updatedAt": "2020-03-09T16:52:50.753Z",
        "dateTime": "2019-12-31T13:01:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99024",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Status post total hip replacement, left"
            }
        ],
        "medications": [
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth daily. With breakfast",
                "name": "predniSONE 5 mg tablet",
                "productName": "predniSONE 5 mg tablet",
                "dosageInfo": "5 mg",
                "codes": [
                    {
                        "name": "predniSONE 5 mg tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Inhale 2 puffs every 4 hours as needed.",
                "name": "Albuterol Sulfate 108 (90 BASE) MCG/ACT inhalation AEPB",
                "productName": "Albuterol Sulfate 108 (90 BASE) MCG/ACT inhalation AEPB",
                "dosageInfo": "2 {puff}",
                "codes": [
                    {
                        "name": "Albuterol Sulfate 108 (90 BASE) MCG/ACT inhalation AEPB",
                        "code": "1649560",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol Sulfate 108 (90 Base) McG/Act Inhalation Aepb",
                        "code": "188020",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Albuterol Sulfate 108 (90 Base) McG/Act Inhalation Aepb",
                        "code": "44201010108020",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Albuterol Sulfate 108 (90 Base) McG/Act Inhalation Aepb",
                        "code": "188020",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 50 mg by mouth every 6 hours as needed for moderate pain (4-6).",
                "name": "traMADol 50 MG tablet",
                "productName": "traMADol 50 MG tablet",
                "dosageInfo": "50 mg",
                "codes": [
                    {
                        "name": "traMADol 50 MG tablet",
                        "code": "835603",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Tramadol Hcl 50 Mg Po Tabs",
                        "code": "0093-0058-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Tramadol Hcl 50 Mg Po Tabs",
                        "code": "39326",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Tramadol Hcl 50 Mg Po Tabs",
                        "code": "65100095100320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Tramadol Hcl 50 Mg Po Tabs",
                        "code": "39326",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth every 12 hours.",
                "name": "aspirin 325 MG EC tablet",
                "productName": "aspirin 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth 2 times a day.",
                "name": "celecoxib 200 MG capsule",
                "productName": "celecoxib 200 MG capsule",
                "dosageInfo": "200 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "celecoxib 200 MG capsule",
                        "code": "205323",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "0093-7166-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "58752",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "66100525000130",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "58752",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth 2 times a day.",
                "name": "docusate sodium 100 MG PO CAPS",
                "productName": "docusate sodium 100 MG PO CAPS",
                "dosageInfo": "100 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "docusate sodium 100 MG PO CAPS",
                        "code": "1115005",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "43292-55603",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "5712",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "46500010300110",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "5712",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth every 12 hours.",
                "name": "gabapentin 300 MG capsule",
                "productName": "gabapentin 300 MG capsule",
                "dosageInfo": "300 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "gabapentin 300 MG capsule",
                        "code": "310431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "59762-5027-1",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "46442",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "72600030000130",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "46442",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth daily before breakfast.",
                "name": "lansoprazole 30 mg DR capsule",
                "productName": "lansoprazole 30 mg DR capsule",
                "dosageInfo": "30 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "lansoprazole 30 mg DR capsule",
                        "code": "311277",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "0093-7351-56",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "64690",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "49270040006520",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "64690",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth every 4 hours as needed (prn pain).",
                "name": "oxyCODONE 10 MG immediate release tablet",
                "productName": "oxyCODONE 10 MG immediate release tablet",
                "dosageInfo": "10 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "oxyCODONE 10 MG immediate release tablet",
                        "code": "1049683",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "10702-056-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "29297",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "65100075100320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "29297",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 17 g by mouth daily. If constipated",
                "name": "polyethylene glycol packet",
                "productName": "polyethylene glycol packet",
                "dosageInfo": "17 g",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol packet",
                        "code": "876193",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Polyethylene Glycol 3350 Po Pack",
                        "code": "0574-0412-07",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Polyethylene Glycol 3350 Po Pack",
                        "code": "60525",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Polyethylene Glycol 3350 Po Pack",
                        "code": "46600033003020",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Polyethylene Glycol 3350 Po Pack",
                        "code": "60525",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2 tablets by mouth every 12 hours.",
                "name": "senna 8.6 mg tablet",
                "productName": "senna 8.6 mg tablet",
                "dosageInfo": "17.2 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "senna 8.6 mg tablet",
                        "code": "312935",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Senna 8.6 Mg Po Tabs",
                        "code": "11917-02103",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Senna 8.6 Mg Po Tabs",
                        "code": "46058",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Senna 8.6 Mg Po Tabs",
                        "code": "46200060200303",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Senna 8.6 Mg Po Tabs",
                        "code": "46058",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Status post total hip replacement, left",
            "Post Op Surgical Follow Up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf590ca2f5a7",
            "href": "/medical/ccds/5e66745d5ee4bf590ca2f5a7"
        }
    },
    {
        "id": "5e6674525ee4bf775ba2f4d1",
        "createdAt": "2020-03-09T16:52:37.240Z",
        "updatedAt": "2020-03-09T16:52:37.240Z",
        "dateTime": "2019-11-26T09:06:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Hospital Encounter",
                "code": "IMP",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Hospital Encounter",
                "code": "3",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Hospital Encounter",
                "code": "3",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Primary osteoarthritis of left hip"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 81 mg by mouth.",
                "name": "aspirin 81 MG tablet",
                "productName": "aspirin 81 MG tablet",
                "dosageInfo": "81 mg",
                "endDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin 81 MG tablet",
                        "code": "243670",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 81 Mg Po Tabs",
                        "code": "43292-55805",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 81 Mg Po Tabs",
                        "code": "24939",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 81 Mg Po Tabs",
                        "code": "64100010000307",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 81 Mg Po Tabs",
                        "code": "24939",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth daily. With breakfast",
                "name": "predniSONE 5 mg tablet",
                "productName": "predniSONE 5 mg tablet",
                "dosageInfo": "5 mg",
                "codes": [
                    {
                        "name": "predniSONE 5 mg tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2 tablets by mouth every 8 hours for 10 days.",
                "name": "acetaminophen 500 mg tablet",
                "productName": "acetaminophen 500 mg tablet",
                "dosageInfo": "1000 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "endDate": "2019-12-08T03:59:00.000Z",
                "codes": [
                    {
                        "name": "acetaminophen 500 mg tablet",
                        "code": "198440",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Acetaminophen 500 Mg Po Tabs",
                        "code": "0440-7011-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Acetaminophen 500 Mg Po Tabs",
                        "code": "284",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Acetaminophen 500 Mg Po Tabs",
                        "code": "64200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Acetaminophen 500 Mg Po Tabs",
                        "code": "284",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth every 12 hours.",
                "name": "aspirin 325 MG EC tablet",
                "productName": "aspirin 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth 2 times a day.",
                "name": "celecoxib 200 MG capsule",
                "productName": "celecoxib 200 MG capsule",
                "dosageInfo": "200 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "celecoxib 200 MG capsule",
                        "code": "205323",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "0093-7166-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "58752",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "66100525000130",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Celecoxib 200 Mg Po Caps",
                        "code": "58752",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth 2 times a day.",
                "name": "docusate sodium 100 MG PO CAPS",
                "productName": "docusate sodium 100 MG PO CAPS",
                "dosageInfo": "100 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "docusate sodium 100 MG PO CAPS",
                        "code": "1115005",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "43292-55603",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "5712",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "46500010300110",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Dss 100 Mg Po Caps",
                        "code": "5712",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth every 12 hours.",
                "name": "gabapentin 300 MG capsule",
                "productName": "gabapentin 300 MG capsule",
                "dosageInfo": "300 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "gabapentin 300 MG capsule",
                        "code": "310431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "59762-5027-1",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "46442",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "72600030000130",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Gabapentin 300 Mg Po Caps",
                        "code": "46442",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth daily before breakfast.",
                "name": "lansoprazole 30 mg DR capsule",
                "productName": "lansoprazole 30 mg DR capsule",
                "dosageInfo": "30 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "lansoprazole 30 mg DR capsule",
                        "code": "311277",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "0093-7351-56",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "64690",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "49270040006520",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Lansoprazole 30 Mg Po Cpdr",
                        "code": "64690",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth every 4 hours as needed (prn pain).",
                "name": "oxyCODONE 10 MG immediate release tablet",
                "productName": "oxyCODONE 10 MG immediate release tablet",
                "dosageInfo": "10 mg",
                "startDate": "2019-11-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "oxyCODONE 10 MG immediate release tablet",
                        "code": "1049683",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "10702-056-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "29297",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "65100075100320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Oxycodone Hcl 10 Mg Po Tabs",
                        "code": "29297",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [
            {
                "name": "TOTAL HIP ARTHROPLASTY ACETABULAR AND PROXIMAL FEMUR PROSTHETIC AUTOGRAFT OR ALLOGRAFT",
                "codeType": "2.16.840.1.113883.6.12",
                "expectedDate": "2019-11-26T10:00:00.000Z",
                "procedureCode": "27130",
                "type": "Procedures",
                "codes": [
                    {
                        "name": "TOTAL HIP ARTHROPLASTY ACETABULAR AND PROXIMAL FEMUR PROSTHETIC AUTOGRAFT OR ALLOGRAFT",
                        "code": "27130",
                        "codeSystem": "2.16.840.1.113883.6.12",
                        "codeSystemName": "CPT-4"
                    }
                ]
            },
            {
                "name": "MODIFIER IMPLANT ZIMMER ML TAPERLOC",
                "expectedDate": "2019-11-26T10:00:00.000Z",
                "type": "Procedures",
                "codes": [
                    {
                        "name": "MODIFIER IMPLANT ZIMMER ML TAPERLOC"
                    }
                ]
            },
            {
                "name": "MODIFIER IMPLANT ZIMMER AVENIR HIP",
                "expectedDate": "2019-11-26T10:00:00.000Z",
                "type": "Procedures",
                "codes": [
                    {
                        "name": "MODIFIER IMPLANT ZIMMER AVENIR HIP"
                    }
                ]
            }
        ],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Primary osteoarthritis of left hip"
        ],
        "testResults": [],
        "visitType": "Hospital Encounter",
        "vitalSigns": [],
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
        "id": "5e6674565ee4bf06e6a2f4f3",
        "createdAt": "2020-03-09T16:52:38.746Z",
        "updatedAt": "2020-03-09T16:52:38.746Z",
        "dateTime": "2019-11-12T13:57:50.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99243",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Essential hypertension"
            },
            {
                "name": "Pre-operative cardiovascular examination"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth daily. With breakfast",
                "name": "predniSONE 5 mg tablet",
                "productName": "predniSONE 5 mg tablet",
                "dosageInfo": "5 mg",
                "codes": [
                    {
                        "name": "predniSONE 5 mg tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Vascular claudication",
            "Essential hypertension",
            "Pre-operative cardiovascular examination",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674565ee4bfc27ba2f4ed",
            "href": "/medical/ccds/5e6674565ee4bfc27ba2f4ed"
        }
    },
    {
        "id": "5e66745c5ee4bf37c2a2f590",
        "createdAt": "2020-03-09T16:52:44.759Z",
        "updatedAt": "2020-03-09T16:52:44.759Z",
        "dateTime": "2019-10-21T13:08:45.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99203",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Avascular necrosis of bone of left hip"
            },
            {
                "name": "Primary osteoarthritis of left hip"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth daily. With breakfast",
                "name": "predniSONE 5 mg tablet",
                "productName": "predniSONE 5 mg tablet",
                "dosageInfo": "5 mg",
                "codes": [
                    {
                        "name": "predniSONE 5 mg tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Avascular necrosis of bone of left hip",
            "Primary osteoarthritis of left hip",
            "New Patient"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674595ee4bf5df0a2f540",
            "href": "/medical/ccds/5e6674595ee4bf5df0a2f540"
        }
    },
    {
        "id": "5e66745f5ee4bf0b04a2f5d8",
        "createdAt": "2020-03-09T16:52:48.044Z",
        "updatedAt": "2020-03-09T16:52:48.044Z",
        "dateTime": "2019-02-27T00:00:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Refill",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Refill",
                "code": "107",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Refill",
                "code": "107",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily before breakfast for 30 days.",
                "name": "pantoprazole 40 mg EC tablet",
                "productName": "pantoprazole 40 mg EC tablet",
                "dosageInfo": "40 mg",
                "startDate": "2019-02-27T00:00:00.000Z",
                "endDate": "2019-03-29T03:59:00.000Z",
                "codes": [
                    {
                        "name": "pantoprazole 40 mg EC tablet",
                        "code": "314200",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                        "code": "0093-0012-98",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                        "code": "61609",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                        "code": "49270070100620",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Pantoprazole Sodium 40 Mg Po Tbec",
                        "code": "61609",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [],
        "testResults": [],
        "visitType": "Refill",
        "vitalSigns": [],
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
        "id": "5e6674605ee4bf5709a2f5e3",
        "createdAt": "2020-03-09T16:52:48.547Z",
        "updatedAt": "2020-03-09T16:52:48.547Z",
        "dateTime": "2018-11-30T14:03:56.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99214",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "RLQ abdominal pain"
            },
            {
                "name": "Long term current use of non-steroidal anti-inflammatories (NSAID)"
            },
            {
                "name": "Gastritis"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "RLQ abdominal pain",
            "Long term current use of non-steroidal anti-inflammatories (NSAID)",
            "Gastritis",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf1d56a2f57e",
            "href": "/medical/ccds/5e66745b5ee4bf1d56a2f57e"
        }
    },
    {
        "id": "5e6674605ee4bf543ca2f5fb",
        "createdAt": "2020-03-09T16:52:48.762Z",
        "updatedAt": "2020-03-09T16:52:48.762Z",
        "dateTime": "2018-09-11T17:12:31.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99396",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Encounter for routine gynecological examination"
            },
            {
                "name": "Encounter for breast cancer screening other than mammogram"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Encounter for routine gynecological examination",
            "Encounter for breast cancer screening other than mammogram",
            "Annual Visit"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745c5ee4bf7e69a2f585",
            "href": "/medical/ccds/5e66745c5ee4bf7e69a2f585"
        }
    },
    {
        "id": "5e6674605ee4bf83baa2f604",
        "createdAt": "2020-03-09T16:52:49.247Z",
        "updatedAt": "2020-03-09T16:52:49.247Z",
        "dateTime": "2018-09-09T18:51:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99204",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "RLQ abdominal pain"
            },
            {
                "name": "Long term current use of non-steroidal anti-inflammatories (NSAID)"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth. Pt. Takes 1.25 every other day",
                "name": "Escitalopram Oxalate (LEXAPRO PO)",
                "productName": "Escitalopram Oxalate (LEXAPRO PO)",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Escitalopram Oxalate (LEXAPRO PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro Po",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 420 g by mouth daily.",
                "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "productName": "polyethylene glycol-electrolytes 420 G PO SOLR",
                "dosageInfo": "420 g",
                "startDate": "2018-09-09T00:00:00.000Z",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "polyethylene glycol-electrolytes 420 G PO SOLR",
                        "code": "801054",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "10572-400-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "46992004302120",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Peg 3350-Kcl-Na Bicarb-Nacl 420 G Po Solr",
                        "code": "87138",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "RLQ abdominal pain",
            "Long term current use of non-steroidal anti-inflammatories (NSAID)",
            "New Patient",
            "Stomach Pain"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e6674615ee4bf038aa2f60e",
        "createdAt": "2020-03-09T16:52:49.647Z",
        "updatedAt": "2020-03-09T16:52:49.647Z",
        "dateTime": "2018-08-28T14:37:44.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99213",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "PMB (postmenopausal bleeding)"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "MELOXICAM PO",
                "productName": "MELOXICAM PO",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "MELOXICAM PO",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Meloxicam Po",
                        "code": "55289-272-60",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "PMB (postmenopausal bleeding)",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745c5ee4bf5662a2f592",
            "href": "/medical/ccds/5e66745c5ee4bf5662a2f592"
        }
    },
    {
        "id": "5e6674615ee4bf80c4a2f614",
        "createdAt": "2020-03-09T16:52:50.050Z",
        "updatedAt": "2020-03-09T16:52:50.050Z",
        "dateTime": "2018-05-17T13:02:06.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99213",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Low grade squamous intraepithelial lesion on cytologic smear of cervix (lgsil)"
            },
            {
                "name": "Pelvic pain in female"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Apply 1 application into the vagina 2 times a week.",
                "name": "estradiol (ESTRACE) 0.1 MG/GM vaginal cream",
                "productName": "estradiol (ESTRACE) 0.1 MG/GM vaginal cream",
                "dosageInfo": "1 {application}",
                "startDate": "2017-09-17T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "estradiol (ESTRACE) 0.1 MG/GM vaginal cream",
                        "code": "310169",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Estradiol 0.1 Mg/Gm Vaginal Crea",
                        "code": "27275",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Estradiol 0.1 Mg/Gm Vaginal Crea",
                        "code": "55350020003705",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Estradiol 0.1 Mg/Gm Vaginal Crea",
                        "code": "27275",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Estrace 0.1 Mg/Gm Vaginal Crea",
                        "code": "890918",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Estrace 0.1 Mg/Gm Vaginal Crea",
                        "code": "0430-3754-14",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Estrace 0.1 Mg/Gm Vaginal Crea",
                        "code": "7881",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Estrace 0.1 Mg/Gm Vaginal Crea",
                        "code": "55350020003705",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Estrace 0.1 Mg/Gm Vaginal Crea",
                        "code": "7881",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Low grade squamous intraepithelial lesion on cytologic smear of cervix (lgsil)",
            "Pelvic pain in female",
            "Repeat Pap"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745c5ee4bf9af0a2f599",
            "href": "/medical/ccds/5e66745c5ee4bf9af0a2f599"
        }
    },
    {
        "id": "5e6674635ee4bf39b1a2f63d",
        "createdAt": "2020-03-09T16:52:51.351Z",
        "updatedAt": "2020-03-09T16:52:51.351Z",
        "dateTime": "2017-09-20T22:00:54.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Procedure",
                "code": "1030G",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Procedure",
                "code": "32012",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Abnormal Pap smear of cervix"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "795858",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "795858",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            }
        ],
        "orders": [
            {
                "name": "COLPOSCOPY,BX CERVIX/ENDOCERV CURR",
                "codeType": "2.16.840.1.113883.6.12",
                "expectedDate": "2017-09-20T22:33:38.000Z",
                "procedureCode": "57454",
                "type": "Procedures",
                "codes": [
                    {
                        "name": "COLPOSCOPY,BX CERVIX/ENDOCERV CURR",
                        "code": "57454",
                        "codeSystem": "2.16.840.1.113883.6.12",
                        "codeSystemName": "CPT-4"
                    }
                ]
            }
        ],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Abnormal Pap smear of cervix",
            "Colposcopy"
        ],
        "testResults": [],
        "visitType": "Procedure",
        "vitalSigns": [],
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
        "id": "5e6674625ee4bf29a7a2f61e",
        "createdAt": "2020-03-09T16:52:50.356Z",
        "updatedAt": "2020-03-09T16:52:50.356Z",
        "dateTime": "2017-09-05T13:43:01.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99396",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Routine gynecological examination"
            },
            {
                "name": "Other screening mammogram"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth once a week.",
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "productName": "alendronate (FOSAMAX) 70 MG tablet",
                "dosageInfo": "70 mg",
                "startDate": "2017-07-31T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "alendronate (FOSAMAX) 70 MG tablet",
                        "code": "904431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "0093-5171-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "904433",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "0006-0031-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "escitalopram (LEXAPRO) 5 MG tablet",
                "productName": "escitalopram (LEXAPRO) 5 MG tablet",
                "dosageInfo": "5 mg",
                "startDate": "2017-08-29T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "escitalopram (LEXAPRO) 5 MG tablet",
                        "code": "351249",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                        "code": "0378-3855-77",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                        "code": "78020",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                        "code": "58160034100310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Escitalopram Oxalate 5 Mg Po Tabs",
                        "code": "78020",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Lexapro 5 Mg Po Tabs",
                        "code": "404408",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Lexapro 5 Mg Po Tabs",
                        "code": "0456-2005-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Lexapro 5 Mg Po Tabs",
                        "code": "85552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Lexapro 5 Mg Po Tabs",
                        "code": "58160034100310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Lexapro 5 Mg Po Tabs",
                        "code": "85552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "ALPRAZolam (XANAX PO)",
                "productName": "ALPRAZolam (XANAX PO)",
                "endDate": "2018-09-11T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALPRAZolam (XANAX PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Xanax Po",
                        "code": "0228-2027-10",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "Take  by mouth.",
                "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                "productName": "Omega-3 Fatty Acids (FISH OIL PO)",
                "endDate": "2019-10-21T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Omega-3 Fatty Acids (FISH OIL PO)",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fish Oil Po",
                        "code": "0904-5604-13",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Routine gynecological examination",
            "Other screening mammogram",
            "Annual Visit"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e6674575ee4bfef15a2f502",
        "createdAt": "2020-03-09T16:52:39.543Z",
        "updatedAt": "2020-03-09T16:52:39.543Z",
        "dateTime": "2017-08-27T17:13:12.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Compression fracture"
            },
            {
                "name": "IT band syndrome, left"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth once a week.",
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "productName": "alendronate (FOSAMAX) 70 MG tablet",
                "dosageInfo": "70 mg",
                "startDate": "2017-07-31T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "alendronate (FOSAMAX) 70 MG tablet",
                        "code": "904431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "0093-5171-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "904433",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "0006-0031-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 capsule by mouth daily at bedtime as needed (sllep).",
                "name": "temazepam 7.5 MG capsule",
                "productName": "temazepam 7.5 MG capsule",
                "dosageInfo": "7.5 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "temazepam 7.5 MG capsule",
                        "code": "198243",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Temazepam 7.5 Mg Po Caps",
                        "code": "0406-9960-01",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Temazepam 7.5 Mg Po Caps",
                        "code": "31109",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Temazepam 7.5 Mg Po Caps",
                        "code": "60201030000103",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Temazepam 7.5 Mg Po Caps",
                        "code": "31109",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 7 tablets by mouth daily.",
                "name": "predniSONE 1 MG tablet",
                "productName": "predniSONE 1 MG tablet",
                "dosageInfo": "7 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 1 MG tablet",
                        "code": "198144",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "0054-4741-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "22100045000305",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 1 Mg Po Tabs",
                        "code": "17547",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth daily.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "startDate": "2017-08-27T00:00:00.000Z",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Compression fracture",
            "IT band syndrome, left"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e6674585ee4bfff4ba2f51f",
        "createdAt": "2020-03-09T16:52:40.348Z",
        "updatedAt": "2020-03-09T16:52:40.348Z",
        "dateTime": "2017-08-24T01:25:16.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Emergency",
                "code": "EMER",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Hospital Encounter",
                "code": "3",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Hospital Encounter",
                "code": "3",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Chest pain"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 10 mg by mouth.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "endDate": "2017-08-20T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth once a week.",
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "productName": "alendronate (FOSAMAX) 70 MG tablet",
                "dosageInfo": "70 mg",
                "startDate": "2017-07-31T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "alendronate (FOSAMAX) 70 MG tablet",
                        "code": "904431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "0093-5171-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "904433",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "0006-0031-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Chest pain",
            "Chest Pain"
        ],
        "testResults": [],
        "visitType": "Emergency",
        "vitalSigns": [],
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
        "id": "5e6674575ee4bf49a9a2f510",
        "createdAt": "2020-03-09T16:52:39.946Z",
        "updatedAt": "2020-03-09T16:52:39.946Z",
        "dateTime": "2017-08-24T00:00:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Refill",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Refill",
                "code": "107",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Refill",
                "code": "107",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth once a week.",
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "productName": "alendronate (FOSAMAX) 70 MG tablet",
                "dosageInfo": "70 mg",
                "startDate": "2017-07-31T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "alendronate (FOSAMAX) 70 MG tablet",
                        "code": "904431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "0093-5171-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "904433",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "0006-0031-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 325 mg by mouth.",
                "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "productName": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                "dosageInfo": "325 mg",
                "endDate": "2018-11-30T00:00:00.000Z",
                "codes": [
                    {
                        "name": "aspirin (BAYER ASPIRIN) 325 MG EC tablet",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "68084-848-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Aspirin 325 Mg Po Tbec",
                        "code": "1931",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "198467",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "12843-53636",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "64100010000605",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Bayer Aspirin 325 Mg Po Tbec",
                        "code": "170736",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Refill Request"
        ],
        "testResults": [],
        "visitType": "Refill",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674575ee4bf68cca2f500",
            "href": "/medical/ccds/5e6674575ee4bf68cca2f500"
        }
    },
    {
        "id": "5e6674585ee4bf6b34a2f52a",
        "createdAt": "2020-03-09T16:52:40.743Z",
        "updatedAt": "2020-03-09T16:52:40.743Z",
        "dateTime": "2017-07-31T17:30:03.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Hoarseness of voice"
            },
            {
                "name": "Compression fracture"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 10 mg by mouth.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "endDate": "2017-08-20T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 1 tablet by mouth once a week.",
                "name": "alendronate (FOSAMAX) 70 MG tablet",
                "productName": "alendronate (FOSAMAX) 70 MG tablet",
                "dosageInfo": "70 mg",
                "startDate": "2017-07-31T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "alendronate (FOSAMAX) 70 MG tablet",
                        "code": "904431",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "0093-5171-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Alendronate Sodium 70 Mg Po Tabs",
                        "code": "68195",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "904433",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "0006-0031-44",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "30042010100370",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Fosamax 70 Mg Po Tabs",
                        "code": "68246",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Vascular claudication",
            "Encounter for long-term (current) use of steroids",
            "Hoarseness of voice",
            "Compression fracture"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e6674595ee4bf1891a2f53a",
        "createdAt": "2020-03-09T16:52:41.545Z",
        "updatedAt": "2020-03-09T16:52:41.545Z",
        "dateTime": "2017-06-19T17:33:11.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "IT band syndrome, left"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "4 TABLET DAILY",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "5 pills daily",
                "name": "predniSONE 5 MG PO TABS",
                "productName": "predniSONE 5 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG PO TABS",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 pills weekly",
                "name": "methotrexate 2.5 mg PO TABS",
                "productName": "methotrexate 2.5 mg PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "methotrexate 2.5 mg PO TABS",
                        "code": "1541215",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "0054-4550-15",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "21300050100310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 10 mg by mouth.",
                "name": "predniSONE 10 MG tablet",
                "productName": "predniSONE 10 MG tablet",
                "dosageInfo": "10 mg",
                "endDate": "2017-08-20T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG tablet",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 5 mg by mouth.",
                "name": "predniSONE 5 MG tablet",
                "productName": "predniSONE 5 MG tablet",
                "dosageInfo": "5 mg",
                "endDate": "2018-09-09T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG tablet",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "Take 2.5 mg by mouth daily. In the evening",
                "name": "predniSONE 2.5 MG tablet",
                "productName": "predniSONE 2.5 MG tablet",
                "dosageInfo": "2.5 mg",
                "codes": [
                    {
                        "name": "predniSONE 2.5 MG tablet",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Encounter for long-term (current) use of steroids",
            "Vascular claudication",
            "IT band syndrome, left",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674575ee4bf83e0a2f517",
            "href": "/medical/ccds/5e6674575ee4bf83e0a2f517"
        }
    },
    {
        "id": "5e66745a5ee4bf1894a2f54d",
        "createdAt": "2020-03-09T16:52:42.247Z",
        "updatedAt": "2020-03-09T16:52:42.247Z",
        "dateTime": "2017-05-08T17:26:27.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Joint stiffness"
            },
            {
                "name": "Headache(784.0)"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Hoarseness of voice"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "4 TABLET DAILY",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "5 pills daily",
                "name": "predniSONE 5 MG PO TABS",
                "productName": "predniSONE 5 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG PO TABS",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 pills weekly",
                "name": "methotrexate 2.5 mg PO TABS",
                "productName": "methotrexate 2.5 mg PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "methotrexate 2.5 mg PO TABS",
                        "code": "1541215",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "0054-4550-15",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "21300050100310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Joint stiffness",
            "Headache(784.0)",
            "Encounter for long-term (current) use of steroids",
            "Hoarseness of voice",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674585ee4bff577a2f51d",
            "href": "/medical/ccds/5e6674585ee4bff577a2f51d"
        }
    },
    {
        "id": "5e66745a5ee4bfec73a2f55b",
        "createdAt": "2020-03-09T16:52:42.944Z",
        "updatedAt": "2020-03-09T16:52:42.944Z",
        "dateTime": "2017-03-27T16:30:18.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Hoarseness of voice"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "5 tabs daily",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "startDate": "2017-03-02T00:00:00.000Z",
                "endDate": "2017-03-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 TABLET DAILY",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "5 pills daily",
                "name": "predniSONE 5 MG PO TABS",
                "productName": "predniSONE 5 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 5 MG PO TABS",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 pills weekly",
                "name": "methotrexate 2.5 mg PO TABS",
                "productName": "methotrexate 2.5 mg PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-06-19T00:00:00.000Z",
                "codes": [
                    {
                        "name": "methotrexate 2.5 mg PO TABS",
                        "code": "1541215",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "0054-4550-15",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "21300050100310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Methotrexate 2.5 Mg Po Tabs",
                        "code": "13368",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "ONE TAB BY MOUTH DAILY",
                "name": "folic acid 1 MG PO TABS",
                "productName": "folic acid 1 MG PO TABS",
                "startDate": "2017-03-27T00:00:00.000Z",
                "endDate": "2017-09-05T00:00:00.000Z",
                "codes": [
                    {
                        "name": "folic acid 1 MG PO TABS",
                        "code": "310410",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "0440-7545-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "82200010000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Folic Acid 1 Mg Po Tabs",
                        "code": "8709",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Vascular claudication",
            "Encounter for long-term (current) use of steroids",
            "Hoarseness of voice",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e66745b5ee4bf7be4a2f566",
        "createdAt": "2020-03-09T16:52:43.345Z",
        "updatedAt": "2020-03-09T16:52:43.345Z",
        "dateTime": "2017-03-02T16:22:26.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Headache(784.0)"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "three pills daily",
                "name": "PredniSONE 2.5 MG PO TABS",
                "productName": "PredniSONE 2.5 MG PO TABS",
                "startDate": "2017-01-04T00:00:00.000Z",
                "endDate": "2017-03-02T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 2.5 MG PO TABS",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 TABLETs  DAILY",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "startDate": "2017-02-16T00:00:00.000Z",
                "endDate": "2017-03-02T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "5 tabs daily",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "endDate": "2017-03-02T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "5 tabs daily",
                "name": "predniSONE 10 MG PO TABS",
                "productName": "predniSONE 10 MG PO TABS",
                "startDate": "2017-03-02T00:00:00.000Z",
                "endDate": "2017-03-27T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Vascular claudication",
            "Headache(784.0)",
            "Encounter for long-term (current) use of steroids",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e66745b5ee4bf739da2f573",
        "createdAt": "2020-03-09T16:52:43.749Z",
        "updatedAt": "2020-03-09T16:52:43.749Z",
        "dateTime": "2017-01-04T18:39:11.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Axillary artery thrombosis, left"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Vascular claudication"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 TABLETs  DAILY",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2017-02-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 pills daily",
                "name": "PredniSONE 5 MG PO TABS",
                "productName": "PredniSONE 5 MG PO TABS",
                "startDate": "2016-11-16T00:00:00.000Z",
                "endDate": "2017-01-04T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 5 MG PO TABS",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "three pills daily",
                "name": "PredniSONE 2.5 MG PO TABS",
                "productName": "PredniSONE 2.5 MG PO TABS",
                "startDate": "2017-01-04T00:00:00.000Z",
                "endDate": "2017-03-02T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 2.5 MG PO TABS",
                        "code": "198146",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "0054-4742-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "22100045000310",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 2.5 Mg Po Tabs",
                        "code": "17549",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Axillary artery thrombosis, left",
            "Encounter for long-term (current) use of steroids",
            "Vascular claudication",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e66745c5ee4bf0f46a2f583",
        "createdAt": "2020-03-09T16:52:44.346Z",
        "updatedAt": "2020-03-09T16:52:44.346Z",
        "dateTime": "2016-11-16T19:04:01.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            },
            {
                "name": "Murmur, cardiac"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "2 TABLETs  DAILY",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2017-02-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "3 pills daily",
                "name": "PredniSONE 5 MG PO TABS",
                "productName": "PredniSONE 5 MG PO TABS",
                "startDate": "2016-11-16T00:00:00.000Z",
                "endDate": "2017-01-04T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 5 MG PO TABS",
                        "code": "312617",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "0054-4728-25",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "22100045000315",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 5 Mg Po Tabs",
                        "code": "17552",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Vascular claudication",
            "Encounter for long-term (current) use of steroids",
            "Murmur, cardiac",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e66745d5ee4bf4853a2f59d",
        "createdAt": "2020-03-09T16:52:45.250Z",
        "updatedAt": "2020-03-09T16:52:45.250Z",
        "dateTime": "2016-10-12T18:53:34.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99215",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Axillary artery thrombosis, left"
            },
            {
                "name": "Murmur, cardiac"
            },
            {
                "name": "Encounter for long-term (current) use of steroids"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 tablets daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "1 TABLET DAILY",
                "name": "predniSONE 20 MG PO TABS",
                "productName": "predniSONE 20 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 20 MG PO TABS",
                        "code": "312615",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "0440-8167-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "17550",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "22100045000325",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "17550",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Axillary artery thrombosis, left",
            "Murmur, cardiac",
            "Encounter for long-term (current) use of steroids",
            "Follow up"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745a5ee4bf6853a2f54e",
            "href": "/medical/ccds/5e66745a5ee4bf6853a2f54e"
        }
    },
    {
        "id": "5e6674635ee4bf6f24a2f645",
        "createdAt": "2020-03-09T16:52:51.550Z",
        "updatedAt": "2020-03-09T16:52:51.550Z",
        "dateTime": "2016-10-06T00:00:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Surgery",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Surgery",
                "code": "51",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Surgery",
                "code": "51",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 tablets daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "795858",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "795858",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "1 TABLET DAILY",
                "name": "predniSONE 20 MG PO TABS",
                "productName": "predniSONE 20 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "predniSONE 20 MG PO TABS",
                        "code": "312615",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "0440-8167-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "17550",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "22100045000325",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 20 Mg Po Tabs",
                        "code": "17550",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [
            {
                "name": "LIGATION/BIOPSY TEMPORAL ARTERY",
                "codeType": "2.16.840.1.113883.6.12",
                "expectedDate": "2016-10-06T07:00:00.000Z",
                "procedureCode": "37609",
                "type": "Procedures",
                "codes": [
                    {
                        "name": "LIGATION/BIOPSY TEMPORAL ARTERY",
                        "code": "37609",
                        "codeSystem": "2.16.840.1.113883.6.12",
                        "codeSystemName": "CPT-4"
                    }
                ]
            }
        ],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [],
        "testResults": [],
        "visitType": "Surgery",
        "vitalSigns": [],
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
        "id": "5e66745d5ee4bf476fa2f5a9",
        "createdAt": "2020-03-09T16:52:45.656Z",
        "updatedAt": "2020-03-09T16:52:45.656Z",
        "dateTime": "2016-10-05T14:04:57.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99243",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Headache(784.0)"
            },
            {
                "name": "Elevated C-reactive protein (CRP)"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 tablets daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Headache(784.0)",
            "Elevated C-reactive protein (CRP)",
            "New Patient"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745a5ee4bf877da2f558",
            "href": "/medical/ccds/5e66745a5ee4bf877da2f558"
        }
    },
    {
        "id": "5e66745d5ee4bf750ba2f5b4",
        "createdAt": "2020-03-09T16:52:46.241Z",
        "updatedAt": "2020-03-09T16:52:46.241Z",
        "dateTime": "2016-10-01T13:42:21.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99203",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Headache(784.0)"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 tablets daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Headache(784.0)",
            "New Patient"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745a5ee4bfc205a2f55d",
            "href": "/medical/ccds/5e66745a5ee4bfc205a2f55d"
        }
    },
    {
        "id": "5e66745e5ee4bf5110a2f5be",
        "createdAt": "2020-03-09T16:52:46.448Z",
        "updatedAt": "2020-03-09T16:52:46.448Z",
        "dateTime": "2016-09-25T18:01:58.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf516aa2f564",
            "href": "/medical/ccds/5e66745b5ee4bf516aa2f564"
        }
    },
    {
        "id": "5e66745e5ee4bf75aaa2f5c4",
        "createdAt": "2020-03-09T16:52:46.842Z",
        "updatedAt": "2020-03-09T16:52:46.842Z",
        "dateTime": "2016-09-25T14:54:01.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99245",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Giant cell arteritis"
            },
            {
                "name": "Headache(784.0)"
            },
            {
                "name": "Vascular claudication"
            },
            {
                "name": "Joint stiffness"
            },
            {
                "name": "Murmur, cardiac"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "2 tablets daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "endDate": "2016-10-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            },
            {
                "instructions": "4 pills daily",
                "name": "PredniSONE 10 MG PO TABS",
                "productName": "PredniSONE 10 MG PO TABS",
                "startDate": "2016-09-25T00:00:00.000Z",
                "endDate": "2016-11-16T00:00:00.000Z",
                "codes": [
                    {
                        "name": "PredniSONE 10 MG PO TABS",
                        "code": "834395",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "0440-8166-30",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "22100045000320",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Prednisone 10 Mg Po Tabs",
                        "code": "17548",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Giant cell arteritis",
            "Headache(784.0)",
            "Vascular claudication",
            "Joint stiffness",
            "Murmur, cardiac",
            "New Patient"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
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
        "id": "5e66745f5ee4bfc5daa2f5cf",
        "createdAt": "2020-03-09T16:52:47.343Z",
        "updatedAt": "2020-03-09T16:52:47.343Z",
        "dateTime": "2016-01-01T14:28:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "99396",
                "codeSystem": "2.16.840.1.113883.6.12",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Ambulatory",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [
            {
                "name": "Routine gynecological examination"
            },
            {
                "name": "Other screening mammogram"
            }
        ],
        "medications": [
            {
                "instructions": "take as directed as needed",
                "name": "ALBUTEROL IN",
                "productName": "ALBUTEROL IN",
                "endDate": "2019-11-12T00:00:00.000Z",
                "codes": [
                    {
                        "name": "ALBUTEROL IN",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Albuterol In",
                        "code": "0172-4390-18",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    }
                ]
            },
            {
                "instructions": "None Entered",
                "name": "Ferrous Sulfate (IRON) 325 (65 FE) MG PO TABS",
                "productName": "Ferrous Sulfate (IRON) 325 (65 FE) MG PO TABS",
                "endDate": "2016-01-01T00:00:00.000Z",
                "codes": [
                    {
                        "name": "Ferrous Sulfate (IRON) 325 (65 FE) MG PO TABS",
                        "code": "310325",
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm"
                    },
                    {
                        "name": "Iron 325 (65 Fe) Mg Po Tabs",
                        "code": "74312-41383",
                        "codeSystem": "2.16.840.1.113883.6.69",
                        "codeSystemName": "NDC"
                    },
                    {
                        "name": "Iron 325 (65 Fe) Mg Po Tabs",
                        "code": "10902",
                        "codeSystem": "2.16.840.1.113883.6.253",
                        "codeSystemName": "Medispan Drug Descriptor ID"
                    },
                    {
                        "name": "Iron 325 (65 Fe) Mg Po Tabs",
                        "code": "82300010000332",
                        "codeSystem": "2.16.840.1.113883.6.68",
                        "codeSystemName": "Medi-Span Generic Product Identifier"
                    },
                    {
                        "name": "Iron 325 (65 Fe) Mg Po Tabs",
                        "code": "10902",
                        "codeSystem": "2.16.840.1.113883.6.162",
                        "codeSystemName": "Med-File (Medi-Span)"
                    }
                ]
            }
        ],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [
            "Routine gynecological examination",
            "Other screening mammogram",
            "Annual/pap"
        ],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf9f7fa2f571",
            "href": "/medical/ccds/5e66745b5ee4bf9f7fa2f571"
        }
    },
    {
        "id": "5e6674625ee4bf68dfa2f62f",
        "createdAt": "2020-03-09T16:52:51.041Z",
        "updatedAt": "2020-03-09T16:52:51.041Z",
        "dateTime": "2014-03-03T00:00:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf9b92a2f5ac",
            "href": "/medical/ccds/5e66745d5ee4bf9b92a2f5ac"
        }
    },
    {
        "id": "5e6674635ee4bfcde0a2f637",
        "createdAt": "2020-03-09T16:52:51.240Z",
        "updatedAt": "2020-03-09T16:52:51.240Z",
        "dateTime": "2012-11-07T00:00:00.000Z",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "codes": [
            {
                "name": "Office Visit",
                "code": "AMB",
                "codeSystem": "2.16.840.1.113883.5.4",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.4.698084.30",
                "codeSystemName": "Epic.EncounterType",
                "inferred": false
            },
            {
                "name": "Office Visit",
                "code": "101",
                "codeSystem": "1.2.840.114350.1.72.1.30",
                "inferred": false
            }
        ],
        "diagnoses": [],
        "medications": [],
        "orders": [],
        "patient": {
            "name": ""
        },
        "patientInstruction": "",
        "plansOfCare": [],
        "problems": [],
        "provider": {
            "name": "Susan Stethoscope",
            "departmentName": "Nocebo Medicine Department",
            "address": "4321 Main St., Othertown, CA, 98765"
        },
        "reasons": [],
        "testResults": [],
        "visitType": "Office Visit",
        "vitalSigns": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745d5ee4bf776ca2f5b0",
            "href": "/medical/ccds/5e66745d5ee4bf776ca2f5b0"
        }
    }
]
```