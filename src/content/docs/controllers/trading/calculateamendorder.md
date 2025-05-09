---
title: "Trading:CalculateAmendOrder"
sidebar:
    label: CalculateAmendOrder
---

Calculates an Order being amended

**Controller:** Trading\
**Topic:** `CalculateOrder`\
**Action:** Publish\
**Permissions:** Zenith/OrderPad

## Request

See the [AmendOrder](../amendorder/#request) action for the request object structure

## Response

See the [AmendOrder](../amendorder/#response) action for the output object structure. A result of success means the Order's value and brokerage could be calculated, but does not guarantee it can be amended.

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
  "OrderID":"00000000-0000-0000-CDEF-123456789ABC",
  "Details":
  {
   "Exchange":"ASX[Demo]",
   "Code":"BHP",
   "Style":"Equity",
   "Side":"Bid",
   "Quantity":150,
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

