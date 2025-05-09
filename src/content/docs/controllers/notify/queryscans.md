---
title: "Notify:QueryScans"
sidebar:
    label: QueryScans
---

Requests the state of the persistent Scans for the authenticated user.

**Controller:** Notify\
**Topic:** `QueryScans`\
**Action:** Publish\
**Permissions:** None

## Request

No Request Body

## Response

An array of Scan Change objects. See the [Scans](../scans/) subscription for more information.

## Example

**Send:**
```json
{"Controller":"Notify","Topic":"QueryScans","TransactionID":1}
```

**Receive:**
```json
{"Controller":"Notify","Topic":"QueryScans","TransactionID":1,"Data":"Data":[
	{"Operation":"Clear"},
	{"Operation":"Add",{"ID":"j5Tm6X","Name":"Hot Stocks","Metadata":{"Category":"User"},"Status":"Active","Type":"Market.Monitor"}}
]}
```
