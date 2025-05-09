---
title: "Market:QueryDepthLevels"
sidebar:
    label: QueryDepthLevels
---

Retrieves the current Price Levels in Market Depth for a symbol.

This query is only available for symbols that offer **DepthShort** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `QueryDepthLevels`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Market | String | Required. The code for the Market the symbol belongs to. Can be a Mixed Market code |
| Code | String | Required. The symbol code to retrieve depth for |

## Response

An ordered array of Depth Level Change objects, to be applied in sequence. See the [Levels](../levels/#level-change-object) subscription for more information.

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"QueryDepthLevels",
 TransactionID:1,
 Data:
 {
  Code:"BHP",
  Market:"ASX"
 }
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"QueryDepthLevels",
 "TransactionID":1,
 "Data":
 [
  {
   "O":"C"
  },
  {
   "O":"A",
   "Level":
   {
    "ID":"00000001-0000-0000-0000-000000000001",
    "Side":"Bid",
    "Price":15.2,
    "Volume":10
   }
  }
 ]
}
```

