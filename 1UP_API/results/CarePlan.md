**Endpoint:**

### https://api.1up.health/fhir/dstu2/CarePlan

**Response:**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 1,
  "entry": [
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/CarePlan/d47f763e7c7f686af51544b15ede60429843b787ef0bf58e",
      "search": {
        "mode": "match"
      },
      "resource": {
        "activity": [
          {
            "detail": {
              "category": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/care-plan-activity-category",
                    "code": "procedure",
                    "display": "Procedure"
                  }
                ],
                "text": "procedure"
              },
              "prohibited": false,
              "code": {
                "text": "ADULT DIET"
              }
            }
          },
          {
            "detail": {
              "category": {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/care-plan-activity-category",
                    "code": "procedure",
                    "display": "Procedure"
                  }
                ],
                "text": "procedure"
              },
              "prohibited": false,
              "code": {
                "text": "CARDIAC EVENT MONITOR"
              }
            }
          }
        ],
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "identifier": [
          {
            "value": "TUKRxL29bxE9lyAcdTIyrWC6Ln5gZ-z7CLr2r-2SY964B",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.965Z",
          "versionId": "9000000000000"
        },
        "status": "active",
        "addresses": [
          {
            "reference": "Condition/d47f763e7c7f44db7d83a6a08e4b49fdcfd7b5ca40f1f619",
            "display": "Dog bite"
          },
          {
            "reference": "Condition/d47f763e7c7f34d10ac468f6b5afaa9601889a3ff8cdd619",
            "display": "TB (pulmonary tuberculosis)"
          },
          {
            "reference": "Condition/d47f763e7c7f2a02dd8d6444e3ea3ed2c572cccd34a37804",
            "display": "Diabetes mellitus type 2, uncomplicated"
          }
        ],
        "resourceType": "CarePlan",
        "category": [
          {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "38717003",
                "display": "Longitudinal"
              }
            ],
            "text": "Longitudinal"
          }
        ],
        "id": "d47f763e7c7f686af51544b15ede60429843b787ef0bf58e"
      }
    }
  ]
}
```
