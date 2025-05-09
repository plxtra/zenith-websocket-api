---
title: "Notify:ExecuteScan"
sidebar:
    label: ExecuteScan
---

Executes a one-off Scan and returns the current matches, given the scanner parameters.

**Controller:** Notify\
**Topic:** `ExecuteScan`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name     | Type    | Expect   | Description |
| :------- | :------ | :------- | :--- |
| Type     | String  | Always   | The scanner type. |
| Criteria | Any     | Always   | The parameters of the Scan. Format depends on the type. |
| Target   | Any     | Always   | The targeting information for the Scan. Format depends on the type. |

See [Appendix J1 - Scanners](../../../appendices/j1-scanners/) for more information on scanner criteria and targets.

## Response

An array of Scan Match Change objects. See the [Matches](../matches/) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"ExecuteScan","TransactionID":1,"Data":{
	"Type":"Market.Scan",
	"Criteria":["IsIndex"],
	"Target":["ASX[Demo]"]
}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"QueryMatches","TransactionID":1,"Data":"Data":[
	{"Operation":"Clear"},
	{"Operation":"Add","Key":"BHP.ASX"}
]}
```
