---
title: "Market:QueryDepthFull"
sidebar:
    label: QueryDepthFull
---

Retrieves the current full market depth for a symbol.

This query is only available for symbols that offer **DepthFull** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `QueryDepthFull`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Market | String | Required. The code for the Market the symbol belongs to. Can be a Mixed Market code |
| Code | String | Required. The symbol code to retrieve depth for |

## Response

An unordered array of Depth Change objects, containing a single clear followed by Additions for all the current Orders. See the [Depth](../depth/#depth-change-object) subscription for more information.

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Market",
 Topic:"QueryDepthFull",
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
 "Topic":"QueryDepthFull",
 "TransactionID":1,
 "Data":
 [
  {
   "O":"C"
  },
  {
   "O":"A",
   "Order":
    {
     "ID":"5c797301-0001-bfe6-0000-000000000031",
     "Side":"Bid",
     "Price":0.01,
     "Position":28,
     "Quantity":1
    }
  }
 ]
}
```

