---
title: "Market:QuerySecurity"
sidebar:
    label: QuerySecurity
---

Retrieves the current state of a security.

This query is only available for symbols that offer **Asset** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `QuerySecurity`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name | Type | Description |
| :--- | :--- | :--- |
| Market | String | Required. The code for the Market the symbol belongs to. Can be a Mixed Market code |
| Code | String | Required. The symbol code to retrieve state for |

## Response

A Security object with all available fields populated. See the [Security](../security/#security-object) subscription for more information.

**Code Example**

```javascript
websocket.send(JSON.stringify(
{
  Controller:"Market",
  Topic:"QuerySecurity",
  TransactionID:1,
  Data:
  {
   Market:"ASX",
   Code:"BHP"
  }
});
```

**Sample Response:**

```javascript
{
 "Controller":"Market",
 "Topic":"QuerySecurity",
 "TransactionID":1,
 "Data":
 {
  "Code":"BHP",
  "Market":"ASX",
  "Last":10.0
  /* Further fields omitted for brevity */
 }
}
```

