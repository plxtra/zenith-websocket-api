---
title: "Market:QueryTickTables"
sidebar:
    label: QueryTickTables
---

Retrieves the Tick Tables that describe valid price steps for a particular Market

**Controller:** Market\
**Topic:** `QueryTickTables`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Market | String  | Always   | The code for the Market to query Tick Tables for. Can be a Mixed Market code \(ie: ASX!ASX+CXA\) |

## Response

An unordered array of Tick Table objects

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code   | String  | Always   | The code for this Tick Table. Corresponds to the `TickTable` property on Security. |
| Steps  | Array   | Always   | An array of Tick Rate objects for this Tick Table, in order from lowest to highest. |

### Tick Rate object

Describes the valid price steps within a range of prices

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Low    | Decimal | Always   | The lowest price (inclusive) at which this price step takes effect. |
| High   | Decimal | Always   | The highest price (exclusive) at which this price step takes effect. |
| Size   | Decimal | Always   | The size of each price step within this range. All prices should be divisible by this value without remainder. |


## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryTickTables","TransactionID":1,"Data":{"Market":"ASX"}}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryTickTables",
	"Data":
	[
		{"Code":"T0", "Steps":
		[
			{"Low":0.0, "High":0.1, "Size": 0.001"},
			{"Low":0.1, "High":2.0, "Size": 0.005"},
			{"Low":2.0, "High":9999999999.99, "Size": 0.01"}
		]},
	],
	"TransactionID":1
}
```

