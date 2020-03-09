**Endpoint:**

### https://api.1up.health/fhir/dstu2/DiagnosticReport

**Response:**

```json
{
    "resourceType": "Bundle",
    "type": "searchset",
    "total": 2,
    "entry": [
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/DiagnosticReport/3d3d15496c25589f9745e727febb2668c01f39f6be9cfadd",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/3d3d15496c25"
                },
                "identifier": [
                    {
                        "value": "7211539",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:39:11.195Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2017-10-25T12:00:00.000Z",
                "presentedForm": [
                    {
                        "title": "2 COl Template",
                        "contentType": "text/html",
                        "url": "https://api.1up.health/fhir/dstu2/Binary/0a77fff47cbc"
                    },
                    {
                        "title": "2 COl Template",
                        "contentType": "application/pdf",
                        "url": "https://api.1up.health/fhir/dstu2/Binary/a473cab24758"
                    }
                ],
                "text": {
                    "div": "<div><p><b>Diagnostic Report</b></p><p><b>Document Type</b>: CT Report</p><p><b>Document Title</b>: 2 COl Template</p><p><b>Effective Date</b>: 2017-10-25T12:00:00.000Z</p><p><b>Issued</b>: 2017-10-25T13:26:05.000Z</p><p><b>Patient</b>: SMART, WILMA</p><p><b>Status</b>: Final</p><p><b>Verifying Provider</b>: SWL, PW</p></div>",
                    "status": "additional"
                },
                "issued": "2017-10-25T13:26:05.000Z",
                "code": {
                    "text": "CT Report"
                },
                "encounter": {
                    "reference": "Encounter/3d3d15496c252b783088ff7a2850c6c4bfc147c66867d0ff"
                },
                "resourceType": "DiagnosticReport",
                "category": {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0074",
                            "code": "RAD",
                            "userSelected": false,
                            "display": "Radiology"
                        }
                    ],
                    "text": "CT Report"
                },
                "performer": {
                    "reference": "Practitioner/52521c664edf",
                    "display": "SWL, PW"
                },
                "id": "3d3d15496c25589f9745e727febb2668c01f39f6be9cfadd"
            }
        },
        {
            "fullUrl": "https://api.1up.health/fhir/dstu2/DiagnosticReport/3d3d15496c259bcb7f7a12d7b725fd82872341887cd98a3b",
            "search": {
                "mode": "match"
            },
            "resource": {
                "subject": {
                    "reference": "Patient/3d3d15496c25"
                },
                "identifier": [
                    {
                        "value": "7765493",
                        "system": "https:fhir-myrecord.sandboxcerner.com"
                    }
                ],
                "meta": {
                    "lastUpdated": "2020-03-05T13:39:11.254Z",
                    "versionId": "9000000000002"
                },
                "status": "final",
                "effectiveDateTime": "2018-03-01T17:47:16.000Z",
                "presentedForm": [
                    {
                        "title": "MA Mammogram Routine Screening Bilat",
                        "contentType": "text/html",
                        "url": "https://api.1up.health/fhir/dstu2/Binary/fa0c8167627b"
                    },
                    {
                        "title": "MA Mammogram Routine Screening Bilat",
                        "contentType": "application/pdf",
                        "url": "https://api.1up.health/fhir/dstu2/Binary/d3bc15fe95ce"
                    }
                ],
                "text": {
                    "div": "<div><p><b>Diagnostic Report</b></p><p><b>Document Type</b>: RADRPT</p><p><b>Document Title</b>: MA Mammogram Routine Screening Bilat</p><p><b>Effective Date</b>: 2018-03-01T17:47:16.000Z</p><p><b>Issued</b>: 2018-03-01T17:49:59.000Z</p><p><b>Patient</b>: SMART, WILMA</p><p><b>Status</b>: Final</p><p><b>Verifying Provider</b>: Pickering, Kathy</p><p><b>Ordering Provider</b>: <ul><li>Hopper, Grace</li></ul></p></div>",
                    "status": "additional"
                },
                "issued": "2018-03-01T17:49:59.000Z",
                "code": {
                    "text": "RADRPT"
                },
                "encounter": {
                    "reference": "Encounter/3d3d15496c252b783088ff7a2850c6c4bfc147c66867d0ff"
                },
                "resourceType": "DiagnosticReport",
                "category": {
                    "text": "RADRPT"
                },
                "performer": {
                    "reference": "Practitioner/936b37fa423a",
                    "display": "Pickering, Kathy"
                },
                "id": "3d3d15496c259bcb7f7a12d7b725fd82872341887cd98a3b",
                "request": [
                    {
                        "reference": "ProcedureRequest/3d3d15496c259d4902e002306a74a2397b9e29dd1bccdc42"
                    }
                ]
            }
        }
    ]
}
```