---
title: "News:QueryNews"
sidebar:
    label: QueryNews
---

Retrieves historical news announcement headlines

**Controller:** News\
**Topic:** QueryNews\
**Action:** Publish\
**Permissions:** Zenith/News

## Request

| Name                | Type   | Expect   | Description |
| :------------------ | :----- | :------- | :--- |
| Source | String | Optional | The code for the News Source to filter by. If omitted, retrieves from all available News Sources |
| Exchange | String | Optional | The code for the issuing Exchange to filter results by. If omitted, defaults to all Exchanges. If provided, Code must also be provided |
| Code | String | Optional | The symbol code to retrieve news for. If provided, _Exchange_ must also be provided |
| Count | Integer | Optional | The number of announcements to retrieve. If omitted, retrieves all news for the day. |
| StartTime | DateTime | Optional | The minimum date and time to retrieve news for. |
| EndTime | DateTime | Optional | The maximum date and time to retrieve news for. |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#datetime) for DateTime formatting.

## Response

An unordered array of News Data objects. See the [News](../news/#news-data-object) subscription for more information.

## Example

Retrieve the hundred most recent announcements:

**Request:**
```json
{"Controller":"News","Topic":"QueryNews","TransactionID":123,"Data"{"Source":"ASX","Count":100}}
```

**Response:**
```json
{"Controller":"News","Topic":"QueryNews","TransactionID":123,"Data":[]}
```
