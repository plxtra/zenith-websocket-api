---
title: "Trading:QueryTradingMarkets"
sidebar:
    label: QueryTradingMarkets
---

Requests the valid Trading Market definitions. Use the Provider property on an Account.

**Controller:** Trading\
**Topic:** `QueryTradingMarkets`\
**Action:** Publish\
**Permissions:** None

## Request

| Name     | Type   | Expect   | Description |
| :------  | :----- | :------- | :--- |
| Provider | String | Always   | The trading data provider to get Trading Markets for |
| Exchange | String | Optional | The base Exchange code to get Trading Markets for |

## Response

An unordered array of Trading Market objects.

### Trading Market object

A Trading Market is uniquely identified by the code.

| Name       | Type    | Expect   | Description |
| :--------- | :------ | :------- | :--- |
| Code       | String  | Always   | The code identifying this Trading Market. |
| Exchange   | String  | Optional | The Exchange this Trading Market is targeting. If omitted, this market may represent an off-exchange destination (eg: a best-market router). |
| IsLit      | Boolean | Always   | True if this Trading Market directly corresponds to a lit market, False if pricing is obscured or unavailable (dark market). |
| BestSource | String  | Optional | The best source Market for pricing this Trading Market, if available. Can be a Mixed Market. |
| Attributes | Object  | Optional | Any additional attributes describing this Trading Market. |

## Example

**Send:**
```json
{"Controller":"Trading","Topic":"QueryTradingMarkets","TransactionID":1,"Data":{"Provider":"Motif[Demo]"}}
```

**Receive:**
```json
{
 "Controller":"Trading",
 "Topic":"QueryTradingMarkets",
 "Data":
 [
  {
   "Code":"ASX", "Exchange":"ASX",
   "IsLit": true, "BestSource": "ASX"
  },
  {
   "Code":"ASX::CP", "Exchange":"ASX",
   "IsLit": false, "BestSource": "ASX"
  },
 ],
 "TransactionID":1
}
```
