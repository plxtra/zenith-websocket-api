---
title: "*:QueryConfigure"
sidebar:
    label: QueryConfigure
---

Retrieves the currently configured server-side timeouts.

**Controller:** \*\
**Topic:** `QueryConfigure`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

| Name                | Type   | Expect   | Description |
| :------------------ | :----- | :------- | :--- |
| ActionTimeout       | Time   | Optional | The amount of time to allow before an Action will return with the error _Operation.Timeout_. If omitted, defaults to 35 seconds. |
| SubscriptionTimeout | Time   | Optional | The amount of time to allow before a subscription request will fail with the error _Operation.Timeout_. If omitted, defaults to 35 seconds. |

See [Data Types](../../../fundamentals/exchanging-data/data-types/#time) for Time formatting.

## Example

**Request:**
```json
{"Controller":"Trading","Topic":"QueryConfigure","TransactionID":123}
```

**Response:**
```json
{"Controller":"Trading","Topic":"QueryConfigure","TransactionID":123,,"Data":{"ActionTimeout":"00:00:35","SubscriptionTimeout":"00:00:35"}}
```
