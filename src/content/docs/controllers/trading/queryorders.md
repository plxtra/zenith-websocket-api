---
title: "Trading:QueryOrders"
sidebar:
    label: QueryOrders
---

Requests the current Orders for the given Account.

**Controller:** Trading\
**Topic:** `QueryOrders`\
**Action:** Publish\
**Permissions:** Zenith/Trading

## Request

| Name    | Type    | Expect   | Description |
| :------ | :------ | :------- | :--- |
| Account | String | Always | The Account to request Orders for |
| OrderID | String | Optional | If supplied, will return the requested Order |

## Response

An unordered array of Order objects. See the [Orders](../orders/#order-object) subscription for more information.

**Send:**
```json
{"Controller":"Trading","Topic":"QueryOrders","TransactionID":1,"Data":{"Account":"1234[Demo]"}}
```

**Receive:**
```json
{
	"Controller":"Trading",
	"Topic":"QueryOrders",
	"TransactionID":1,
	"Data":
	[
		{
			"ID":"00000000-0000-0000-CDEF-123456789ABC",
			...
		}
	[
}
```
