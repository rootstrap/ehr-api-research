**Endpoint:**

### https://api.1up.health/fhir/dstu2/Procedure

**Response:**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 1,
  "entry": [
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/Procedure/d47f763e7c7f1410cccc75cc9f32583eaf85939108aad8a7",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "performedDateTime": "2015-10-06T19:20:00.000Z",
        "notPerformed": false,
        "identifier": [
          {
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.798268",
            "type": {
              "text": "ORD"
            },
            "value": "975888",
            "use": "usual"
          },
          {
            "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.696580",
            "type": {
              "text": "EAP"
            },
            "value": "40707",
            "use": "usual"
          },
          {
            "value": "T5LC5ZmmCN1ipOojr0hHgomdj2J97qP4is2ElboI51w4B",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:49.477Z",
          "versionId": "9000000000000"
        },
        "status": "completed",
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.840.114350.1.13.0.1.7.2.696580",
              "code": "40707",
              "display": "EYE EXAM"
            }
          ],
          "text": "EYE EXAM"
        },
        "resourceType": "Procedure",
        "reasonCodeableConcept": {
          "coding": [
            {
              "system": "urn:oid:2.16.840.1.113883.6.103",
              "code": "V70.0",
              "display": "Routine medical exam"
            }
          ],
          "text": "Routine medical exam"
        },
        "id": "d47f763e7c7f1410cccc75cc9f32583eaf85939108aad8a7"
      }
    }
  ]
}
```
