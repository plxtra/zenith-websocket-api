---
title: "Notify:QueryMatches"
sidebar:
    label: QueryMatches
---

Requests the current matches for a specific persistent Scan.

**Controller:** Notify\
**Topic:** `QueryMatches`\
**Action:** Publish\
**Permissions:** Zenith/Market

## Request

| Name   | Type    | Expect   | Description |
| :------| :------ | :------- | :--- |
| ScanID | String  | Always   | The persistent Scan identifier to request matches for. |

## Response

An array of Scan Match Change objects. See the [Matches](../matches/) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"QueryMatches","TransactionID":1,"Data":{"ScanID":"j5Tm6X"}}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"QueryMatches","TransactionID":1,"Data":"Data":[
	{"Operation":"Clear"},
	{"Operation":"Add","Key":"BHP.ASX"}
]}
```
