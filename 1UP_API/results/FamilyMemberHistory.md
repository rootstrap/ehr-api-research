**Endpoint:**

### https://api.1up.health/fhir/dstu2/FamilyMemberHistory

**Response:**

```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 297,
  "entry": [
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f002319c33488dca8b61c7b2ac20b5c9d848e",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "hqnlt7tky2d",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:52.644Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "12",
            "note": {
              "text": "Also went by alias \"Uncle Ruckus\""
            },
            "code": {
              "text": "Vitiligo"
            }
          }
        ],
        "deceasedBoolean": true,
        "name": "Deadman",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f002319c33488dca8b61c7b2ac20b5c9d848e",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "FTH",
              "display": "Father"
            }
          ],
          "text": "Father"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f02390c12b09e4b0f89d1c4b718bd0e3c2842",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "rn2tm7g15bn",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:45:54.461Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "deceasedBoolean": false,
        "name": "Joe",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f02390c12b09e4b0f89d1c4b718bd0e3c2842",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "BRO",
              "display": "Brother"
            }
          ],
          "text": "Brother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f03e9e364d7046f23d9e1b256727d061760d3",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "pfhma0gy65h",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:46:57.753Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "40",
            "note": {
              "text": "Comments for Mother Family History"
            },
            "code": {
              "text": "Achondroplasia"
            }
          }
        ],
        "deceasedBoolean": false,
        "name": "Molly",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f03e9e364d7046f23d9e1b256727d061760d3",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "MTH",
              "display": "Mother"
            }
          ],
          "text": "Mother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f04992f5fe694ebc745ff0b672c9a0637de9b",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "e3x4l7je1dw",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T15:00:15.718Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "40",
            "note": {
              "text": "Comments for Mother Family History"
            },
            "code": {
              "text": "Achondroplasia"
            }
          }
        ],
        "deceasedBoolean": false,
        "name": "Molly",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f04992f5fe694ebc745ff0b672c9a0637de9b",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "MTH",
              "display": "Mother"
            }
          ],
          "text": "Mother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f05339ceeca45194e6f37dd20c006a700c386",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "ftctmsbayqm",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T15:27:13.452Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "12",
            "note": {
              "text": "Also went by alias \"Uncle Ruckus\""
            },
            "code": {
              "text": "Vitiligo"
            }
          }
        ],
        "deceasedBoolean": true,
        "name": "Deadman",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f05339ceeca45194e6f37dd20c006a700c386",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "FTH",
              "display": "Father"
            }
          ],
          "text": "Father"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f06396fd3e207e38fd65f634be83515cfb138",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "fzi6cdw6kas",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T15:02:17.465Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "deceasedBoolean": false,
        "name": "Joe",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f06396fd3e207e38fd65f634be83515cfb138",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "BRO",
              "display": "Brother"
            }
          ],
          "text": "Brother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f0734e80e66cc28cb50b0dda31cf2dc0f7fc7",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "c23wftmb9gf",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:41:49.951Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "deceasedBoolean": false,
        "name": "Joe",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f0734e80e66cc28cb50b0dda31cf2dc0f7fc7",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "BRO",
              "display": "Brother"
            }
          ],
          "text": "Brother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f07b2c2da1811cc9b8cc77bda57161797d678",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "hs4tc9gjuai",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T15:47:57.779Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "deceasedBoolean": false,
        "name": "Joe",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f07b2c2da1811cc9b8cc77bda57161797d678",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "BRO",
              "display": "Brother"
            }
          ],
          "text": "Brother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f07d8a1dde52cbaa544af3d3a707f57904c42",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "3j5bv4hcyle",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T14:59:41.605Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "40",
            "note": {
              "text": "Comments for Mother Family History"
            },
            "code": {
              "text": "Achondroplasia"
            }
          }
        ],
        "deceasedBoolean": false,
        "name": "Molly",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f07d8a1dde52cbaa544af3d3a707f57904c42",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "MTH",
              "display": "Mother"
            }
          ],
          "text": "Mother"
        }
      }
    },
    {
      "fullUrl": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory/d47f763e7c7f07e887ee207364a151f443d5a5a49f910ca1",
      "search": {
        "mode": "match"
      },
      "resource": {
        "identifier": [
          {
            "value": "34z5i2g3jeg",
            "use": "usual",
            "system": "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2"
          }
        ],
        "meta": {
          "lastUpdated": "2020-03-18T15:00:17.997Z",
          "versionId": "9000000000000"
        },
        "status": "partial",
        "condition": [
          {
            "onsetString": "12",
            "note": {
              "text": "Also went by alias \"Uncle Ruckus\""
            },
            "code": {
              "text": "Vitiligo"
            }
          }
        ],
        "deceasedBoolean": true,
        "name": "Deadman",
        "patient": {
          "reference": "Patient/d47f763e7c7f"
        },
        "date": "2016-04-07",
        "resourceType": "FamilyMemberHistory",
        "id": "d47f763e7c7f07e887ee207364a151f443d5a5a49f910ca1",
        "relationship": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/ValueSet/v3-FamilyMember",
              "code": "FTH",
              "display": "Father"
            }
          ],
          "text": "Father"
        }
      }
    }
  ],
  "link": [
    {
      "relation": "self",
      "url": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory"
    },
    {
      "relation": "next",
      "url": "https://api.1up.health/fhir/dstu2/FamilyMemberHistory?_afterid=d47f763e7c7f07e887ee207364a151f443d5a5a49f910ca1"
    }
  ]
}
```
