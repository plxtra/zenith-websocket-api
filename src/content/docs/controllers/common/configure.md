---
title: "*:Configure"
sidebar:
    label: Configure
---

Sets up the server-side operation timeouts.

**Controller:** \*\
**Topic:** `Configure`\
**Action:** Publish\
**Permissions:** None

## Request

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| ActionTimeout       | Time   | Optional | The amount of time to allow before an Query will return with the error _Operation.Timeout_. If omitted, defaults to 35 seconds. |
| SubscriptionTimeout | Time   | Optional | The amount of time to allow before a subscription request will fail with the error _Operation.Timeout_. If omitted, defaults to 35 seconds. |

See [Data Types](../../../fundamentals/exchanging-data/data-types#time/) for Time formatting.

## Response

No Response Body

## Example

**Request:**
```json
{"Controller":"Market","Topic":"Configure","TransactionID":123,"Data":{"ActionTimeout":"00:01:00"}}
```

**Response:**
```json
{"Controller":"Market","Topic":"Configure","TransactionID":123}
```
