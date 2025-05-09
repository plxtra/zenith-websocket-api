---
title: "Market:QueryBrokers"
sidebar:
    label: QueryBrokers
---

Retrieves the valid Broker Codes for a particular Market

**Controller:** Market\
**Topic:** `QueryBrokers`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Market | String | Always | The code for the Market to query brokers for. Must be a top-level Market, cannot be Mixed |

## Response

An unordered array of Trading State objects

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Code   | String  | Always   | The text code for this Broker. Corresponds to the `Broker` property on a Depth Order and `BuyBroker`/`SellBroker` on a Trade |
| Name   | String  | Optional | The friendly name of this Broker, if available |
| ID     | Integer | Optional | A numeric identifier for this Broker, if available |

## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryBrokers","TransactionID":1,"Data":{"Market":"ASX"}}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryBrokers",
	"Data":
	[
		{"Code":"EurSec", "Name":"Euroz Securities Limited","ID":102},
		{"Code":"MFGSec", "Name":"MF Global Securities Australia Ltd","ID":104},
		...
		{"Code":"VivCrt", "Name":"Vivienne Court Trading Pty Ltd","ID":988}
	],
	"TransactionID":1
}
```

