---
title: "Trading:CalculatePlaceOrder"
sidebar:
    label: CalculatePlaceOrder
---

Calculates an Order being placed

**Controller:** Trading\
**Topic:** `CalculateOrder`\
**Action:** Publish\
**Permissions:** Zenith/OrderPad

## Request

See the [PlaceOrder](../placeorder#request/) query for the request object structure

## Response

See the [PlaceOrder](../placeorder#response/) query for the output object structure. A result of success means the Order's value and brokerage could be calculated, but does not guarantee it can be placed.

## Example

**Send:**
```json
{
 "Controller":"Trading",
 "Topic":"CalculateOrder",
 "TransactionID":1,
 "Data":
 {
  "Account":"1234[Demo]",
  "Details":
  {
   "Exchange":"ASX[Demo]",
   "Code":"BHP",
   "Style":"Equity",
   "Side":"Bid",
   "Quantity":100,
   "Type":"MarketToLimit"
  },
  "Route":
  {
   "Algorithm":"Market",
   "Market":"CXA::LI[Demo]"
  }
 }
}
```
