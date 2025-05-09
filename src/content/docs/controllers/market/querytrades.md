---
title: "Market:QueryTrades"
sidebar:
    label: QueryTrades
---

Retrieves historical trades for a symbol.

This query is only available for symbols that offer **Trades** in their `SubscriptionData`.

**Controller:** Market\
**Topic:** `QueryTrades`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Market | String | Always | The code for the Market the symbol belongs to. Can be a Mixed Market code |
| Code | String | Always | The symbol code to retrieve trades for |
| Count | Integer | Optional | The number of trades to retrieve. If omitted, retrieves all trades for the day. |
| FirstTradeID | Integer | Optional | The oldest Trade ID to retrieve.If supplied, the query returns `Count` trades after this Trade. |
| LastTradeID | Integer | Optional | The newest Trade ID to retrieve. If supplied, the query returns `Count` trades before and including this Trade. If omitted, retrieves `Count` trades up to the most recent known. If supplied along with `FirstTradeID`, retrieves all trades within the range \(up to `Count` if supplied, starting from the oldest\) |
| TradingDate | Date | Optional | The date to retrieve trades for. If omitted, defaults to the most recent trading date |

## Response

An ordered array of zero or more Trade Change objects, to be applied in sequence. See the [Trades](../trades/#trade-change-object) subscription for more information

## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryTrades","TransactionID":1,"Data":{"Market":"ASX","Code":"BHP"}}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryTrades",
	"TransactionID":1,
	"Data":
	[
		{"O":"A","Trade":{"ID":"10001","Price":42.05,"Quantity":5000,"Time":"2014-03-20T10:00:01+10:00","Side":"B"}},
		...
		{"O":"A","Trade":{"ID":"10002","Price":42.06,"Quantity":400,"Time":"2014-03-20T10:00:05+10:00","Affects":"Volume,VWAP","Codes":"CX XT"}}
	]
}
```
