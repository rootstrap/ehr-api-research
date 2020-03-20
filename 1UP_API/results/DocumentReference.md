**Endpoint:**

### https://api.1up.health/fhir/dstu2/DocumentReference

**Response:**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 5,
  "entry": [
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/DocumentReference/d47f763e7c7f118b163a710a2624bb31fbde03def531cac5",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "url": "https://api.1up.health/fhir/dstu2/Binary/2b322d4145f3"
            }
          }
        ],
        "indexed": "2020-03-18T14:41:53.069Z",
        "identifier": [
          {
            "value": "Tr0n8U6VUO4hlTQ1O4j1tqfUrtj9mT09lZuPTzybVCrA12ZP5f7mEQsk1iDdXHepNQp7bJ8YuUMGmttHzrXl1GwB",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:53.052Z",
          "versionId": "9000000000001"
        },
        "status": "current",
        "created": "2016-12-08T00:00:00Z",
        "class": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Summarization of Episode Note"
            }
          ],
          "text": "Summarization of Episode Note"
        },
        "resourceType": "DocumentReference",
        "id": "d47f763e7c7f118b163a710a2624bb31fbde03def531cac5",
        "masterIdentifier": {
          "value": "1.2.840.114350.1.13.0.1.7.8.688883.14013"
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "34133-9",
              "display": "Summarization of Episode Note"
            }
          ],
          "text": "Summarization of Episode Note"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/DocumentReference/d47f763e7c7f164745b6fac7b219eee111e56c0e0d8c1778",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "url": "https://api.1up.health/fhir/dstu2/Binary/968901106b5f"
            }
          }
        ],
        "indexed": "2020-03-18T14:41:51.054Z",
        "identifier": [
          {
            "value": "TiuU2nxVxk2Q21KlZetTwyxvCYnUao-TcKkVo6n1qLRWKRxaI6gmegFE0Li5tZmKUhV4BmWWpscFABSno5D1sYOEeNhsQjOAOFg4BQBYFmy4B",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:51.052Z",
          "versionId": "9000000000001"
        },
        "status": "current",
        "created": "2020-02-18T00:00:00Z",
        "class": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        },
        "resourceType": "DocumentReference",
        "context": {
          "period": {
            "start": "2015-09-04T17:10:00Z",
            "end": "2015-10-04T16:38:00Z"
          }
        },
        "id": "d47f763e7c7f164745b6fac7b219eee111e56c0e0d8c1778",
        "masterIdentifier": {
          "value": "1.2.840.114350.1.13.0.1.7.8.688883.12358739497"
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/DocumentReference/d47f763e7c7f8e0399ce3d22b8d83fda001dd4ca076eede2",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "url": "https://api.1up.health/fhir/dstu2/Binary/0b7c2f885655"
            }
          }
        ],
        "indexed": "2020-03-18T14:41:50.512Z",
        "identifier": [
          {
            "value": "TuTDCo93ooVEi8WMOMQuaMYrttQOq3L5R2gkqYrBesO.GZ4DSKNO5wiNb5WU5HfaDqmy2BQiZVCYrJNJDeYmzYoW.x9FViIHPbSAbwnITsJ0B",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:50.511Z",
          "versionId": "9000000000000"
        },
        "status": "current",
        "created": "2020-02-18T00:00:00Z",
        "class": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        },
        "resourceType": "DocumentReference",
        "context": {
          "period": {
            "start": "2015-10-04T16:43:54Z",
            "end": "2016-01-09T20:32:11Z"
          }
        },
        "id": "d47f763e7c7f8e0399ce3d22b8d83fda001dd4ca076eede2",
        "masterIdentifier": {
          "value": "1.2.840.114350.1.13.0.1.7.8.688883.12358739495"
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/DocumentReference/d47f763e7c7fa8a2fa66868adfbf0dcee7d737436ada9665",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "url": "https://api.1up.health/fhir/dstu2/Binary/43191c13fbf2"
            }
          }
        ],
        "indexed": "2020-03-18T14:41:50.971Z",
        "identifier": [
          {
            "value": "TbnCkp0Z8YbYkQ8B0H3.YIJ5kheOO8ga4YHXMuGyixcXsctOvBreuOjjbyqVW38exVxshG8ttxlg2XVKdO7nA1XbJ672XM6dEXfhE2i8Ra70B",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:50.970Z",
          "versionId": "9000000000001"
        },
        "status": "current",
        "created": "2020-02-18T00:00:00Z",
        "class": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        },
        "resourceType": "DocumentReference",
        "context": {
          "period": {
            "start": "2016-04-24T00:00:00Z"
          }
        },
        "id": "d47f763e7c7fa8a2fa66868adfbf0dcee7d737436ada9665",
        "masterIdentifier": {
          "value": "1.2.840.114350.1.13.0.1.7.8.688883.12358739494"
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/DocumentReference/d47f763e7c7fcd2881f25baca5a473db9fc8ab54301816a1",
      "search": {
        "mode": "match"
      },
      "resource": {
        "subject": {
          "reference": "Patient/d47f763e7c7f"
        },
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "url": "https://api.1up.health/fhir/dstu2/Binary/e797eb8ce5ea"
            }
          }
        ],
        "indexed": "2020-03-18T14:41:50.388Z",
        "identifier": [
          {
            "value": "T9gcbtTItltmwGmGW0mH.k.KjFb-pclB7VKXstCUO.u8t0sqxHLr-S9XU2I6F6SQo2sNCNuONy5RfNdYUv5R6r1I1cj9KyF7.oQv7hY-CLvQB",
            "system": "https:open-ic.epic.com"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:50.388Z",
          "versionId": "9000000000000"
        },
        "status": "current",
        "created": "2020-02-18T00:00:00Z",
        "class": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        },
        "resourceType": "DocumentReference",
        "context": {
          "period": {
            "start": "2016-01-09T20:33:43Z"
          }
        },
        "id": "d47f763e7c7fcd2881f25baca5a473db9fc8ab54301816a1",
        "masterIdentifier": {
          "value": "1.2.840.114350.1.13.0.1.7.8.688883.12358739496"
        },
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "11506-3",
              "display": "Subsequent evaluation note"
            }
          ],
          "text": "Subsequent evaluation note"
        }
      }
    }
  ]
}
```
