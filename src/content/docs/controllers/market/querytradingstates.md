---
title: "Market:QueryTradingStates"
sidebar:
    label: QueryTradingStates
---

Retrieves the valid Trading States for a particular Market

**Controller:** Market\
**Topic:** `QueryTradingStates`\
**Action:** Publish\
**Permissions:** None

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Market | String | Always | The code for the Market to query trading states for. Can be a Mixed Market code \(ie: ASX!ASX+CXA\) |

## Response

An unordered array of Trading State objects

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| Name | String | Always | The name of this Trading State. Corresponds to the `TradingState` property on Security and `Status` on a Trading Market state |
| Reason | String | Always | The reason for this Trading State. One of the following:<br>**Unknown:**The reason is unknown.<br>**Normal**: This state is part of normal trading operations.<br>**Suspend**: This state represents a suspension.<br>**TradingHalt**: This state represents a temporary trading halt.<br>**NewsRelease**: This state represents a pending news release |
| Allows | String | Always | The allowed trading actions in this state. One or more of the following values, separated by commas:<br>**None**: No actions are allowed.<br>**OrderPlace**: Orders may be placed.<br>**OrderAmend**: Orders may be amended.<br/>**OrderMove**: Orders may be moved.<br>**OrderCancel**: Orders may be cancelled.<br>**Match**: Orders will be automatically matched and Trades occur.<br>**ReportCancel**: Trades may be reported or cancelled.<br>**OrdersOnly**: Orders may be placed, amended, moved, or cancelled.<br>**All**: Includes all the above actions |

## Example

**Send:**
```json
{"Controller":"Market","Topic":"QueryTradingStates","TransactionID":1,"Data":{"Market":"ASX"}}
```

**Receive:**
```json
{
	"Controller":"Market",
	"Topic":"QueryTradingStates",
	"Data":
	[
		{"Name":"PreOpen", "Reason":"Normal","Allows":"OrdersOnly, ReportCancel"},
		{"Name":"Open", "Reason":"Normal","Allows":"All"},
		...
		{"Name":"Suspended", "Reason":"Suspend","Allows":"OrderCancel, ReportCancel"}
	],
	"TransactionID":1
}
```

