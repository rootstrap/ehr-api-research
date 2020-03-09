**Endpoint:**

### https://api.humanapi.co/v1/human/medical/vitals

**Response:**

```json
[
    {
        "id": "5e6674695ee4bff601a2f7a4",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:57.371Z",
        "createdAt": "2020-03-09T16:52:57.371Z",
        "dateTime": "2019-12-31T13:53:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 136,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "136",
                    "codes": []
                },
                "values": [
                    {
                        "value": 136,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 84,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "84",
                    "codes": []
                },
                "values": [
                    {
                        "value": 84,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 61,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "61",
                    "codes": []
                },
                "values": [
                    {
                        "value": 61,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.143,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.143",
                    "codes": []
                },
                "values": [
                    {
                        "value": 137,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.143,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.46,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.46",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.46,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e66745a5ee4bf59a6a2f545",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:42.250Z",
        "createdAt": "2020-03-09T16:52:42.250Z",
        "dateTime": "2019-11-26T09:55:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.143,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.143",
                    "codes": []
                },
                "values": [
                    {
                        "value": 137,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.143,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.46,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.46",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.46,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674605ee4bf5af7a2f5e8",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.653Z",
        "createdAt": "2020-03-09T16:52:48.653Z",
        "dateTime": "2019-11-12T14:00:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 136,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "136",
                    "codes": []
                },
                "values": [
                    {
                        "value": 136,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 84,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "84",
                    "codes": []
                },
                "values": [
                    {
                        "value": 84,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 61,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "61",
                    "codes": []
                },
                "values": [
                    {
                        "value": 61,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.052,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.052",
                    "codes": []
                },
                "values": [
                    {
                        "value": 136.8,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.052,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.43,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.43",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.43,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf4b5ea2f70e",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.471Z",
        "createdAt": "2020-03-09T16:52:55.471Z",
        "dateTime": "2019-10-21T13:25:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 61.236,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "61.236",
                    "codes": []
                },
                "values": [
                    {
                        "value": 135,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 61.236,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.14,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.14",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.14,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bf2830a2f758",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.382Z",
        "createdAt": "2020-03-09T16:52:56.382Z",
        "dateTime": "2018-11-30T14:27:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 114,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "114",
                    "codes": []
                },
                "values": [
                    {
                        "value": 114,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 71,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "71",
                    "codes": []
                },
                "values": [
                    {
                        "value": 71,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 65,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "65",
                    "codes": []
                },
                "values": [
                    {
                        "value": 65,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 61.462,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "61.462",
                    "codes": []
                },
                "values": [
                    {
                        "value": 135.5,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 61.462,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.22,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.22",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.22,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bf7d5aa2f766",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.540Z",
        "createdAt": "2020-03-09T16:52:56.540Z",
        "dateTime": "2018-09-11T17:30:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 120,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "120",
                    "codes": []
                },
                "values": [
                    {
                        "value": 120,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 80,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "80",
                    "codes": []
                },
                "values": [
                    {
                        "value": 80,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.596,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.596",
                    "codes": []
                },
                "values": [
                    {
                        "value": 138,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.596,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.61,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.61",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.61,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bfea67a2f772",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.752Z",
        "createdAt": "2020-03-09T16:52:56.752Z",
        "dateTime": "2018-09-09T18:56:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 126,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "126",
                    "codes": []
                },
                "values": [
                    {
                        "value": 126,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 77,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "77",
                    "codes": []
                },
                "values": [
                    {
                        "value": 77,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 71,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "71",
                    "codes": []
                },
                "values": [
                    {
                        "value": 71,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.823,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.823",
                    "codes": []
                },
                "values": [
                    {
                        "value": 138.5,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.823,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.69,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.69",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.69,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bf6289a2f780",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.942Z",
        "createdAt": "2020-03-09T16:52:56.942Z",
        "dateTime": "2018-08-28T14:54:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 120,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "120",
                    "codes": []
                },
                "values": [
                    {
                        "value": 120,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 62,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "62",
                    "codes": []
                },
                "values": [
                    {
                        "value": 62,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.05,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.05",
                    "codes": []
                },
                "values": [
                    {
                        "value": 139,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.05,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.77,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.77",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.77,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674695ee4bff7a0a2f78c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:57.139Z",
        "createdAt": "2020-03-09T16:52:57.139Z",
        "dateTime": "2018-05-17T13:17:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 120,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "120",
                    "codes": []
                },
                "values": [
                    {
                        "value": 120,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 64,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "64",
                    "codes": []
                },
                "values": [
                    {
                        "value": 64,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 62.143,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "62.143",
                    "codes": []
                },
                "values": [
                    {
                        "value": 137,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 62.143,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.46,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.46",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.46,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674695ee4bf5e71a2f7b2",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:57.548Z",
        "createdAt": "2020-03-09T16:52:57.548Z",
        "dateTime": "2017-09-20T22:10:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 120,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "120",
                    "codes": []
                },
                "values": [
                    {
                        "value": 120,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 80,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "80",
                    "codes": []
                },
                "values": [
                    {
                        "value": 80,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.504,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.504",
                    "codes": []
                },
                "values": [
                    {
                        "value": 140,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.504,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.93,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.93",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.93,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674695ee4bfa30fa2f798",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:57.243Z",
        "createdAt": "2020-03-09T16:52:57.243Z",
        "dateTime": "2017-09-05T13:52:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 124,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "124",
                    "codes": []
                },
                "values": [
                    {
                        "value": 124,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 80,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "80",
                    "codes": []
                },
                "values": [
                    {
                        "value": 80,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.957,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.957",
                    "codes": []
                },
                "values": [
                    {
                        "value": 141,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.957,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 22.08,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "22.08",
                    "codes": []
                },
                "values": [
                    {
                        "value": 22.08,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674635ee4bf692fa2f648",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.658Z",
        "createdAt": "2020-03-09T16:52:51.658Z",
        "dateTime": "2017-08-27T17:20:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 129,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "129",
                    "codes": []
                },
                "values": [
                    {
                        "value": 129,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 71,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "71",
                    "codes": []
                },
                "values": [
                    {
                        "value": 71,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 87,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "87",
                    "codes": []
                },
                "values": [
                    {
                        "value": 87,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 98,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "98",
                    "codes": []
                },
                "values": [
                    {
                        "value": 98,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674645ee4bf5e00a2f66c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.542Z",
        "createdAt": "2020-03-09T16:52:52.542Z",
        "dateTime": "2017-08-23T21:58:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 65.772,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "65.772",
                    "codes": []
                },
                "values": [
                    {
                        "value": 145,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 65.772,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 22.71,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "22.71",
                    "codes": []
                },
                "values": [
                    {
                        "value": 22.71,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674655ee4bf7473a2f68e",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.550Z",
        "createdAt": "2020-03-09T16:52:53.550Z",
        "dateTime": "2017-07-31T17:36:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 129,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "129",
                    "codes": []
                },
                "values": [
                    {
                        "value": 129,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 64,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "64",
                    "codes": []
                },
                "values": [
                    {
                        "value": 64,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 75,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "75",
                    "codes": []
                },
                "values": [
                    {
                        "value": 75,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 67.132,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "67.132",
                    "codes": []
                },
                "values": [
                    {
                        "value": 148,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 67.132,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 23.18,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "23.18",
                    "codes": []
                },
                "values": [
                    {
                        "value": 23.18,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 97,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "97",
                    "codes": []
                },
                "values": [
                    {
                        "value": 97,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674665ee4bfe3b3a2f6b1",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.158Z",
        "createdAt": "2020-03-09T16:52:54.158Z",
        "dateTime": "2017-06-19T17:39:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 126,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "126",
                    "codes": []
                },
                "values": [
                    {
                        "value": 126,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 76,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "76",
                    "codes": []
                },
                "values": [
                    {
                        "value": 76,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 72,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "72",
                    "codes": []
                },
                "values": [
                    {
                        "value": 72,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 68.493,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "68.493",
                    "codes": []
                },
                "values": [
                    {
                        "value": 151,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 68.493,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 23.65,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "23.65",
                    "codes": []
                },
                "values": [
                    {
                        "value": 23.65,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 97,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "97",
                    "codes": []
                },
                "values": [
                    {
                        "value": 97,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674665ee4bf50aaa2f6d0",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.745Z",
        "createdAt": "2020-03-09T16:52:54.745Z",
        "dateTime": "2017-05-08T17:39:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 120,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "120",
                    "codes": []
                },
                "values": [
                    {
                        "value": 120,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 76,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "76",
                    "codes": []
                },
                "values": [
                    {
                        "value": 76,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 73,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "73",
                    "codes": []
                },
                "values": [
                    {
                        "value": 73,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 67.586,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "67.586",
                    "codes": []
                },
                "values": [
                    {
                        "value": 149,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 67.586,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 23.34,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "23.34",
                    "codes": []
                },
                "values": [
                    {
                        "value": 23.34,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 96,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "96",
                    "codes": []
                },
                "values": [
                    {
                        "value": 96,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674665ee4bf7304a2f6e0",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.847Z",
        "createdAt": "2020-03-09T16:52:54.847Z",
        "dateTime": "2017-03-27T16:32:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.957,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.957",
                    "codes": []
                },
                "values": [
                    {
                        "value": 141,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.957,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 22.08,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "22.08",
                    "codes": []
                },
                "values": [
                    {
                        "value": 22.08,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 96,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "96",
                    "codes": []
                },
                "values": [
                    {
                        "value": 96,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674665ee4bf6c34a2f6ea",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.968Z",
        "createdAt": "2020-03-09T16:52:54.968Z",
        "dateTime": "2017-03-02T16:25:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 76,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "76",
                    "codes": []
                },
                "values": [
                    {
                        "value": 76,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.504,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.504",
                    "codes": []
                },
                "values": [
                    {
                        "value": 140,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.504,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.93,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.93",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.93,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 99,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "99",
                    "codes": []
                },
                "values": [
                    {
                        "value": 99,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf1b81a2f6f6",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.257Z",
        "createdAt": "2020-03-09T16:52:55.257Z",
        "dateTime": "2017-01-04T18:44:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 72,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "72",
                    "codes": []
                },
                "values": [
                    {
                        "value": 72,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 60.328,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "60.328",
                    "codes": []
                },
                "values": [
                    {
                        "value": 133,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 60.328,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 20.83,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "20.83",
                    "codes": []
                },
                "values": [
                    {
                        "value": 20.83,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 98,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "98",
                    "codes": []
                },
                "values": [
                    {
                        "value": 98,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf0e60a2f702",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.381Z",
        "createdAt": "2020-03-09T16:52:55.381Z",
        "dateTime": "2016-11-16T19:05:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 76,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "76",
                    "codes": []
                },
                "values": [
                    {
                        "value": 76,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 58.968,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "58.968",
                    "codes": []
                },
                "values": [
                    {
                        "value": 130,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 58.968,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 20.36,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "20.36",
                    "codes": []
                },
                "values": [
                    {
                        "value": 20.36,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 97,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "97",
                    "codes": []
                },
                "values": [
                    {
                        "value": 97,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf7defa2f716",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.593Z",
        "createdAt": "2020-03-09T16:52:55.593Z",
        "dateTime": "2016-10-12T18:57:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 105,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "105",
                    "codes": []
                },
                "values": [
                    {
                        "value": 105,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 62,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "62",
                    "codes": []
                },
                "values": [
                    {
                        "value": 62,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 82,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "82",
                    "codes": []
                },
                "values": [
                    {
                        "value": 82,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 57.607,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "57.607",
                    "codes": []
                },
                "values": [
                    {
                        "value": 127,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 57.607,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 19.89,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "19.89",
                    "codes": []
                },
                "values": [
                    {
                        "value": 19.89,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 98,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "98",
                    "codes": []
                },
                "values": [
                    {
                        "value": 98,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674695ee4bff0fda2f7be",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:57.656Z",
        "createdAt": "2020-03-09T16:52:57.656Z",
        "dateTime": "2016-10-06T10:30:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 58.06,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "58.06",
                    "codes": []
                },
                "values": [
                    {
                        "value": 128,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 58.06,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 20.05,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "20.05",
                    "codes": []
                },
                "values": [
                    {
                        "value": 20.05,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf2c95a2f726",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.741Z",
        "createdAt": "2020-03-09T16:52:55.741Z",
        "dateTime": "2016-10-05T14:18:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 58.06,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "58.06",
                    "codes": []
                },
                "values": [
                    {
                        "value": 128,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 58.06,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 20.05,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "20.05",
                    "codes": []
                },
                "values": [
                    {
                        "value": 20.05,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674675ee4bf7504a2f72e",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:55.945Z",
        "createdAt": "2020-03-09T16:52:55.945Z",
        "dateTime": "2016-10-01T13:59:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 126,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "126",
                    "codes": []
                },
                "values": [
                    {
                        "value": 126,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 73,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "73",
                    "codes": []
                },
                "values": [
                    {
                        "value": 73,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 69,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "69",
                    "codes": []
                },
                "values": [
                    {
                        "value": 69,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 57.471,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "57.471",
                    "codes": []
                },
                "values": [
                    {
                        "value": 126.7,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 57.471,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 19.84,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "19.84",
                    "codes": []
                },
                "values": [
                    {
                        "value": 19.84,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bf4302a2f73c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.145Z",
        "createdAt": "2020-03-09T16:52:56.145Z",
        "dateTime": "2016-09-25T14:59:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 119,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "119",
                    "codes": []
                },
                "values": [
                    {
                        "value": 119,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 74,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "74",
                    "codes": []
                },
                "values": [
                    {
                        "value": 74,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Heart rate",
                "normalizedName": "Heart rate",
                "unit": "/min",
                "value": 65,
                "raw": {
                    "name": "HEART RATE",
                    "unit": "/min",
                    "value": "65",
                    "codes": []
                },
                "values": [
                    {
                        "value": 65,
                        "unit": "/min"
                    }
                ],
                "codes": [
                    {
                        "code": "8867-4",
                        "name": "Heart rate"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 58.06,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "58.06",
                    "codes": []
                },
                "values": [
                    {
                        "value": 128,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 58.06,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 20.05,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "20.05",
                    "codes": []
                },
                "values": [
                    {
                        "value": 20.05,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            },
            {
                "name": "Oxygen saturation",
                "normalizedName": "Oxygen saturation",
                "unit": "%",
                "value": 99,
                "raw": {
                    "name": "OXYGEN SATURATION",
                    "unit": "%",
                    "value": "99",
                    "codes": []
                },
                "values": [
                    {
                        "value": 99,
                        "unit": "%"
                    }
                ],
                "codes": [
                    {
                        "code": "59408-5",
                        "codeSystemName": "LOINC",
                        "name": "Oxygen saturation"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
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
        "id": "5e6674685ee4bf2445a2f74c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:56.257Z",
        "createdAt": "2020-03-09T16:52:56.257Z",
        "dateTime": "2016-01-01T14:34:00.000Z",
        "author": "Sam Scribesalot",
        "results": [
            {
                "name": "Systolic blood pressure",
                "normalizedName": "Systolic blood pressure",
                "unit": "mm[Hg]",
                "value": 112,
                "raw": {
                    "name": "SYSTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "112",
                    "codes": []
                },
                "values": [
                    {
                        "value": 112,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8480-6",
                        "codeSystemName": "LOINC",
                        "name": "Systolic blood pressure"
                    }
                ]
            },
            {
                "name": "Diastolic blood pressure",
                "normalizedName": "Diastolic blood pressure",
                "unit": "mm[Hg]",
                "value": 62,
                "raw": {
                    "name": "DIASTOLIC BLOOD PRESSURE",
                    "unit": "mm[Hg]",
                    "value": "62",
                    "codes": []
                },
                "values": [
                    {
                        "value": 62,
                        "unit": "mm[Hg]"
                    }
                ],
                "codes": [
                    {
                        "code": "8462-4",
                        "codeSystemName": "LOINC",
                        "name": "Diastolic blood pressure"
                    }
                ]
            },
            {
                "name": "Body height",
                "normalizedName": "Body height",
                "unit": "cm",
                "value": 170.2,
                "raw": {
                    "name": "HEIGHT",
                    "unit": "cm",
                    "value": "170.2",
                    "codes": []
                },
                "values": [
                    {
                        "value": 67.01,
                        "unit": "[in_i]"
                    },
                    {
                        "value": 170.2,
                        "unit": "cm"
                    }
                ],
                "codes": [
                    {
                        "code": "8302-2",
                        "codeSystemName": "LOINC",
                        "name": "Body height"
                    }
                ]
            },
            {
                "name": "Body weight",
                "normalizedName": "Body weight",
                "unit": "kg",
                "value": 63.504,
                "raw": {
                    "name": "WEIGHT",
                    "unit": "kg",
                    "value": "63.504",
                    "codes": []
                },
                "values": [
                    {
                        "value": 140,
                        "unit": "[lb_av]"
                    },
                    {
                        "value": 63.504,
                        "unit": "kg"
                    }
                ],
                "codes": [
                    {
                        "code": "29463-7",
                        "codeSystemName": "LOINC",
                        "name": "Body weight"
                    }
                ]
            },
            {
                "name": "Body mass index (BMI) [Ratio]",
                "normalizedName": "Body mass index (BMI) [Ratio]",
                "unit": "kg/m2",
                "value": 21.93,
                "raw": {
                    "name": "BODY MASS INDEX",
                    "unit": "kg/m2",
                    "value": "21.93",
                    "codes": []
                },
                "values": [
                    {
                        "value": 21.93,
                        "unit": "kg/m2"
                    }
                ],
                "codes": [
                    {
                        "code": "39156-5",
                        "codeSystemName": "LOINC",
                        "name": "Body mass index (BMI) [Ratio]"
                    }
                ]
            }
        ],
        "name": "Arthuretta Plasty",
        "codes": [],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e66745b5ee4bf9f7fa2f571",
            "href": "/medical/ccds/5e66745b5ee4bf9f7fa2f571"
        }
    }
]
```