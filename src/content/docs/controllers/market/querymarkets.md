---
title: "Market:QueryMarkets"
sidebar:
    label: QueryMarkets
---

Requests the available Markets for the authenticated user.

**Controller:** Market\
**Topic:** `QueryMarkets`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

An unordered array of Market State objects. See the [Markets](../markets/#market-state-object) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryMarkets","TransactionID":1}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryMarkets",
	"TransactionID":1,
	"Data":
	[
		{"Code":"ASX","Feed":"Active","TradingDate":"2014-02-11","MarketTime":"2014-02-11T12:44:02+10:00","Status":"Open"}
	]
}
```
