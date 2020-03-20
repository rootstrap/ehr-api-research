**Endpoint:**

### https://api.1up.health/fhir/dstu2/Practitioner

**Response:**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 8,
  "entry": [
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/2de9253687c3",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "410921",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "TxPf-2k10wDuh3VGWxdtkxgB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:52.053Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Medical", "Director"],
          "text": "Medical Director Hspc, MD",
          "family": ["Hspc"],
          "suffix": ["MD"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "2de9253687c3",
        "communication": [
          {
            "coding": [
              {
                "system": "urn:oid:2.16.840.1.113883.6.99",
                "code": "en",
                "display": "English"
              }
            ],
            "text": "English"
          }
        ]
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/31903d3bb791",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "1000",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "207Q00000X",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.7"
          },
          {
            "value": "1100099997",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.60"
          },
          {
            "value": "6011",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.63"
          },
          {
            "value": "T3Mz3KLBDVXXgaRoee3EKAAB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.868Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Physician"],
          "text": "Physician Family Medicine",
          "family": ["Family Medicine"],
          "use": "usual"
        },
        "gender": "male",
        "active": true,
        "resourceType": "Practitioner",
        "id": "31903d3bb791"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/465efd946568",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "1011",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "208D00000X",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.7"
          },
          {
            "value": "1101199994",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.60"
          },
          {
            "value": "TEMP1011",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.63"
          },
          {
            "value": "TSWuD1FvxIYwmV5YRQX3sPgB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:53.947Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Generic", "Provider"],
          "text": "Generic Provider Mychart, MD",
          "family": ["Mychart"],
          "suffix": ["MD"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "465efd946568"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/6bc8e0032ced",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "10001",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "TEMP10001",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.63"
          },
          {
            "value": "TFPkggBo9HaiYYMHToL5QwAB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.825Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Physician"],
          "text": "Physician Adolescent",
          "family": ["Adolescent"],
          "use": "usual"
        },
        "gender": "male",
        "active": true,
        "resourceType": "Practitioner",
        "id": "6bc8e0032ced"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/99c389c2674d",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "TItWfhjChtlo0pFh9nzctSQB",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:53.490Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Nick"],
          "text": "Nick Moore",
          "family": ["Moore"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "99c389c2674d"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/9ed87921cf7a",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "400001",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "TzW3hjA1lSMLKP-aLw.oyZgB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.592Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Nurse"],
          "text": "Nurse Inpatient, RN",
          "family": ["Inpatient"],
          "suffix": ["RN"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "9ed87921cf7a"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/c9d9b5f2ff14",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "1015",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "TJIwbotDwiZ6wgU-.V1OgUAB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.228Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Physician", "Cdr"],
          "text": "Physician Cdr Inpatient, MD",
          "family": ["Inpatient"],
          "suffix": ["MD"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "c9d9b5f2ff14"
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Practitioner/ffb211d9ab79",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "1041",
            "use": "usual",
            "system": "PROVID"
          },
          {
            "value": "207RE0101X",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.7"
          },
          {
            "value": "1104199991",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.60"
          },
          {
            "value": "TEMP1041",
            "use": "usual",
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.5.737384.63"
          },
          {
            "value": "TiL.nRs1xolOuO8ocYkRcewB",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.719Z",
          "versionId": "9000000000000"
        },
        "name": {
          "given": ["Physician"],
          "text": "Physician Endocrinology, MD",
          "family": ["Endocrinology"],
          "suffix": ["MD"],
          "use": "usual"
        },
        "gender": "other",
        "active": true,
        "resourceType": "Practitioner",
        "id": "ffb211d9ab79"
      }
    }
  ]
}
```
