---
title: "Fragments:QueryCustomFragments"
sidebar:
    label: QueryCustomFragments
---

Queries for custom pieces of data

*This is a legacy API and should not be used.*

**Controller:** Fragments\
**Topic:** `QueryCustomFragments`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name                | Type   | Expect   | Description |
| :-----------------  | :----- | :------- | :--- |
| Source | String | Required | The data source name. |
| Target | Any | Required | The targeting data for this data source. |
| Fragments | Array | Required | An array of Fragment Definitions defining the fragments to retrieve. |
| TradingDate | DateTime | Optional | The trading date to retrieve fragments for. If omitted, retrieves fragments for the current date relevant to the Target. |

## Fragment Definition object

| **Name** | **Type** | **Description** |
| :--- | :--- | :--- |
| Name | String | Required. The name of the Fragment in the output. |
| Source | String | Optional. The name of the Fragment to retrieve. If omitted, uses the Name. |

This object can include extra fields, determined by the fragment being requested.

## Response

An object containing the fragment data, with the Name fields used as property names.

## Example

**Send:**
```json
{
	"Controller":"Fragments",
	"Topic":"QueryCustomFragments",
	"TransactionID":1,
	"Data":
	{
		"Source":"Fundamentals.ShareholderHoldings",
		"Target":{"Name":"CUSTODIAL SERVICES LIMITED"},
		"Fragments":
		[
			{"Name":"Holdings","Data":"Fundamentals.TopShareholders"}
		]
	}
}
```

**Receive:**
```json
{"Controller":"Fragments","Topic":"QueryCustomFragments","TransactionID":1,"Data":{"Holdings":[]}}
```
