---
title: "Fragments:QueryFragments"
sidebar:
    label: QueryFragments
---

Queries for custom pieces of data for a symbol.

*This is a legacy API and should not be used.*

**Controller:** Market\
**Topic:** `QueryFragments`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Market | String | Required. The code for the Market the symbol belongs to. |
| Code | String | Required. The symbol code to retrieve fragments for. |
| Fragments | Array | Required. The fragment definitions to retrieve. |
| TradingDate | DateTime | Optional. The trading date to retrieve fragments for. If omitted, retrieves fragments for the current trading date of the provided market |

## Fragment Definition object

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Name | String | Required. The name of the Fragment in the output |
| Source | String | Optional. The name of the Fragment to retrieve. If omitted, uses the Name |
|  |  | Zero or more extra fields, determined by the fragment being requested |

## Response

An object containing the fragment data, with the Name fields used as property names.

## Example

```javascript
websocket.send(JSON.stringify(
{
 Controller:"Fragments",
 Topic:"QueryFragments",
 TransactionID:1,
 Data:
 {
  Code:"BHP",
  Market:"ASX",
  Fragments:
  [
   { Name:"Top100", Data:"Fundamentals.TopShareholders"}
  ]
 }
}));
```

**Sample Response:**

```javascript
{
 "Controller":"Fragments",
 "Topic":"QueryFragments",
 "TransactionID":1,
 "Data":
 {
  "Top100":
  [
   { "Name":"ABC Holdings" }
  ]
 }
}
```

