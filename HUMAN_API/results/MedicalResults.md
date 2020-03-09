**Endpoint:**

### https://api.humanapi.co/v1/human/medical/test_results

**Response:**

```json
[
    {
        "id": "5e6674665ee4bfd6dba2f6cc",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.554Z",
        "createdAt": "2020-03-09T16:52:54.554Z",
        "components": [
            {
                "componentComments": "",
                "value": "Total left hip prosthesis periprosthetic fracture.ATTENDING RADIOLOGIST AGREEMENT: I have personally reviewed the images and agree with this report.",
                "name": "Impression",
                "codes": [
                    {
                        "code": "IMP",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "HISTORY: Status post total left hip arthroplasty.TECHNIQUE: AP radiograph of the pelvis AP and crosstable lateral radiographs of the left hip were performed.FINDINGS:There is redemonstration of a total left hip prosthesis, in standard alignment without evidence of periprosthetic fracture. There is trace heterotopic ossification about the left hip. Postoperative gas is decreased.Frontal view of the pelvis demonstrates mild lower lumbar spinal degenerative changes, moderate right hip osteoarthritis, where there is joint space narrowing subchondral sclerosis and probable cystic changes.Evaluation of the sacrum is obscured by overlying bowel contents. Moderate stool burden.",
                "name": "Narrative",
                "codes": [
                    {
                        "code": "NAR",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "Pennchart, Radiant Inresults - 12/31/2019 10:26 AM EDTHISTORY: Status post total left hip arthroplasty.TECHNIQUE: AP radiograph of the pelvis AP and crosstable lateral radiographs of the left hip were performed.FINDINGS:There is redemonstration of a total left hip prosthesis, in standard alignment without evidence of periprosthetic fracture. There is trace heterotopic ossification about the left hip. Postoperative gas is decreased.Frontal view of the pelvis demonstrates mild lower lumbar spinal degenerative changes, moderate right hip osteoarthritis, where there is joint space narrowing subchondral sclerosis and probable cystic changes.Evaluation of the sacrum is obscured by overlying bowel contents. Moderate stool burden.IMPRESSION:Total left hip prosthesis periprosthetic fracture.ATTENDING RADIOLOGIST AGREEMENT: I have personally reviewed the images and agree with this report.",
                "name": "Narrative",
                "codes": [
                    {
                        "code": "PXN",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "XR Hip 2-3 Views (Unilateral) with Pelvis when Performed (XR HIP 2-3 VIEWS (UNILATERAL) WITH PELVIS WHEN PERFORMED)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-12-31T09:14:46.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "XR Hip 2-3 Views (Unilateral) with Pelvis when Performed (XR HIP 2-3 VIEWS (UNILATERAL) WITH PELVIS WHEN PERFORMED)",
                "code": "93971",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf1efda2f660",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.049Z",
        "createdAt": "2020-03-09T16:52:52.049Z",
        "components": [],
        "name": "SCANNED RESULT (LAB)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-18T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (LAB)",
                "code": "111222",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e66745b5ee4bf1ce6a2f568",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:43.453Z",
        "createdAt": "2020-03-09T16:52:43.453Z",
        "components": [
            {
                "componentComments": "",
                "value": "Negative ABSC",
                "name": "ANTIBODY SCREEN INTERPRETATION",
                "codes": [
                    {
                        "name": "ANTIBODY SCREEN INTERPRETATION",
                        "code": "950",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "ANTIBODY SCREEN",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "ANTIBODY SCREEN",
                "code": "11274",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e66745c5ee4bf5aa8a2f580",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:44.345Z",
        "createdAt": "2020-03-09T16:52:44.345Z",
        "components": [
            {
                "componentComments": "",
                "value": "No growth at 24 hours.",
                "name": "Final",
                "codes": [
                    {
                        "name": "Final",
                        "code": "4367",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "URINE CULT W SENSITIVITY",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "URINE CULT W SENSITIVITY",
                "code": "11338",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e66745d5ee4bf7153a2f59a",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:45.249Z",
        "createdAt": "2020-03-09T16:52:45.249Z",
        "components": [
            {
                "refRange": "20.8 - 34.4",
                "componentComments": "Due to recent changes in laboratory testing, the recommended therapeutic aPTT<br/>range for unfractionated heparin for most clinical indications will now be<br/>62.0-80.0 seconds.<br/><br/>",
                "value": "26.3 second(s)",
                "name": "PTT",
                "codes": [
                    {
                        "name": "PTT",
                        "code": "14979-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "12.2 - 14.2",
                "componentComments": "",
                "value": "13.3 second(s)",
                "name": "PT",
                "codes": [
                    {
                        "name": "PT",
                        "code": "5902-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.9 - 1.1",
                "componentComments": "Prothrombin Time/INR:<br/>Result of the Prothrombin Time is reported in seconds and is converted to the<br/>international normalized ratio (INR). The INR is a calculation based on the<br/>result of the prothrombin time and serves to standardize results from different<br/>laboratories and the variable response of different thromboplastin reagents.<br/>Recommended therapeutic warfarin range is patient specific and is determined by<br/>physician/provider.<br/><br/>",
                "unit": "1",
                "value": "1.0",
                "name": "INR",
                "codes": [
                    {
                        "name": "INR",
                        "code": "6301-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "PROTIME/ APTT",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "PROTIME/ APTT",
                "code": "11889",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674605ee4bf3295a2f5db",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.254Z",
        "createdAt": "2020-03-09T16:52:48.254Z",
        "components": [
            {
                "refRange": "> 14 U/L; < 54 U/L",
                "componentComments": "",
                "unit": "U/L",
                "value": "18",
                "name": "ALT",
                "codes": [
                    {
                        "name": "ALT",
                        "code": "1742-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 3.5 g/dL; < 5.1 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "4.3",
                "name": "Albumin",
                "codes": [
                    {
                        "name": "Albumin",
                        "code": "1751-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 8.9 mg/dL; < 10.3 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "9.7",
                "name": "Calcium",
                "codes": [
                    {
                        "name": "Calcium",
                        "code": "17861-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 15 U/L; < 41 U/L",
                "componentComments": "",
                "unit": "U/L",
                "value": "18",
                "name": "AST",
                "codes": [
                    {
                        "name": "AST",
                        "code": "1920-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 0.3 mg/dL; < 1.2 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.6",
                "name": "Bilirubin, Total",
                "codes": [
                    {
                        "name": "Bilirubin, Total",
                        "code": "1975-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 22 mmol/L; < 32 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "32",
                "name": "Carbon Dioxide",
                "codes": [
                    {
                        "name": "Carbon Dioxide",
                        "code": "2028-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 101 mmol/L; < 111 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "104",
                "name": "Chloride",
                "codes": [
                    {
                        "name": "Chloride",
                        "code": "2075-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 0.44 mg/dL; < 1.03 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.67",
                "name": "Creatinine",
                "codes": [
                    {
                        "name": "Creatinine",
                        "code": "2160-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 70 mg/dL; < 99 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "83",
                "name": "Glucose",
                "codes": [
                    {
                        "name": "Glucose",
                        "code": "2345-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 3.6 mmol/L; < 5.1 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "3.8",
                "name": "Potassium",
                "codes": [
                    {
                        "name": "Potassium",
                        "code": "2823-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 6.1 g/dL; < 7.9 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "6.6",
                "name": "Protein, Total",
                "codes": [
                    {
                        "name": "Protein, Total",
                        "code": "2885-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 136 mmol/L; < 144 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "142",
                "name": "Sodium",
                "codes": [
                    {
                        "name": "Sodium",
                        "code": "2951-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 8 mg/dL; < 20 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "16",
                "name": "Urea Nitrogen",
                "codes": [
                    {
                        "name": "Urea Nitrogen",
                        "code": "3094-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3 - 12",
                "componentComments": "With hypoalbuminemia, anion gap correction is suggested using Na - (Cl+CO2) +<br/>2.5*(4 - Albumin).  The lab reports Na - (Cl+CO2).<br/><br/>",
                "unit": "1",
                "value": "6",
                "name": "Anion Gap",
                "codes": [
                    {
                        "name": "Anion Gap",
                        "code": "33037-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 38 U/L; < 126 U/L",
                "componentComments": "",
                "unit": "U/L",
                "value": "83",
                "name": "Alkaline Phosphatase",
                "codes": [
                    {
                        "name": "Alkaline Phosphatase",
                        "code": "6768-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "COMPREHENSIVE METABOLIC PANEL",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "COMPREHENSIVE METABOLIC PANEL",
                "code": "12625",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf738ba2f673",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.556Z",
        "createdAt": "2020-03-09T16:52:52.556Z",
        "components": [
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Protein",
                "codes": [
                    {
                        "name": "UA Protein",
                        "code": "20454-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Ketones",
                "codes": [
                    {
                        "name": "UA Ketones",
                        "code": "2514-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Glucose",
                "codes": [
                    {
                        "name": "UA Glucose",
                        "code": "25428-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "<= Clear",
                "componentComments": "",
                "value": "Clear",
                "name": "UA Appearance",
                "codes": [
                    {
                        "name": "UA Appearance",
                        "code": "5767-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Bilirubin",
                "codes": [
                    {
                        "name": "UA Bilirubin",
                        "code": "5770-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "<=Dk Yel",
                "componentComments": "",
                "value": "Yellow",
                "name": "UA Color",
                "codes": [
                    {
                        "name": "UA Color",
                        "code": "5778-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Blood",
                "codes": [
                    {
                        "name": "UA Blood",
                        "code": "5794-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Leukocyte Esterase",
                "codes": [
                    {
                        "name": "UA Leukocyte Esterase",
                        "code": "5799-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Nitrite",
                "codes": [
                    {
                        "name": "UA Nitrite",
                        "code": "5802-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "5.0 - 7.0",
                "componentComments": "",
                "unit": "1",
                "value": "5.0",
                "name": "UA pH",
                "codes": [
                    {
                        "name": "UA pH",
                        "code": "5803-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.010 - 1.030",
                "componentComments": "",
                "unit": "1",
                "value": "1.023",
                "name": "UA Specific Gravity",
                "codes": [
                    {
                        "name": "UA Specific Gravity",
                        "code": "5811-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "Ascorbic Acid, UA",
                "codes": [
                    {
                        "name": "Ascorbic Acid, UA",
                        "code": "5876-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 0.2 mg/dL; < 1 mg/dL",
                "componentComments": "",
                "value": "Normal",
                "name": "UA Urobilinogen",
                "codes": [
                    {
                        "name": "UA Urobilinogen",
                        "code": "64",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "URINE ANALYSIS DIPSTICK",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "URINE ANALYSIS DIPSTICK",
                "code": "52623",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf2c39a2f688",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.360Z",
        "createdAt": "2020-03-09T16:52:53.360Z",
        "components": [
            {
                "refRange": "> 36 %; < 46 %",
                "componentComments": "",
                "unit": "%",
                "value": "44",
                "name": "Hematocrit",
                "codes": [
                    {
                        "name": "Hematocrit",
                        "code": "4544-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "4.0 - 11.0",
                "componentComments": "",
                "value": "5.1 THO/uL",
                "name": "White Blood Cells",
                "codes": [
                    {
                        "name": "White Blood Cells",
                        "code": "6690-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 12 g/dL; < 16 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "14.8",
                "name": "Hemoglobin",
                "codes": [
                    {
                        "name": "Hemoglobin",
                        "code": "718-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "150 - 400",
                "componentComments": "",
                "value": "207 THO/uL",
                "name": "Platelets",
                "codes": [
                    {
                        "name": "Platelets",
                        "code": "777-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 27 pg; < 33 pg",
                "componentComments": "",
                "unit": "pg",
                "value": "29",
                "name": "MCH",
                "codes": [
                    {
                        "name": "MCH",
                        "code": "785-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 31 g/dL; < 36 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "34",
                "name": "MCHC",
                "codes": [
                    {
                        "name": "MCHC",
                        "code": "786-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 80 fL; < 100 fL",
                "componentComments": "",
                "unit": "fL",
                "value": "87",
                "name": "MCV",
                "codes": [
                    {
                        "name": "MCV",
                        "code": "787-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 11.5 %; < 14.5 %",
                "componentComments": "",
                "unit": "%",
                "value": "14.0",
                "name": "RDW",
                "codes": [
                    {
                        "name": "RDW",
                        "code": "788-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3.80 - 5.30",
                "componentComments": "",
                "value": "5.05 MIL/uL",
                "name": "Red Blood Cells",
                "codes": [
                    {
                        "name": "Red Blood Cells",
                        "code": "789-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "HEME PROFILE + ELECT DIFF",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "HEME PROFILE + ELECT DIFF",
                "code": "56258",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf9d58a2f69d",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.555Z",
        "createdAt": "2020-03-09T16:52:53.555Z",
        "components": [
            {
                "componentComments": "",
                "unit": "%",
                "value": "10.6",
                "name": "% Monocytes",
                "codes": [
                    {
                        "name": "% Monocytes",
                        "code": "5905-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.00 - 5.00",
                "componentComments": "",
                "value": "2.30 THO/uL",
                "name": "# Lymphocytes",
                "codes": [
                    {
                        "name": "# Lymphocytes",
                        "code": "6690-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.00 - 0.20",
                "componentComments": "",
                "value": "0.00 THO/uL",
                "name": "# Basophils",
                "codes": [
                    {
                        "name": "# Basophils",
                        "code": "704-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "0.7",
                "name": "% Basophils",
                "codes": [
                    {
                        "name": "% Basophils",
                        "code": "706-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.00 - 0.40",
                "componentComments": "",
                "value": "0.10 THO/uL",
                "name": "# Eosinophils",
                "codes": [
                    {
                        "name": "# Eosinophils",
                        "code": "711-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "2.1",
                "name": "% Eosinophils",
                "codes": [
                    {
                        "name": "% Eosinophils",
                        "code": "713-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "44.6",
                "name": "% Lymphocytes",
                "codes": [
                    {
                        "name": "% Lymphocytes",
                        "code": "736-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.10 - 1.00",
                "componentComments": "",
                "value": "0.50 THO/uL",
                "name": "# Monocytes",
                "codes": [
                    {
                        "name": "# Monocytes",
                        "code": "742-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.80 - 7.50",
                "componentComments": "The manual differential may sometimes be more sensitive in the detection of<br/>blasts than the automated differential.  Physicians should contact the<br/>laboratory as soon as possible to request a manual differential if the automated<br/>results are potentially discrepant with clinical findings.<br/><br/>",
                "value": "2.10 THO/uL",
                "name": "# Neutrophils",
                "codes": [
                    {
                        "name": "# Neutrophils",
                        "code": "751-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "42.0",
                "name": "% Neutrophils",
                "codes": [
                    {
                        "name": "% Neutrophils",
                        "code": "770-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "AUTOMATED DIFF",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "AUTOMATED DIFF",
                "code": "57207",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf9fc5a2f6a2",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.840Z",
        "createdAt": "2020-03-09T16:52:53.840Z",
        "components": [
            {
                "refRange": ">=60 mL/min/1.73 m2",
                "componentComments": "",
                "value": ">60",
                "name": "eGFR, Non-AA",
                "codes": [
                    {
                        "name": "eGFR, Non-AA",
                        "code": "48642-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": ">=60 mL/min/1.73 m2",
                "componentComments": "",
                "value": ">60",
                "name": "eGFR, AA",
                "codes": [
                    {
                        "name": "eGFR, AA",
                        "code": "48643-1",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "GLOMERULAR FILTRATION RATE-ESTIMATED",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "GLOMERULAR FILTRATION RATE-ESTIMATED",
                "code": "57208",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bf5063a2f6c8",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.443Z",
        "createdAt": "2020-03-09T16:52:54.443Z",
        "components": [
            {
                "componentComments": "",
                "value": "1/20/18",
                "name": "Date of Surgery",
                "codes": [
                    {
                        "name": "Date of Surgery",
                        "code": "5473",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "Sample acceptable for Preadmission Testing until midnight on the date of surgery.",
                "name": "C ACCEPT/UNACCEPTABLE FOR PREADMISSION TESTING",
                "codes": [
                    {
                        "name": "C ACCEPT/UNACCEPTABLE FOR PREADMISSION TESTING",
                        "code": "6438",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "C_PAT",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T12:33:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "C_PAT",
                "code": "65758",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf73eba2f678",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.749Z",
        "createdAt": "2020-03-09T16:52:52.749Z",
        "components": [],
        "name": "SCANNED RESULT (CARDIOLOGY)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-11-12T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (CARDIOLOGY)",
                "code": "111225",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bfbbdfa2f6ca",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.458Z",
        "createdAt": "2020-03-09T16:52:54.458Z",
        "components": [
            {
                "componentComments": "",
                "value": "Bilateral severe osteoarthrosis of the hips, worse left than right.ATTENDING RADIOLOGIST AGREEMENT [ATT05]:I have personally reviewed the images and agree with this report.",
                "name": "Impression",
                "codes": [
                    {
                        "code": "IMP",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "HISTORY: Left hip painTECHNIQUE: AP and frog-leg lateral radiographs of the LEFT hip were obtained. AP view of the pelvis. COMPARISON: None.FINDINGS:Severe osteoarthritis of the left hip with end-stage superior joint narrowing, subchondral sclerosis, subchondral cysts, and osteophytosis.Severe osteoarthritis of the right hip.Degenerative changes of the bilateral sacroiliac joints, lumbar spine, and pubic symphysis.",
                "name": "Narrative",
                "codes": [
                    {
                        "code": "NAR",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "Pennchart, Radiant Inresults - 10/21/2019  5:25 PM EDTHISTORY: Left hip painTECHNIQUE: AP and frog-leg lateral radiographs of the LEFT hip were obtained. AP view of the pelvis. COMPARISON: None.FINDINGS:Severe osteoarthritis of the left hip with end-stage superior joint narrowing, subchondral sclerosis, subchondral cysts, and osteophytosis.Severe osteoarthritis of the right hip.Degenerative changes of the bilateral sacroiliac joints, lumbar spine, and pubic symphysis.IMPRESSION:Bilateral severe osteoarthrosis of the hips, worse left than right.ATTENDING RADIOLOGIST AGREEMENT [ATT05]:I have personally reviewed the images and agree with this report.",
                "name": "Narrative",
                "codes": [
                    {
                        "code": "PXN",
                        "codeSystemName": "Epic.ResultText",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "XR Hip 2-3 Views (Unilateral) with Pelvis when Performed (XR HIP 2-3 VIEWS (UNILATERAL) WITH PELVIS WHEN PERFORMED)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2019-10-21T09:27:03.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "XR Hip 2-3 Views (Unilateral) with Pelvis when Performed (XR HIP 2-3 VIEWS (UNILATERAL) WITH PELVIS WHEN PERFORMED)",
                "code": "93971",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf4038a2f67c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.848Z",
        "createdAt": "2020-03-09T16:52:52.848Z",
        "components": [],
        "name": "SCANNED RESULT (CARDIOLOGY)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-10-31T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (CARDIOLOGY)",
                "code": "111225",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bfc895a2f6ce",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.651Z",
        "createdAt": "2020-03-09T16:52:54.651Z",
        "components": [
            {
                "componentComments": "",
                "value": ".",
                "name": ".",
                "codes": [
                    {
                        "name": ".",
                        "code": "28491",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "The Pap smear is a screening test designed to aid in the detection of<br/>premalignant and malignant conditions of the uterine cervix.  It is not a<br/>diagnostic procedure and should not be used as the sole means of detecting<br/>cervical cancer.  Both false-positive and false-negative reports do occur.<br/><br/>",
                "value": "Comment",
                "name": "Note:",
                "codes": [
                    {
                        "name": "Note:",
                        "code": "30521",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "The HPV DNA reflex criteria were not met with this specimen result<br/>therefore, no HPV testing was performed.<br/><br/>",
                "value": "Comment",
                "name": ".",
                "codes": [
                    {
                        "name": ".",
                        "code": "30522",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "NEGATIVE FOR INTRAEPITHELIAL LESION AND MALIGNANCY.",
                "value": "Comment",
                "name": "DIAGNOSIS:",
                "codes": [
                    {
                        "name": "DIAGNOSIS:",
                        "code": "30525",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "Satisfactory for evaluation.  Endocervical and/or squamous metaplastic<br/>cells (endocervical component) are present.<br/><br/>",
                "value": "Comment",
                "name": "Specimen adequacy:",
                "codes": [
                    {
                        "name": "Specimen adequacy:",
                        "code": "30526",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "Joseph A Piemontesi, Cytotechnologist",
                "value": "Comment",
                "name": "Performed by:",
                "codes": [
                    {
                        "name": "Performed by:",
                        "code": "30529",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "This liquid based SurePath(R) pap test was screened with the<br/>assistance of an image guided system.<br/><br/>",
                "value": "Comment",
                "name": "Test Methodology:",
                "codes": [
                    {
                        "name": "Test Methodology:",
                        "code": "47527-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "PAP IG, RFX HPV ASCU (LABCORP)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-09-11T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "PAP IG, RFX HPV ASCU (LABCORP)",
                "code": "124255",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674625ee4bf0692a2f62a",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.940Z",
        "createdAt": "2020-03-09T16:52:50.940Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (US NON OB PELVIS AND TTIANSVAG)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-08-27T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (US NON OB PELVIS AND TTIANSVAG)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674635ee4bf81dca2f632",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.146Z",
        "createdAt": "2020-03-09T16:52:51.146Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (US PELVIS TRANSVAG)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-08-27T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (US PELVIS TRANSVAG)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674635ee4bff958a2f65c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.858Z",
        "createdAt": "2020-03-09T16:52:51.858Z",
        "components": [],
        "name": "SCANNED RESULT (LAB) (CBC,COMP,SED RATE,C REACTIVE)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-08-27T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (LAB) (CBC,COMP,SED RATE,C REACTIVE)",
                "code": "111222",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674625ee4bfc1c1a2f618",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.146Z",
        "createdAt": "2020-03-09T16:52:50.146Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (CT ABD/PEL W/0 CONT)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-05-17T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (CT ABD/PEL W/0 CONT)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674625ee4bf02f4a2f621",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:50.462Z",
        "createdAt": "2020-03-09T16:52:50.462Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (US ABD LTD APPEND)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2018-05-16T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (US ABD LTD APPEND)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674595ee4bf042da2f544",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:42.251Z",
        "createdAt": "2020-03-09T16:52:42.251Z",
        "components": [
            {
                "refRange": "0 - 40",
                "componentComments": "",
                "value": "9 mm/hr",
                "name": "Sedimentation Rate-Westergren",
                "codes": [
                    {
                        "name": "Sedimentation Rate-Westergren",
                        "code": "4537-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "SEDIMENTATION RATE",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-12-28T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SEDIMENTATION RATE",
                "code": "11068",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e66745e5ee4bf364ca2f5c7",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:47.049Z",
        "createdAt": "2020-03-09T16:52:47.049Z",
        "components": [
            {
                "refRange": "0 - 32",
                "componentComments": "",
                "value": "19 IU/L",
                "name": "ALT (SGPT)",
                "codes": [
                    {
                        "name": "ALT (SGPT)",
                        "code": "1742-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 3.5 g/dL; < 5.5 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "4.5",
                "name": "Albumin, Serum",
                "codes": [
                    {
                        "name": "Albumin, Serum",
                        "code": "1751-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.1 - 2.5",
                "componentComments": "",
                "unit": "1",
                "value": "2.1",
                "name": "A/G Ratio",
                "codes": [
                    {
                        "name": "A/G Ratio",
                        "code": "1759-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 8.7 mg/dL; < 10.2 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "9.9",
                "name": "Calcium, Serum",
                "codes": [
                    {
                        "name": "Calcium, Serum",
                        "code": "17861-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0 - 40",
                "componentComments": "",
                "value": "29 IU/L",
                "name": "AST (SGOT)",
                "codes": [
                    {
                        "name": "AST (SGOT)",
                        "code": "1920-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 0 mg/dL; < 1.2 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.3",
                "name": "Bilirubin, Total",
                "codes": [
                    {
                        "name": "Bilirubin, Total",
                        "code": "1975-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 18 mmol/L; < 29 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "25",
                "name": "Carbon Dioxide, Total",
                "codes": [
                    {
                        "name": "Carbon Dioxide, Total",
                        "code": "2028-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 97 mmol/L; < 108 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "102",
                "name": "Chloride, Serum",
                "codes": [
                    {
                        "name": "Chloride, Serum",
                        "code": "2075-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 0.57 mg/dL; < 1 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.72",
                "name": "Creatinine, Serum",
                "codes": [
                    {
                        "name": "Creatinine, Serum",
                        "code": "2160-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 65 mg/dL; < 99 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "97",
                "name": "Glucose, Serum",
                "codes": [
                    {
                        "name": "Glucose, Serum",
                        "code": "2345-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 1.5 g/dL; < 4.5 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "2.1",
                "name": "Globulin, Total",
                "codes": [
                    {
                        "name": "Globulin, Total",
                        "code": "27882",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 3.5 mmol/L; < 5.2 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "4.4",
                "name": "Potassium, Serum",
                "codes": [
                    {
                        "name": "Potassium, Serum",
                        "code": "2823-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 6 g/dL; < 8.5 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "6.6",
                "name": "Protein, Total, Serum",
                "codes": [
                    {
                        "name": "Protein, Total, Serum",
                        "code": "2885-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 134 mmol/L; < 144 mmol/L",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "142",
                "name": "Sodium, Serum",
                "codes": [
                    {
                        "name": "Sodium, Serum",
                        "code": "2951-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 6 mg/dL; < 24 mg/dL",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "13",
                "name": "BUN",
                "codes": [
                    {
                        "name": "BUN",
                        "code": "3094-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "9 - 23",
                "componentComments": "",
                "unit": "1",
                "value": "18",
                "name": "BUN/Creatinine Ratio",
                "codes": [
                    {
                        "name": "BUN/Creatinine Ratio",
                        "code": "3097-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": ">59",
                "componentComments": "",
                "unit": "mL/min/1.73",
                "value": "94",
                "name": "eGFR If NonAfricn Am",
                "codes": [
                    {
                        "name": "eGFR If NonAfricn Am",
                        "code": "48642-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": ">59",
                "componentComments": "",
                "unit": "mL/min/1.73",
                "value": "108",
                "name": "eGFR If Africn Am",
                "codes": [
                    {
                        "name": "eGFR If Africn Am",
                        "code": "48643-1",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "39 - 117",
                "componentComments": "",
                "value": "77 IU/L",
                "name": "Alkaline Phosphatase, S",
                "codes": [
                    {
                        "name": "Alkaline Phosphatase, S",
                        "code": "6768-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "COMPREHENSIVE METABOLIC PANEL",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-12-28T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "COMPREHENSIVE METABOLIC PANEL",
                "code": "12625",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bfdc23a2f686",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.257Z",
        "createdAt": "2020-03-09T16:52:53.257Z",
        "components": [
            {
                "componentComments": "",
                "unit": "%",
                "value": "0",
                "name": "Immature Granulocytes",
                "codes": [
                    {
                        "name": "Immature Granulocytes",
                        "code": "38518-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 34 %; < 46.6 %",
                "componentComments": "",
                "unit": "%",
                "value": "42.9",
                "name": "Hematocrit",
                "codes": [
                    {
                        "name": "Hematocrit",
                        "code": "4544-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.0 - 0.1",
                "componentComments": "",
                "value": "0.0 x10E3/uL",
                "name": "Immature Grans (Abs)",
                "codes": [
                    {
                        "name": "Immature Grans (Abs)",
                        "code": "51584-1",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "5",
                "name": "Monocytes",
                "codes": [
                    {
                        "name": "Monocytes",
                        "code": "5905-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3.4 - 10.8",
                "componentComments": "",
                "value": "6.9 x10E3/uL",
                "name": "WBC",
                "codes": [
                    {
                        "name": "WBC",
                        "code": "6690-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.0 - 0.2",
                "componentComments": "",
                "value": "0.0 x10E3/uL",
                "name": "Baso (Absolute)",
                "codes": [
                    {
                        "name": "Baso (Absolute)",
                        "code": "704-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "0",
                "name": "Basos",
                "codes": [
                    {
                        "name": "Basos",
                        "code": "706-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.0 - 0.4",
                "componentComments": "",
                "value": "0.0 x10E3/uL",
                "name": "Eos (Absolute)",
                "codes": [
                    {
                        "name": "Eos (Absolute)",
                        "code": "711-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "1",
                "name": "Eos",
                "codes": [
                    {
                        "name": "Eos",
                        "code": "713-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 11.1 g/dL; < 15.9 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "14.7",
                "name": "Hemoglobin",
                "codes": [
                    {
                        "name": "Hemoglobin",
                        "code": "718-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.7 - 3.1",
                "componentComments": "",
                "value": "1.2 x10E3/uL",
                "name": "Lymphs (Absolute)",
                "codes": [
                    {
                        "name": "Lymphs (Absolute)",
                        "code": "731-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "18",
                "name": "Lymphs",
                "codes": [
                    {
                        "name": "Lymphs",
                        "code": "736-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.1 - 0.9",
                "componentComments": "",
                "value": "0.3 x10E3/uL",
                "name": "Monocytes(Absolute)",
                "codes": [
                    {
                        "name": "Monocytes(Absolute)",
                        "code": "742-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.4 - 7.0",
                "componentComments": "",
                "value": "5.2 x10E3/uL",
                "name": "Neutrophils (Absolute)",
                "codes": [
                    {
                        "name": "Neutrophils (Absolute)",
                        "code": "751-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "76",
                "name": "Neutrophils",
                "codes": [
                    {
                        "name": "Neutrophils",
                        "code": "770-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "150 - 379",
                "componentComments": "",
                "value": "246 x10E3/uL",
                "name": "Platelets",
                "codes": [
                    {
                        "name": "Platelets",
                        "code": "777-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 26.6 pg; < 33 pg",
                "componentComments": "",
                "unit": "pg",
                "value": "30.2",
                "name": "MCH",
                "codes": [
                    {
                        "name": "MCH",
                        "code": "785-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 31.5 g/dL; < 35.7 g/dL",
                "componentComments": "",
                "unit": "g/dL",
                "value": "34.3",
                "name": "MCHC",
                "codes": [
                    {
                        "name": "MCHC",
                        "code": "786-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 79 fL; < 97 fL",
                "componentComments": "",
                "unit": "fL",
                "value": "88",
                "name": "MCV",
                "codes": [
                    {
                        "name": "MCV",
                        "code": "787-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "> 12.3 %; < 15.4 %",
                "componentComments": "",
                "unit": "%",
                "value": "13.8",
                "name": "RDW",
                "codes": [
                    {
                        "name": "RDW",
                        "code": "788-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3.77 - 5.28",
                "componentComments": "",
                "value": "4.87 x10E6/uL",
                "name": "RBC",
                "codes": [
                    {
                        "name": "RBC",
                        "code": "789-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "HEME PROFILE + ELECT DIFF",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-12-28T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "HEME PROFILE + ELECT DIFF",
                "code": "56258",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674635ee4bfe0b1a2f657",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.753Z",
        "createdAt": "2020-03-09T16:52:51.753Z",
        "components": [],
        "name": "SCANNED RESULT (LAB) (CERVICAL BIOPSY)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-09-20T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (LAB) (CERVICAL BIOPSY)",
                "code": "111222",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674635ee4bf51f2a2f644",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.550Z",
        "createdAt": "2020-03-09T16:52:51.550Z",
        "components": [],
        "name": "SCANNED RESULT (LAB) (LAB CORP)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-08-29T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (LAB) (LAB CORP)",
                "code": "111222",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674635ee4bfee22a2f63c",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:51.260Z",
        "createdAt": "2020-03-09T16:52:51.260Z",
        "components": [],
        "name": "SCANNED RESULT (LAB) (LABCORP)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-05-01T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (LAB) (LABCORP)",
                "code": "111222",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf1358a2f6aa",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.952Z",
        "createdAt": "2020-03-09T16:52:53.952Z",
        "components": [],
        "name": "CT NECK (SOFT TISSUE) W & WO IV CONTRAST (70492)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-04-17T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "CT NECK (SOFT TISSUE) W & WO IV CONTRAST (70492)",
                "code": "57405",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf47eca2f6ac",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.959Z",
        "createdAt": "2020-03-09T16:52:53.959Z",
        "components": [],
        "name": "MRI ANGIO ABDOMEN ONLY W & WO IV CONTRAST (ARTERIES AND/OR VEINS)  (74185)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-03-02T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "MRI ANGIO ABDOMEN ONLY W & WO IV CONTRAST (ARTERIES AND/OR VEINS)  (74185)",
                "code": "57809",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf8b7ea2f6ae",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.966Z",
        "createdAt": "2020-03-09T16:52:53.966Z",
        "components": [],
        "name": "MRI ANGIO CHEST W & WO IV CONTRAST (71555)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2017-02-22T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "MRI ANGIO CHEST W & WO IV CONTRAST (71555)",
                "code": "57815",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bff4cfa2f6b0",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.143Z",
        "createdAt": "2020-03-09T16:52:54.143Z",
        "components": [
            {
                "componentComments": "",
                "unit": "cm",
                "value": "3.3",
                "name": "AORTIC ROOT DIAMETER",
                "codes": [
                    {
                        "name": "AORTIC ROOT DIAMETER",
                        "code": "4289",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "MEASUREMENTS  (Male / Female) Normal Values 2D ECHO LV Diastolic Diameter PLA  4.3 cm      4.2 - 5.9 / 3.9 - 5.3 cm LV Systolic Diameter PLAX  3.2 cm       IVS Diastolic Thickness    0.9 cm      0.6 - 1.0 / 0.6 - 0.9 cm LVPW Diastolic Thickness   0.9 cm      0.6 - 1.0 / 0.6 - 0.9 cm LV Relative Wall Thicknes  0.4          Aortic Root Diameter       3.3 cm       Estimated LV Ejection Fra  60.0 %       DOPPLER Mitral E Point Velocity    69.8 cm/s    Mitral A Point Velocity    36.0 cm/s    Mitral E to A Ratio        1.9          MV Deceleration Time       157.2 ms     Pulmonary Vein Systolic V  66.6 cm/s    Pulmonary Vein Diastolic   56.0 cm/s    Pulmonary Vein S/D Ratio   1.2          Pulmonary Vein A Velocity  24.4 cm/s    Pulmonary Vein A to Mitra  0.7          TR Peak Velocity           241.9 cm/s   TR Peak Gradient           23.4 mmHg    PV Peak Velocity           92.1 cm/s    PV Peak Gradient           3.4 mmHg     FINDINGS Left Atrium The left atrium is normal in size.   Left Ventricle The left ventricle is normal in size and function.  Normal left  ventricular ejection fraction estimated at 60%. There is normal  diastolic function. False chordae are noted in the LV.  Aortic Valve The aortic valve is abnormal and trileaflet. The aortic valve is  mildly thickened. No aortic regurgitation is detected.  Mitral Valve The mitral valve is normal. There is trace mitral regurgitation.  Right Atrium The right atrium is normal in size.   Right Ventricle The right ventricle is normal in size and function.   Pulmonic Valve The pulmonic valve is not well seen.  Tricuspid Valve The tricuspid valve is normal. There is minimal tricuspid  regurgitation (normal variant). Normal PASP. The PA Systolic  pressure is 23 mmHg (RA Pressure 3 mmHg).  Pericardium Normal pericardium.   Aorta Normal aortic root for body surface area.  The abdominal aorta  is normal.  IA Septum The interatrial septum is normal.   IVC, SVC, Misc The inferior vena cava is not well seen.  Technical Quality Excellent.  CONCLUSIONS        TTE HUP OUT A transthoracic echocardiogram (including 2D, M-mode, spectral  and color Doppler imaging) was performed using the standard  protocol.The left ventricle is normal in size and function.   Normal left ventricular ejection fraction estimated at 60%.  There is normal diastolic function. False chordae are noted in  the LV. The left atrium is normal in size.  The aortic valve is  abnormal and trileaflet. The aortic valve is mildly thickened.  No aortic regurgitation is detected. The mitral valve is normal.  There is trace mitral regurgitation. The right ventricle is  normal in size and function.  The tricuspid valve is normal.  There is minimal tricuspid regurgitation (normal variant).  Normal PASP. Normal pericardium.  No previous study at this  institution for comparison.  Bonnie Ky MD Edited by:  Bonnie Ky MD (Electronically Signed) Final Date:      21 April 2014 15:32",
                "name": "PROSOLV REPORT TEXT",
                "codes": [
                    {
                        "name": "PROSOLV REPORT TEXT",
                        "code": "5265",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "%",
                "value": "60.0",
                "name": "Estimated LV Ejection Fraction",
                "codes": [
                    {
                        "name": "Estimated LV Ejection Fraction",
                        "code": "6496",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "A transthoracic echocardiogram (including 2D, M-mode, spectral and color Doppler imaging) was performed using the standard protocol.The left ventricle is normal in size and function.  Normal left ventricular ejection fraction estimated at 60%. There is normal diastolic function. False chordae are noted in the LV. The left atrium is normal in size.  The aortic valve is abnormal and trileaflet. The aortic valve is mildly thickened. No aortic regurgitation is detected. The mitral valve is normal. There is trace mitral regurgitation. The right ventricle is normal in size and function.  The tricuspid valve is normal. There is minimal tricuspid regurgitation (normal variant). Normal PASP. Normal pericardium.  No previous study at this institution for comparison.",
                "name": "Conclusions",
                "codes": [
                    {
                        "name": "Conclusions",
                        "code": "6550",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "The left atrium is normal in size.",
                "name": "LA Comments",
                "codes": [
                    {
                        "name": "LA Comments",
                        "code": "6552",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "21 April 2014 15:32",
                "name": "Final Report Date",
                "codes": [
                    {
                        "name": "Final Report Date",
                        "code": "6994",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "1",
                "value": "785.2",
                "name": "ICD Codes",
                "codes": [
                    {
                        "name": "ICD Codes",
                        "code": "7000",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "BIRNBAUM,BIRNBAUM,",
                "name": "Referring Physician",
                "codes": [
                    {
                        "name": "Referring Physician",
                        "code": "7014",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "4.2 - 5.9 / 3.9 - 5.3 cm",
                "componentComments": "",
                "unit": "cm",
                "value": "4.3",
                "name": "LV Diastolic Diameter PLAX",
                "codes": [
                    {
                        "name": "LV Diastolic Diameter PLAX",
                        "code": "8135",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "cm",
                "value": "3.2",
                "name": "LV Systolic Diameter PLAX",
                "codes": [
                    {
                        "name": "LV Systolic Diameter PLAX",
                        "code": "8136",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.6 - 1.0 / 0.6 - 0.9 cm",
                "componentComments": "",
                "unit": "cm",
                "value": "0.9",
                "name": "IVS Diastolic Thickness",
                "codes": [
                    {
                        "name": "IVS Diastolic Thickness",
                        "code": "8137",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.6 - 1.0 / 0.6 - 0.9 cm",
                "componentComments": "",
                "unit": "cm",
                "value": "0.9",
                "name": "LVPW Diastolic Thickness",
                "codes": [
                    {
                        "name": "LVPW Diastolic Thickness",
                        "code": "8138",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "1",
                "value": "0.4",
                "name": "LV Relative Wall Thickness",
                "codes": [
                    {
                        "name": "LV Relative Wall Thickness",
                        "code": "8139",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "ECHO HEART XTHORACIC,COMPLETE W DOPPLER",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T14:38:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "ECHO HEART XTHORACIC,COMPLETE W DOPPLER",
                "code": "93306",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674585ee4bf2e46a2f529",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:40.744Z",
        "createdAt": "2020-03-09T16:52:40.744Z",
        "components": [
            {
                "refRange": "0 - 30",
                "componentComments": "",
                "value": "26 mm/hr",
                "name": "SEDIMENTATION RATE",
                "codes": [
                    {
                        "name": "SEDIMENTATION RATE",
                        "code": "30341-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "SEDIMENTATION RATE",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SEDIMENTATION RATE",
                "code": "11068",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e66745d5ee4bfae3da2f5b2",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:46.150Z",
        "createdAt": "2020-03-09T16:52:46.150Z",
        "components": [
            {
                "refRange": "14 - 54",
                "componentComments": "",
                "unit": "U/L",
                "value": "15",
                "name": "ALT",
                "codes": [
                    {
                        "name": "ALT",
                        "code": "1742-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3.5 - 4.8",
                "componentComments": "",
                "unit": "g/dL",
                "value": "4.1",
                "name": "Albumin",
                "codes": [
                    {
                        "name": "Albumin",
                        "code": "1751-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "8.9 - 10.3",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "9.7",
                "name": "Calcium",
                "codes": [
                    {
                        "name": "Calcium",
                        "code": "17861-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "15 - 41",
                "componentComments": "",
                "unit": "U/L",
                "value": "16",
                "name": "AST",
                "codes": [
                    {
                        "name": "AST",
                        "code": "1920-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.3 - 1.2",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.6",
                "name": "Bilirubin, Total",
                "codes": [
                    {
                        "name": "Bilirubin, Total",
                        "code": "1975-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "22 - 32",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "30",
                "name": "Carbon Dioxide",
                "codes": [
                    {
                        "name": "Carbon Dioxide",
                        "code": "2028-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "101 - 111",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "103",
                "name": "Chloride",
                "codes": [
                    {
                        "name": "Chloride",
                        "code": "2075-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.44 - 1.03",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "0.49",
                "name": "Creatinine",
                "codes": [
                    {
                        "name": "Creatinine",
                        "code": "2160-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "70 - 99",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "95",
                "name": "Glucose",
                "codes": [
                    {
                        "name": "Glucose",
                        "code": "2345-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "3.6 - 5.1",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "4.3",
                "name": "Potassium",
                "codes": [
                    {
                        "name": "Potassium",
                        "code": "2823-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "6.1 - 7.9",
                "componentComments": "",
                "unit": "g/dL",
                "value": "7.0",
                "name": "Protein, Total",
                "codes": [
                    {
                        "name": "Protein, Total",
                        "code": "2885-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "136 - 144",
                "componentComments": "",
                "unit": "mmol/L",
                "value": "140",
                "name": "Sodium",
                "codes": [
                    {
                        "name": "Sodium",
                        "code": "2951-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "8 - 20",
                "componentComments": "",
                "unit": "mg/dL",
                "value": "11",
                "name": "Urea Nitrogen",
                "codes": [
                    {
                        "name": "Urea Nitrogen",
                        "code": "3094-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "38 - 126",
                "componentComments": "",
                "unit": "U/L",
                "value": "78",
                "name": "Alkaline Phosphatase",
                "codes": [
                    {
                        "name": "Alkaline Phosphatase",
                        "code": "6768-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "COMPREHENSIVE METABOLIC PANEL",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "COMPREHENSIVE METABOLIC PANEL",
                "code": "12625",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf77dda2f666",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:52.247Z",
        "createdAt": "2020-03-09T16:52:52.247Z",
        "components": [
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Protein",
                "codes": [
                    {
                        "name": "UA Protein",
                        "code": "20454-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Ketones",
                "codes": [
                    {
                        "name": "UA Ketones",
                        "code": "2514-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Glucose",
                "codes": [
                    {
                        "name": "UA Glucose",
                        "code": "25428-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "Clear",
                "name": "UA Appearance",
                "codes": [
                    {
                        "name": "UA Appearance",
                        "code": "5767-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Bilirubin",
                "codes": [
                    {
                        "name": "UA Bilirubin",
                        "code": "5770-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "value": "Colorless",
                "name": "UA Color",
                "codes": [
                    {
                        "name": "UA Color",
                        "code": "5778-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative mg/dL",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Blood",
                "codes": [
                    {
                        "name": "UA Blood",
                        "code": "5794-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative Leu/ul",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Leukocyte Esterase",
                "codes": [
                    {
                        "name": "UA Leukocyte Esterase",
                        "code": "5799-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "Negative",
                "componentComments": "",
                "value": "Negative",
                "name": "UA Nitrite",
                "codes": [
                    {
                        "name": "UA Nitrite",
                        "code": "5802-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "componentComments": "",
                "unit": "1",
                "value": "7.5",
                "name": "UA pH",
                "codes": [
                    {
                        "name": "UA pH",
                        "code": "5803-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.010 - 1.030",
                "componentComments": "",
                "unit": "1",
                "value": "1.009",
                "name": "UA Specific Gravity",
                "codes": [
                    {
                        "name": "UA Specific Gravity",
                        "code": "5811-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    },
                    {
                        "name": "Outside reference range",
                        "code": "394844007",
                        "codeSystemName": "SNOMED CT",
                        "inferred": true
                    }
                ]
            },
            {
                "refRange": "0.2 - 1.0 mg/dL",
                "componentComments": "",
                "value": "Normal",
                "name": "UA Urobilinogen",
                "codes": [
                    {
                        "name": "UA Urobilinogen",
                        "code": "64",
                        "codeSystem": "1.2.840.114350.1.13.87.2.7.2.768282",
                        "codeSystemName": "Epic.LRR.ID",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "URINE ANALYSIS DIPSTICK",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "URINE ANALYSIS DIPSTICK",
                "code": "52623",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674645ee4bf7cf1a2f682",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.050Z",
        "createdAt": "2020-03-09T16:52:53.050Z",
        "components": [
            {
                "refRange": "36 - 46",
                "componentComments": "",
                "unit": "%",
                "value": "41",
                "name": "Hematocrit",
                "codes": [
                    {
                        "name": "Hematocrit",
                        "code": "4544-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "4.0 - 11.0",
                "componentComments": "",
                "value": "6.8 THO/uL",
                "name": "White Blood Cells",
                "codes": [
                    {
                        "name": "White Blood Cells",
                        "code": "6690-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "12.0 - 16.0",
                "componentComments": "",
                "unit": "g/dL",
                "value": "13.4",
                "name": "Hemoglobin",
                "codes": [
                    {
                        "name": "Hemoglobin",
                        "code": "718-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "150 - 400",
                "componentComments": "",
                "value": "271 THO/uL",
                "name": "Platelets",
                "codes": [
                    {
                        "name": "Platelets",
                        "code": "777-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "27 - 33",
                "componentComments": "",
                "unit": "pg",
                "value": "27",
                "name": "MCH",
                "codes": [
                    {
                        "name": "MCH",
                        "code": "785-6",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "31 - 36",
                "componentComments": "",
                "unit": "g/dL",
                "value": "32",
                "name": "MCHC",
                "codes": [
                    {
                        "name": "MCHC",
                        "code": "786-4",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "80 - 100",
                "componentComments": "",
                "unit": "fL",
                "value": "82",
                "name": "MCV",
                "codes": [
                    {
                        "name": "MCV",
                        "code": "787-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "11.5 - 14.5",
                "componentComments": "",
                "unit": "%",
                "value": "16.3",
                "name": "RDW",
                "codes": [
                    {
                        "name": "RDW",
                        "code": "788-0",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    },
                    {
                        "name": "Outside reference range",
                        "code": "394844007",
                        "codeSystemName": "SNOMED CT",
                        "inferred": true
                    }
                ]
            },
            {
                "refRange": "3.80 - 5.30",
                "componentComments": "",
                "value": "5.01 MIL/uL",
                "name": "Red Blood Cells",
                "codes": [
                    {
                        "name": "Red Blood Cells",
                        "code": "789-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "HEME PROFILE + ELECT DIFF",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "HEME PROFILE + ELECT DIFF",
                "code": "56258",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf900ba2f68a",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.463Z",
        "createdAt": "2020-03-09T16:52:53.463Z",
        "components": [
            {
                "refRange": "3.0 - 10.0",
                "componentComments": "",
                "unit": "%",
                "value": "3.2",
                "name": "% Monocytes",
                "codes": [
                    {
                        "name": "% Monocytes",
                        "code": "5905-5",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.00 - 5.00",
                "componentComments": "",
                "value": "0.97 THO/uL",
                "name": "# Lymphocytes",
                "codes": [
                    {
                        "name": "# Lymphocytes",
                        "code": "6690-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.00 - 0.20",
                "componentComments": "",
                "value": "0.03 THO/uL",
                "name": "# Basophils",
                "codes": [
                    {
                        "name": "# Basophils",
                        "code": "704-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.0 - 2.0",
                "componentComments": "",
                "unit": "%",
                "value": "0.4",
                "name": "% Basophils",
                "codes": [
                    {
                        "name": "% Basophils",
                        "code": "706-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.00 - 0.40",
                "componentComments": "",
                "value": "0.01 THO/uL",
                "name": "# Eosinophils",
                "codes": [
                    {
                        "name": "# Eosinophils",
                        "code": "711-2",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "0.0 - 6.0",
                "componentComments": "",
                "unit": "%",
                "value": "0.2",
                "name": "% Eosinophils",
                "codes": [
                    {
                        "name": "% Eosinophils",
                        "code": "713-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "20.0 - 47.0",
                "componentComments": "",
                "unit": "%",
                "value": "14.3",
                "name": "% Lymphocytes",
                "codes": [
                    {
                        "name": "% Lymphocytes",
                        "code": "736-9",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    },
                    {
                        "name": "Outside reference range",
                        "code": "394844007",
                        "codeSystemName": "SNOMED CT",
                        "inferred": true
                    }
                ]
            },
            {
                "refRange": "0.10 - 1.00",
                "componentComments": "",
                "value": "0.21 THO/uL",
                "name": "# Monocytes",
                "codes": [
                    {
                        "name": "# Monocytes",
                        "code": "742-7",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "1.80 - 7.50",
                "componentComments": "THIS ANALYZER MAY FAIL TO DETECT BLASTS IN SOME PATIENT'S SAMPLES.<br/>",
                "value": "5.53 THO/uL",
                "name": "# Neutrophils",
                "codes": [
                    {
                        "name": "# Neutrophils",
                        "code": "751-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": "45.0 - 75.0",
                "componentComments": "",
                "unit": "%",
                "value": "81.9",
                "name": "% Neutrophils",
                "codes": [
                    {
                        "name": "% Neutrophils",
                        "code": "770-8",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    },
                    {
                        "name": "Outside reference range",
                        "code": "394844007",
                        "codeSystemName": "SNOMED CT",
                        "inferred": true
                    }
                ]
            }
        ],
        "name": "AUTOMATED DIFF",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "AUTOMATED DIFF",
                "code": "57207",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf7fe3a2f6a0",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.749Z",
        "createdAt": "2020-03-09T16:52:53.749Z",
        "components": [
            {
                "refRange": ">=60 mL/min/1.73 m2",
                "componentComments": "",
                "value": ">60",
                "name": "eGFR, Non-AA",
                "codes": [
                    {
                        "name": "eGFR, Non-AA",
                        "code": "48642-3",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            },
            {
                "refRange": ">=60 mL/min/1.73 m2",
                "componentComments": "",
                "value": ">60",
                "name": "eGFR, AA",
                "codes": [
                    {
                        "name": "eGFR, AA",
                        "code": "48643-1",
                        "codeSystem": "2.16.840.1.113883.6.1",
                        "codeSystemName": "LOINC",
                        "inferred": false
                    }
                ]
            }
        ],
        "name": "GLOMERULAR FILTRATION RATE-ESTIMATED",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2016-09-25T13:41:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "GLOMERULAR FILTRATION RATE-ESTIMATED",
                "code": "57208",
                "codeSystem": "1.2.840.114350.1.13.87.2.7.2.696580",
                "codeSystemName": "Epic.EAP.ID",
                "inferred": false
            }
        ],
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
        "id": "5e6674575ee4bf3e76a2f50d",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:39.757Z",
        "createdAt": "2020-03-09T16:52:39.757Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG ADD VWS RT)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2014-09-15T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG ADD VWS RT)",
                "code": "22418005",
                "codeSystem": "2.16.840.1.113883.6.96",
                "codeSystemName": "SNOMED CT",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bf84e9a2f6c6",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.352Z",
        "createdAt": "2020-03-09T16:52:54.352Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG ADD VWS RT)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2014-09-15T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG ADD VWS RT)",
                "code": "111229",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674545ee4bf63aca2f4dd",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:37.554Z",
        "createdAt": "2020-03-09T16:52:37.554Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2014-09-10T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
                "code": "22418005",
                "codeSystem": "2.16.840.1.113883.6.96",
                "codeSystemName": "SNOMED CT",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bf7191a2f6c2",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.247Z",
        "createdAt": "2020-03-09T16:52:54.247Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2014-09-10T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
                "code": "111229",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674565ee4bf48efa2f4f7",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:39.056Z",
        "createdAt": "2020-03-09T16:52:39.056Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2012-11-09T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
                "code": "22418005",
                "codeSystem": "2.16.840.1.113883.6.96",
                "codeSystemName": "SNOMED CT",
                "inferred": false
            }
        ],
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
        "id": "5e6674665ee4bf1e35a2f6c4",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:54.258Z",
        "createdAt": "2020-03-09T16:52:54.258Z",
        "components": [],
        "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2012-11-09T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (MAMMOGRAM) (MAM DIG CAD SCREEN BI)",
                "code": "111229",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674605ee4bf516aa2f5e7",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.655Z",
        "createdAt": "2020-03-09T16:52:48.655Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (US PELVIS NON-OB US PELVIS ENDOVAG)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2012-11-08T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (US PELVIS NON-OB US PELVIS ENDOVAG)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674605ee4bfc49fa2f600",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:48.942Z",
        "createdAt": "2020-03-09T16:52:48.942Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (US PELVIS NON-OB US PELVIS ENDOVAG)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2007-07-09T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (US PELVIS NON-OB US PELVIS ENDOVAG)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674615ee4bf0fa2a2f60a",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:49.448Z",
        "createdAt": "2020-03-09T16:52:49.448Z",
        "components": [],
        "name": "SCANNED RESULT (IMAGING) (XR CHEST 2V)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "2005-01-21T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (IMAGING) (XR CHEST 2V)",
                "code": "111224",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bfa90aa2f6a6",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.857Z",
        "createdAt": "2020-03-09T16:52:53.857Z",
        "components": [],
        "name": "SCANNED RESULT (PROCEDURE) (REPEAT TRANSVERSE LOW SEGMENT CAESAREAN SECTION.)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "1994-10-28T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (PROCEDURE) (REPEAT TRANSVERSE LOW SEGMENT CAESAREAN SECTION.)",
                "code": "111226",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bfea22a2f6a4",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.849Z",
        "createdAt": "2020-03-09T16:52:53.849Z",
        "components": [],
        "name": "SCANNED RESULT (PROCEDURE) (REPEAT CESAREAN SECTION.)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "1989-07-30T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (PROCEDURE) (REPEAT CESAREAN SECTION.)",
                "code": "111226",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
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
        "id": "5e6674655ee4bf0d9aa2f6a8",
        "source": "55a83bdc8d1eb1420aa1a71b",
        "updatedAt": "2020-03-09T16:52:53.945Z",
        "createdAt": "2020-03-09T16:52:53.945Z",
        "components": [],
        "name": "SCANNED RESULT (PROCEDURE) (LOW - CERVICAL' CESAREAN :SECTIOR . PRIMARY)",
        "patient": {
            "name": ""
        },
        "recipients": [],
        "resultDateTime": "1986-07-06T00:00:00.000Z",
        "status": "completed",
        "allResults": [],
        "codes": [
            {
                "name": "SCANNED RESULT (PROCEDURE) (LOW - CERVICAL' CESAREAN :SECTIOR . PRIMARY)",
                "code": "111226",
                "codeSystem": "2.16.840.1.113883.6.12",
                "codeSystemName": "CPT-4",
                "inferred": false
            }
        ],
        "organization": {
            "id": "55a83bdc8d1eb1420aa1a71b",
            "name": "Starfleet Medical",
            "href": "/medical/organizations/55a83bdc8d1eb1420aa1a71b"
        },
        "ccd": {
            "id": "5e6674525ee4bffb61a2f4d0",
            "href": "/medical/ccds/5e6674525ee4bffb61a2f4d0"
        }
    }
]
```