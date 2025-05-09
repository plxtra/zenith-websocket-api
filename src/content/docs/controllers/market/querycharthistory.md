---
title: "Market:QueryChartHistory"
sidebar:
    label: QueryChartHistory
---

Retrieves charting history data for a symbol.

**Controller:** Market\
**Topic:** `QueryChartHistory`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Market | String | Always | The code for the Market the symbol belongs to. Can be a Mixed Market code. |
| Code | String | Always | The symbol code to retrieve history for |
| Count | Integer | Optional | The number of records to retrieve. If omitted, retrieves all available. |
| Period | TimeSpan | Optional | The time period to retrieve records for. If omitted, defaults to one day. Valid periods: **00:01:00** – Retrieves 1-minute records **00:05:00** – Retrieves 5-minute records **00:15:00** – Retrieves 15-minute records **00:30:00** – Retrieves 30-minute records **1.00:00:00** – Retrieves daily records |
| FromDate | DateTime | Optional | The minimum date and time to retrieve records for. If specifying a period of daily or larger, the time value is ignored and should be midnight \(00:00:00\) |
| ToDate | DateTime | Optional | The maximum date and time to retrieve records for. If specifying a period of daily or larger, the time value is ignored and should be midnight \(00:00:00\) |

This method supports all combinations of From, To and Count.

| From | To | Count | Description |
| :--- | :- | :---- | :--- |
|      |    |       | Retrieve all records |
| X    |    |       | Retrieve all records after From date |
|      | X  |       | Retrieve all records before To date |
|      |    | X     | Retrieve Count newest records before the current date |
| X    |    | X     | Retrieve Count oldest records after From date |
| X    | X  |       | Retrieve all records between From and To date |
|      | X  | X     | Retrieve Count newest records before To date |
| X    | X  | X     | Retrieve Count newest records between From and To date |

## Response

An unordered array of Chart Records.

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Date   | DateTime | Always | The date and time of this record. If specifying a period of daily or larger, the time value will be omitted. |
| Open   | Decimal | Optional | The opening price. If omitted, did not trade in this period. |
| High   | Decimal | Optional | The high price. If omitted, did not trade in this period. |
| Low    | Decimal | Optional | The low price. If omitted, did not trade in this period. |
| Close  | Decimal | Optional | The closing price. If omitted, did not trade in this period. |
| Volume | Decimal | Optional | The total volume traded. If omitted, did not trade in this period. |
| Trades | Integer | Optional | The total number of trades. If omitted, did not trade in this period, or the data is unavailable. |

## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryChartHistory","TransactionID":1,"Data":{"Market":"ASX","Code":"BHP","Count":1}}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryChartHistory",
	"TransactionID":1,
	"Data":
	[
		{
			"Date":"2016-01-20+10:00",
			"Open":14.53,
			"High":14.67,
			"Low":14.14,
			"Close":14.21,
			"Volume":11597193
		}
	]
}
```

